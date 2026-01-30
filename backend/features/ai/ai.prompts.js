/**
 * AI Prompt Templates for PrepPilot AI
 * Centralized prompt management for consistent AI interactions
 */

/**
 * Generate interview question prompt
 */
export const questionGenerationPrompt = (params) => {
  const { role, topic, difficulty = 'medium', experience = 0 } = params;

  return `You are an expert technical interviewer conducting a ${role} interview.

Role: ${role}
Topic: ${topic}
Difficulty: ${difficulty}
Candidate Experience: ${experience} years

Generate ONE technical interview question that:
1. Is appropriate for ${experience} years of experience
2. Tests practical understanding of ${topic}
3. Has clear requirements and constraints
4. Can be answered in 5-10 minutes
5. Is relevant to real-world ${role} scenarios

Provide ONLY the question text. Do not include:
- Solutions or answers
- Additional commentary
- Difficulty ratings
- Follow-up questions

Question:`;
};

/**
 * Evaluate candidate's answer prompt
 */
export const answerEvaluationPrompt = (params) => {
  const { question, answer, role, topic, experience = 0 } = params;

  return `You are an experienced technical interviewer evaluating a ${role} candidate's response.

Interview Context:
- Role: ${role}
- Topic: ${topic}
- Experience Level: ${experience} years

Question Asked:
${question}

Candidate's Answer:
${answer}

Provide a comprehensive evaluation in the following JSON format:
{
  "score": <number 0-10>,
  "strengths": ["strength 1", "strength 2", ...],
  "weaknesses": ["weakness 1", "weakness 2", ...],
  "suggestions": ["suggestion 1", "suggestion 2", ...],
  "overallFeedback": "<2-3 sentences summary>"
}

Evaluation Criteria:
- Technical accuracy (30%)
- Problem-solving approach (25%)
- Communication clarity (20%)
- Best practices awareness (15%)
- Edge case consideration (10%)

Be constructive, specific, and encouraging. Consider the candidate's experience level.`;
};

/**
 * Generate hint for struggling candidate
 */
export const hintGenerationPrompt = (params) => {
  const { question, topic, difficulty = 'medium' } = params;

  return `You are a supportive technical interviewer. A candidate is struggling with this question:

Question: ${question}
Topic: ${topic}
Difficulty: ${difficulty}

Provide a helpful hint that:
1. Guides them toward the right approach without giving the answer
2. Is encouraging and supportive
3. Focuses on problem-solving strategy
4. Suggests what concept or approach to consider
5. Does not reveal the complete solution

Keep it brief (2-3 sentences). Start with "Hint:".`;
};

/**
 * Generate interview session summary
 */
export const sessionSummaryPrompt = (params) => {
  const {
    role,
    topicsCovered = [],
    avgScore = 0,
    duration = 0,
    questionsAsked = 0,
  } = params;

  const topicsText = topicsCovered.length > 0 ? topicsCovered.join(', ') : 'Various topics';

  return `You are a career coach providing a summary for a ${role} interview preparation session.

Session Details:
- Role: ${role}
- Topics Covered: ${topicsText}
- Average Score: ${avgScore}/10
- Duration: ${duration} minutes
- Questions Attempted: ${questionsAsked}

Generate a concise session summary in JSON format:
{
  "performanceLevel": "<excellent|good|fair|needs improvement>",
  "keyTakeaways": ["takeaway 1", "takeaway 2", "takeaway 3"],
  "strengthAreas": ["area 1", "area 2"],
  "improvementAreas": ["area 1", "area 2"],
  "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3"],
  "motivationalMessage": "<encouraging 1-2 sentence message>"
}

Be honest but encouraging. Focus on actionable insights.`;
};

/**
 * Generate follow-up question prompt
 */
export const followUpQuestionPrompt = (params) => {
  const { previousQuestion, previousAnswer, role, topic } = params;

  return `You are a technical interviewer conducting a ${role} interview on ${topic}.

Previous Question:
${previousQuestion}

Candidate's Answer:
${previousAnswer}

Based on their answer, generate ONE relevant follow-up question that:
1. Digs deeper into their understanding
2. Explores edge cases or optimizations
3. Tests practical application
4. Is appropriate given their response
5. Maintains interview flow

Provide ONLY the follow-up question text without any additional commentary.

Follow-up Question:`;
};

/**
 * Resume analysis prompt (for future resume parsing feature)
 */
export const resumeAnalysisPrompt = (params) => {
  const { resumeText, targetRole = '' } = params;

  return `You are an expert technical recruiter analyzing a resume${targetRole ? ` for a ${targetRole} position` : ''}.

Resume Content:
${resumeText}

Analyze the resume and extract key information in JSON format:
{
  "skills": ["skill 1", "skill 2", ...],
  "experience": <years as number>,
  "currentRole": "<current or most recent role>",
  "strengths": ["strength 1", "strength 2"],
  "suggestedInterviewTopics": ["topic 1", "topic 2", "topic 3"],
  "suggestedDifficulty": "<easy|medium|hard>"
}

Focus on technical skills and experience relevant to ${targetRole || 'technical roles'}.`;
};

/**
 * Code review feedback prompt
 */
export const codeReviewPrompt = (params) => {
  const { code, language, topic } = params;

  return `You are a senior software engineer reviewing code for a ${topic} implementation.

Language: ${language}

Code Submitted:
\`\`\`${language}
${code}
\`\`\`

Provide a code review in JSON format:
{
  "score": <number 0-10>,
  "correctness": "<assessment of correctness>",
  "timeComplexity": "<Big O notation and explanation>",
  "spaceComplexity": "<Big O notation and explanation>",
  "codeQuality": ["quality point 1", "quality point 2"],
  "improvements": ["improvement 1", "improvement 2"],
  "goodPractices": ["practice 1", "practice 2"],
  "issues": ["issue 1", "issue 2"]
}

Be specific about algorithmic efficiency and code quality.`;
};

export default {
  questionGenerationPrompt,
  answerEvaluationPrompt,
  hintGenerationPrompt,
  sessionSummaryPrompt,
  followUpQuestionPrompt,
  resumeAnalysisPrompt,
  codeReviewPrompt,
};
