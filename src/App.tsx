import React, {useState} from 'react';
import './App.css';
import type {User} from "./types";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState<User[]>([
    {name: 'Edil', email: 'idyabik@gmail.com', active: true, status: 'admin', id: 'Edilidyabik@gmail.com'},
    {name: 'John', email: 'jonh@gmail.com', active: false, status: 'user', id: 'Johnjohn@gmail.com'},
  ]);


  return (
    <div className="App">
      {/*<UserForm/>*/}
      <Users users={users} />

    </div>
  );
}

export default App;
