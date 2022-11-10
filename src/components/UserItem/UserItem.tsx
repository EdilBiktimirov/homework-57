import React from 'react';
import type {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  let active: string = user.active ? 'Active': 'Inactive'

  return (
    <div className="col-12 text-center card mb-3 p-2 text-bg-info">
    <h3>{user.name}</h3>
      <span className="d-block">{user.email}</span>
      <span className="d-block">{active}</span>
      <span className="d-block">{user.status}</span>
    </div>
  );
};

export default UserItem;