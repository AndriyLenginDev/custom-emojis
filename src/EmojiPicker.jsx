import React from 'react';

const EmojiPicker = ({ addEmoji }) => {
  return (
    <img
      className="mr-2 cursor-pointer"
      width="20"
      height="20"
      src="/emojis/flushed_emoji.png"
      alt=""
      onClick={addEmoji}
    />
  );
};

export default EmojiPicker;
