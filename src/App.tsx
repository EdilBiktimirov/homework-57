import React, {useState} from 'react';
import type {User} from "./types";
import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <div className="container d-flex">
      <UserForm onSubmit={addUser}/>
      <Users users={users} />
    </div>
  );
}

export default App;
