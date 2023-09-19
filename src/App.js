import { useState } from 'react';
import TextArea from './TextArea';
import EmojiPicker from './EmojiPicker';

// const EMOJI = `<img class='inline-flex' width='20' height='20' src='/emojis/flushed_emoji.png' alt=''/>`;

const EMOJI = `<img class='inline-flex' width='20' height='20' src='${window.location.origin}/emojis/flushed_emoji.png' alt=''/>`;

function App() {
  const [content, setContent] = useState('');

  const handleBlur = (e) => {
    setContent(e.currentTarget.innerHTML);
  };

  const handleAddEmoji = () => {
    setContent(content + EMOJI);
  };

  return (
    <main className="p-10 flex justify-center">
      <div className="w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
        <TextArea
          placeholder="Write your thoughts here..."
          content={content}
          handleBlur={handleBlur}
        />
        <div className="flex justify-between items-center py-2">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Send
          </button>
          <EmojiPicker addEmoji={handleAddEmoji} />
        </div>
      </div>
    </main>
  );
}

export default App;
