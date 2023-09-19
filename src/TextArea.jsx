import React from 'react';

const TextArea = ({ content, handleInput, handleBlur }) => {
  return (
    <div
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
      suppressContentEditableWarning={true}
      contentEditable="true"
      dangerouslySetInnerHTML={{ __html: content }}
      onInput={handleInput}
      onBlur={handleBlur}
    />
  );
};

export default TextArea;
