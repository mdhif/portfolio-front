import { useState } from 'react'; // Import useState hook
import { Button } from '@/components/Button';

export function InputComponent(props) {
  const [inputText, setInputText] = useState(''); // State to store the input text

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Define the request body as an object with the 'text' property
    const requestBody = { text: inputText };

    try {
      // Send a POST request to your FastAPI backend (specify the full URL)
      const response = await fetch('http://localhost/api/tts', { // Adjust the URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody), // Convert the object to JSON
      });

      if (!response.ok) {
        throw new Error('Request failed'); // Handle errors here
      }

      // Assuming your backend returns the generated speech as a WAV file
      // You can handle the response here, e.g., play the audio
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      // Do something with audioUrl, such as playing it
      const audioElement = new Audio(audioUrl);
      audioElement.play();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Please type your input here for text to speech
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button type="submit" className="ml-4 flex-none">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
