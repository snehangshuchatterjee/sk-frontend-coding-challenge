import React from 'react';
import Avatar from '../avatar';
import Text from '../text';

interface CommentHeaderProps {
  username: string;
  commentTime: string;
}

const CommentHeader = (props: CommentHeaderProps) => {
  const { commentTime, username } = props;

  return (
    <div className="flex flex-row space-x-2 mb-4 items-center">
      <Avatar />
      <Text isHeader content={username} />
      <Text isTime content={commentTime} />
    </div>
  );
};

export default CommentHeader;
