import React from 'react';

interface ReplyButtonProps {
  children?: any;
  onClick: (event: any) => void;
}

const ReplyButton = (props: ReplyButtonProps) => {
  const { children, onClick } = props;

  return (
    <div>
      <button
        className="bg-transparent text-[#6941C6] font-semibold py-2 px-1 border border-[#D0D5DD] rounded flex items-center justify-center gap-x-1 text-xs"
        onClick={onClick}
        data-testid="reply-to-comment"
      >
        {children}
        <div>Reply</div>
      </button>
    </div>
  );
};

export default ReplyButton;
