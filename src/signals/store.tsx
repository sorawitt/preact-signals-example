import { signal } from "@preact/signals";
interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export const user = signal<User>({
  _id: "",
  name: "",
  email: "",
  password: "",
});

export const users = signal<User[]>([]);
