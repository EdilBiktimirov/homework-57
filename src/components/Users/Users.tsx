import React from 'react';
import type {User} from "../../types";
import UserItem from "../UserItem/UserItem";

interface Props extends React.PropsWithChildren {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <UserItem user={user} key={user.id}/>
          )
      })}
    </div>
  );
};

export default Users;