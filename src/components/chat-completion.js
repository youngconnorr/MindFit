import { config, https } from 'firebase-functions';
import { Configuration, OpenAIApi } from "openai";

const openAIConfiguration = new Configuration({
    apiKey: config().openai.key,
});
const openai = new OpenAIApi(openAIConfiguration);

export const chatWithGPT4 = https.onCall(async (data) => {
    const prompt = data.prompt;
    try {
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo-0125", // Use the correct GPT-4 model identifier
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 150,
        });
        return { response: response.data.choices[0].text.trim() };
    } catch (error) {
        console.error("OpenAI error:", error);
        throw new https.HttpsError('internal', 'Failed to fetch response from OpenAI');
    }

});