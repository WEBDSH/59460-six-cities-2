export enum UserType {
  DEFAULT= 'default',
  PRO = 'pro'
}

export type User = {
  name: string;
  email: string;
  avatar: string;
  type: UserType
}
