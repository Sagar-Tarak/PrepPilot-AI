/**
 * Utility functions for AI-related operations
 */

/**
 * Robustly extract and parse JSON from an AI response string.
 * Handles cases where the AI wraps JSON in markdown code blocks or includes extra text.
 *
 * @param {string} text - The raw text response from the AI
 * @returns {Object|null} - The parsed JSON object or null if parsing fails
 */
export const extractJSON = (text) => {
  if (!text || typeof text !== "string") return null;

  try {
    // 1. Try direct parsing first (most efficient)
    return JSON.parse(text.trim());
  } catch (e) {
    // 2. Try to find JSON in markdown code blocks (```json ... ``` or ``` ... ```)
    const codeBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/g;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      try {
        return JSON.parse(match[1].trim());
      } catch (innerError) {
        // Silently continue to search other blocks or next method
      }
    }

    // 3. Try to find the first '{' and last '}'
    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      const potentialJson = text.substring(firstBrace, lastBrace + 1);
      try {
        return JSON.parse(potentialJson.trim());
      } catch (innerError) {
        // Silently continue to next method
      }
    }

    // 4. Try more aggressive cleanup (removing problematic characters before/after JSON)
    // This is a last resort
    console.warn(
      "Aggressive JSON extraction failed for text:",
      text.substring(0, 100) + "...",
    );
    return null;
  }
};

/**
 * Extract a score from a text response if JSON parsing fails
 * @param {string} text - The raw text
 * @returns {number} - The extracted score or 0
 */
export const extractScore = (text) => {
  if (!text) return 0;

  // Look for patterns like "Score: 8", "score: 8/10", "8 out of 10"
  const scorePatterns = [
    /score[:\s]+(\d+(?:\.\d+)?)/i,
    /(\d+(?:\.\d+)?)\s*\/\s*10/,
    /(\d+(?:\.\d+)?)\s*out of 10/i,
    /rating[:\s]+(\d+(?:\.\d+)?)/i,
  ];

  for (const pattern of scorePatterns) {
    const match = pattern.exec(text);
    if (match) {
      const score = Number.parseFloat(match[1]);
      return Number.isNaN(score) ? 0 : score;
    }
  }

  return 0;
};
