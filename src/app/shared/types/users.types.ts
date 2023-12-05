export enum Role {
  user = 'User',
  admin = 'Admin',
  agent = 'Agent',
}

export type User = {
  id: number;
  email: string;
  password: string;
  role: Role;
}

export type LogInRequest = Omit<User, 'id' | 'role'>

export type SafeUser = Omit<
  User,
  'password'
>