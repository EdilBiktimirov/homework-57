import React, {useState} from 'react';
import './App.css';
import type {User} from "./types";
import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [users, setUsers] = useState<User[]>([
    {name: 'Edil', email: 'idyabik@gmail.com', active: true, status: 'admin', id: '1'},
    {name: 'John', email: 'jonh@gmail.com', active: false, status: 'user', id: '2'},
  ]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  }

  return (
    <div className="container">
      <UserForm onSubmit={addUser}/>
      <Users users={users} />
    </div>
  );
}

export default App;
