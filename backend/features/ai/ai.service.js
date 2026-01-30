import { GoogleGenerativeAI } from "@google/generative-ai";
import { ApiError } from "../../common/middleware/error.middleware.js";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Model configuration
const MODEL_NAME = "gemini-2.5-flash-lite";

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

/**
 * Call Gemini AI with a prompt
 * @param {string} prompt - The prompt to send to Gemini
 * @param {Object} options - Optional configuration overrides
 * @returns {string} - Generated response text
 */
export const callGemini = async (prompt, options = {}) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new ApiError(500, "GEMINI_API_KEY is not configured");
    }

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      throw new ApiError(
        400,
        "Prompt is required and must be a non-empty string",
      );
    }

    // Get the model
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      generationConfig: {
        ...generationConfig,
        ...options.generationConfig,
      },
    });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    if (!text) {
      throw new ApiError(500, "Empty response from Gemini AI");
    }

    return text;
  } catch (error) {
    // Handle Gemini API specific errors
    if (error.message?.includes("API_KEY")) {
      throw new ApiError(500, "Invalid Gemini API key");
    }

    if (error.message?.includes("quota")) {
      throw new ApiError(429, "Gemini API quota exceeded");
    }

    if (error.message?.includes("rate limit")) {
      throw new ApiError(429, "Gemini API rate limit exceeded");
    }

    // Re-throw ApiError instances
    if (error instanceof ApiError) {
      throw error;
    }

    // Log and throw generic error
    console.error("Gemini API error:", error);
    throw new ApiError(500, `AI generation failed: ${error.message}`);
  }
};

/**
 * Generate interview question using Gemini
 * @param {Object} params - { role, topic, difficulty, experience }
 * @returns {string} - Generated question
 */
export const generateQuestion = async (params) => {
  const { role, topic, difficulty = "medium", experience = 0 } = params;

  const prompt = `You are an expert technical interviewer. Generate a ${difficulty} difficulty interview question for a ${role} position.

Topic: ${topic}
Candidate Experience: ${experience} years

Requirements:
- Make it relevant to the role and experience level
- Include clear context and constraints
- Be specific and practical
- Avoid overly theoretical questions

Generate only the question without any additional commentary.`;

  return await callGemini(prompt);
};

/**
 * Generate feedback for candidate's answer
 * @param {Object} params - { question, answer, role, topic }
 * @returns {string} - Generated feedback
 */
export const generateFeedback = async (params) => {
  const { question, answer, role, topic } = params;

  const prompt = `You are an expert technical interviewer providing feedback to a ${role} candidate.

Question: ${question}

Candidate's Answer: ${answer}

Topic: ${topic}

Provide constructive feedback covering:
1. What they did well
2. What could be improved
3. Suggestions for better approaches
4. A score out of 10

Be encouraging and specific.`;

  return await callGemini(prompt);
};

/**
 * Generate a hint for the candidate
 * @param {Object} params - { question, topic }
 * @returns {string} - Generated hint
 */
export const generateHint = async (params) => {
  const { question, topic } = params;

  const prompt = `You are a helpful technical interviewer. A candidate is stuck on this question:

Question: ${question}

Topic: ${topic}

Provide a subtle hint that guides them in the right direction without giving away the answer. Be encouraging and focus on the approach rather than the solution.`;

  return await callGemini(prompt, {
    generationConfig: { temperature: 0.6 },
  });
};
