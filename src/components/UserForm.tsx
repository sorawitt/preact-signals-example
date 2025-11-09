import { nanoid } from "nanoid";
import { user, users } from "../signals/store";

export default function UserForm() {
  const setField =
    (field: "name" | "email" | "password") => (e: Event) => {
      user.value = {
        ...user.value,
        [field]: (e.target as HTMLInputElement).value,
      };
    };

  const createUser = (e: Event) => {
    e.preventDefault();
    users.value = [
      {
        ...user.value,
        _id: user.value._id || nanoid(6).toUpperCase(),
      },
      ...users.value,
    ];

    user.value = {
      _id: "",
      name: "",
      email: "",
      password: "",
    };
  };

  return (
    <section class="border border-slate-800/80 bg-slate-950 p-5 text-slate-100">
      <header class="mb-5 space-y-1">
        <p class="text-xs uppercase tracking-[0.25em] text-slate-500">
          Create user
        </p>
        <h2 class="text-2xl font-semibold text-white">Workspace entry</h2>
        <p class="text-sm text-slate-400">
          Add someone new to the roster in just a few fields.
        </p>
      </header>

      <form class="space-y-4" onSubmit={createUser}>
        <label class="block text-sm text-slate-300" htmlFor="name">
          <span class="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">
            Name
          </span>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={user.value.name}
            onChange={setField("name")}
            class="block w-full border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-white/40"
            placeholder="Ada Lovelace"
          />
        </label>

        <label class="block text-sm text-slate-300" htmlFor="email">
          <span class="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">
            Email
          </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={user.value.email}
            onChange={setField("email")}
            class="block w-full border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-white/40"
            placeholder="ada@example.com"
          />
        </label>

        <label class="block text-sm text-slate-300" htmlFor="password">
          <span class="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-500">
            Password
          </span>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
            value={user.value.password}
            onChange={setField("password")}
            class="block w-full border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-white/40"
            placeholder="••••••••"
          />
        </label>

        <button
          type="submit"
          class="w-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
        >
          Add user
        </button>
      </form>
    </section>
  );
}
