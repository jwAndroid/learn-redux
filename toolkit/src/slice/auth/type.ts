export interface User {
  id: number;
  username: string;
  displayName: string;
}

export interface InitialAuthState {
  user: User | null;
}
