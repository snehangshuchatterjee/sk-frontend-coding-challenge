import React from 'react';
import Avatar from '../shared/avatar';
import Button from '../shared/button';

interface ReplyComponentProps {
  handleChange: (event: any) => void;
  newComment: string;
  handleCommentSubmit: React.MouseEventHandler<HTMLButtonElement>;
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}

const ReplyComponent = (props: ReplyComponentProps) => {
  const { handleChange, newComment, handleCommentSubmit, handleCancel } = props;

  return (
    <div className="mb-10">
      <div>
        <textarea
          id="new-comment-textbox"
          data-testid="new-comment-textbox"
          onChange={handleChange}
          value={newComment}
          className="block w-[93%] h-[5em] ml-10 mb-5 p-4 text-[#67727E] rounded-lg bg-[#F5F5F5] sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-[#F5F5F5] dark:border-gray-600 dark:placeholder-[#F5F5F5] dark:text-[#67727E] dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-hidden break-words"
        />
      </div>
      <div className="flex flex-row justify-between ml-10 mr-12">
        <div>
          <Avatar selfAvatar />
        </div>
        <div className="flex flex-row space-x-4">
          <Button
            label="Cancel"
            handleClick={handleCancel}
            disabled={newComment === ''}
          />
          <Button label="Reply" handleClick={handleCommentSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ReplyComponent;
