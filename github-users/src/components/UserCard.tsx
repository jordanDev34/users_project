import React from 'react';

interface UserCardProps {
  user: {
    login: string;
    avatar_url: string;
  };
  onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div onClick={onClick} className="border p-4 flex items-center cursor-pointer">
      <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full mr-4" />
      <div>{user.login}</div>
    </div>
  );
};

export default UserCard;
