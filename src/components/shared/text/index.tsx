import React from 'react';

interface TextProps {
  content: string;
  isHeader?: boolean;
  isTime?: boolean;
}

const Text = (props: TextProps) => {
  const { content, isHeader, isTime } = props;

  return (
    <div
      className={
        isHeader ? 'font-bold' : isTime ? 'text-gray-300' : 'text-gray-600 mr-4'
      }
    >
      {content}
    </div>
  );
};

export default Text;
