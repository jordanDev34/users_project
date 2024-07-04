import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

interface User {
  login: string;
  avatar_url: string;
}

interface UserListProps {
  onSelectUser: (username: string) => void;
}

const UserList: React.FC<UserListProps> = ({ onSelectUser }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('https://api.github.com/users?per_page=10');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.login} user={user} onClick={() => onSelectUser(user.login)} />
      ))}
    </div>
  );
};

export default UserList;
