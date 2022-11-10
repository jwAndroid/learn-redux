export interface User {
  id: number;
  username: string;
  displayName: string;
}

export interface AuthState {
  user: User | null;
}
