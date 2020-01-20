import { Role } from './role.class';

export class User {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  status: number;
  birthDay: Date;
  roleName: string;
  isSelected = false;
  age: number;
  sex: number;
  password: string;
  roleIds: [];
  roles: Role[];
  avatar: string;
  count: number;
}
