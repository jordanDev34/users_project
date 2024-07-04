import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserDetailProps {
  username: string;
}

interface Repo {
  name: string;
  html_url: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ username }) => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    };
    const fetchRepos = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(response.data);
    };
    fetchUser();
    fetchRepos();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-4" />
      <h2 className="text-2xl">{user.login}</h2>
      <h3 className="mt-4">Repositories:</h3>
      <ul>
        {repos.map(repo => (
          <li key={repo.name}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetail;
