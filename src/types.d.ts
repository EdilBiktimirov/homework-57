export interface User {
  name: string;
  email: string;
  active: boolean;
  status: string;
  id: string;
}

export interface UserMutation {
  name: string;
  email: string;
  active: boolean;
  status: string;
}