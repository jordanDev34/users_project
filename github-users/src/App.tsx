import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-1/2 p-4">
          <UserList onSelectUser={setSelectedUser} />
        </div>
        <div className="w-1/2 p-4">
          {selectedUser && <UserDetail username={selectedUser} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
