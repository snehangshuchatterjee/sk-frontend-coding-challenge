import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Comment from '../components/comment';
import ReplyComponent from '../components/reply';
import { addComment, commentType } from '../redux/slices/commentSlice';
import { useTypedSelector } from '../redux/store';

export const ComponentsList = () => {
  const { t } = useTranslation();
  const comments = useTypedSelector((state) => state.comments.comments);
  const [newComment, setNewComment] = React.useState('');
  const [parentId, setParentId] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setNewComment(event.currentTarget.value);
  };

  const handleReplyButtonClicked = (userName: string, parentId: number) => {
    setNewComment(`@${userName}`);
    setParentId(parentId);
  };

  const handleCommentSubmit = () => {
    const newCommentData: commentType = {
      commentId: comments.length + 1,
      parentId: parentId,
      level: 0,
      userId: 'my_user_id',
      timestamp: 'today',
      commentText: newComment,
    };

    dispatch(addComment(newCommentData));
    setNewComment('');
  };

  return (
    <div>
      {comments.map((dataItem) => {
        return (
          <Comment
            key={dataItem.commentId}
            commentText={dataItem.commentText}
            level={dataItem.level}
            timestamp={dataItem.timestamp}
            userId={dataItem.userId}
            onClick={handleReplyButtonClicked}
            parentId={dataItem.parentId}
          />
        );
      })}
      <ReplyComponent
        handleChange={handleChange}
        newComment={newComment}
        handleCommentSubmit={handleCommentSubmit}
        handleCancel={() => setNewComment('')}
      />
    </div>
  );
};
