import { computed, signal } from "@preact/signals";

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

const createEmptyUser = (): User => ({
  _id: "",
  name: "",
  email: "",
  password: "",
});

export const userDraft = signal<User>(createEmptyUser());
export const users = signal<User[]>([]);

export const roster = computed<User[]>(() => users.value);

export const resetUserDraft = () => {
  userDraft.value = createEmptyUser();
};

export const prependUser = (entry: User) => {
  users.value = [entry, ...users.value];
};
