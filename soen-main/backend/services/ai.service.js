import * as googleAI from '@google/generative-ai';
console.log(googleAI);


const generateResult = async (prompt) => {
  try {
    const result = await generateText({
      model: 'models/gemini-1.5-flash',
      prompt,
      apiKey: process.env.GOOGLE_API_KEY, // Ensure this is set in your .env file
    });
    return result;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};

export { generateResult };