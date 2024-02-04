import React from 'react';
import { CornerUpLeftIcon } from '../../../ui/CornerUpLeftIcon';
import { HeartIcon } from '../../../ui/HeartIcon';
import ReplyButton from '../replyButton';

interface CommentFooterProps {
  replyTo: (userName: string, parentId: number) => void;
  userName: string;
  parentId: number;
}

const CommentFooter = (props: CommentFooterProps) => {
  const { replyTo, userName, parentId } = props;

  return (
    <div className="flex flex-row justify-end space-x-2 mb-4 mr-10 items-center">
      <HeartIcon />
      <ReplyButton onClick={() => replyTo(userName, parentId)}>
        <CornerUpLeftIcon />
      </ReplyButton>
    </div>
  );
};

export default CommentFooter;
