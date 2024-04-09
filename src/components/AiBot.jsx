import { useState } from 'react';
import { getFunctions, httpsCallable } from 'firebase/functions';

const ChatWithGPT4 = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const functions = getFunctions();
    const chatWithGPT4 = httpsCallable(functions, 'chatWithGPT4');

    try {
      const result = await chatWithGPT4({ prompt });
      setResponse(result.data.response);
    } catch (error) {
      console.error("Error calling function:", error);
      setResponse("Failed to get response.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      <div>
        <p>Response from GPT-4:</p>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatWithGPT4;