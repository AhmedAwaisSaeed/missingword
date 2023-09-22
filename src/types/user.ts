export interface userType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  userIndex?: number;
}

export interface record {
  [id: string]: userType;
}

export interface UserState {
  users: record;
  selectedUser?: userType;
  error: null | string;
}
