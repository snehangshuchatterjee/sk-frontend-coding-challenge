import React from 'react';
import { UserIcon } from '../../../ui/UserIcon';

interface AvatarProps {
  selfAvatar?: boolean;
}

const Avatar = (props: AvatarProps) => {
  const { selfAvatar } = props;

  return (
    <div
      style={{
        backgroundColor: selfAvatar ? '#F0E4FF' : '#E4F0FF',
      }}
      className="h-12 w-12 rounded-full flex items-center justify-center"
    >
      <UserIcon />
    </div>
  );
};

export default Avatar;
