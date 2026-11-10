export interface UserData {
  id?: string;
  userName: string;
  age: number;
  gender: string;
}

export interface TaskData {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}


export type FormType = "edit" | "create";
