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
    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target
    setUser(prev => ({...prev, [name]: checked}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...user,
      active: user.active,
    });

    setUser(prev => ({
      ...prev,
      name: '',
      email: '',
      status: '',
    }));
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="col me-3 ">
        <label htmlFor={"name"}>Name</label>
        <input
          className="form-control mb-2 w-75"
          id={"name"}
          name={"name"}
          type={"text"}
          value={user.name}
          placeholder={"Enter name"}
          onChange={onUserChange}
          required/>
        <label htmlFor={"email"}>Email</label>
        <input
          className="form-control mb-2 w-75"
          id={"email"}
          name={"email"}
          type={"email"}
          value={user.email}
          placeholder={"Enter email"}
          onChange={onUserChange}
          required/>
        <label htmlFor={"active"}>Active</label>
        <input
          className="form-check-input ms-2 mb-2"
          id={"active"}
          name={"active"}
          type={"checkbox"}
          onChange={onCheckChange}
        />
        <select
          className="form-select mb-2 w-75"
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
        <button type={"submit"} className="btn btn-outline-info btn-lg">Add</button>
      </form>
    </>
  );
};

export default UserForm;