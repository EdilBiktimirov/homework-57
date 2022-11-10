import React, {ChangeEvent, useState} from 'react';
import type {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>(
    {name: '', email: '', active: false, status: ''});

  const onUserChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    console.log(name, value);

    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target

    setUser(prev => ({...prev, [name]: checked}))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...user,
      active: user.active,
    })
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor={"name"}>Name</label>
        <input
          id={"name"}
          name={"name"}
          type={"text"}
          placeholder={"Enter name"}
          onChange={onUserChange}
          required/>
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          name={"email"}
          type={"email"}
          placeholder={"Enter email"}
          onChange={onUserChange}
          required/>
        <label htmlFor={"active"}>Active</label>
        <input
          id={"active"}
          name={"active"}
          type={"checkbox"}
          onChange={onCheckChange}
        />
        <select
          id={"status"}
          name={"status"}
          value={user.status}
          onChange={onUserChange}
          required>

          <option disabled value=''>Select status</option>
          <option value={"user"}>user</option>
          <option value={"editor"}>editor</option>
          <option value={"admin"}>admin</option>

        </select>
        <button type={"submit"}>Add</button>
      </form>
    </>
  );
};

export default UserForm;