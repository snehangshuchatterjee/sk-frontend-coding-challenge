import React from 'react';
import CommentFooter from '../shared/comment-footer';
import CommentHeader from '../shared/comment-header';
import Text from '../shared/text';

interface CommentProps {
  level: number;
  userId: string;
  timestamp: string;
  commentText: string;
  parentId: number;
  onClick: (userName: string, parentId: number) => void;
}

const Comment = (props: CommentProps) => {
  const { commentText, level, timestamp, userId, parentId, onClick } = props;
  const initialSpace = 8;

  return (
    <div
      className={
        (level ? `ml-${(level + 1) * initialSpace}` : 'ml-8') + ' mb-8'
      }
    >
      <CommentHeader commentTime={timestamp} username={userId} />
      <Text content={commentText} />
      <CommentFooter parentId={parentId} replyTo={onClick} userName={userId} />
    </div>
  );
};

export default Comment;
