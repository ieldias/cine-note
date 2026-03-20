export interface User {
  name: string;
  email: string;
  password: string;
}

export type Theme = 'dark' | 'light';
export type Screen = 'login' | 'register' | 'dashboard';
