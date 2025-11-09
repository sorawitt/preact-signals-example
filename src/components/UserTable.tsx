import { users } from "../signals/store";

type UserRow = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const mockRows: UserRow[] = [
  {
    id: "001",
    name: "Ada Lovelace",
    email: "ada@example.com",
    password: "analytical-engine",
  },
  {
    id: "002",
    name: "Alan Turing",
    email: "alan@example.com",
    password: "enigma-1943",
  },
  {
    id: "003",
    name: "Grace Hopper",
    email: "grace@example.com",
    password: "compiler-queen",
  },
];

function maskPassword(password: string) {
  if (!password) {
    return "—";
  }

  if (password.length <= 4) {
    return `${password.slice(0, 1)}••${password.slice(-1)}`;
  }

  return `${password.slice(0, 3)}••••${password.slice(-2)}`;
}

export function UserTable() {
  const tableRows: UserRow[] =
    users.value.length > 0
      ? users.value.map((entry, index) => ({
          id:
            entry._id?.trim() ||
            `USR-${(index + 1).toString().padStart(3, "0")}`.toUpperCase(),
          name: entry.name || "Unnamed",
          email: entry.email || "not-set@workspace.app",
          password: entry.password || "",
        }))
      : mockRows;

  return (
    <section class="border border-slate-800/80 bg-slate-950 p-5 text-slate-100">
      <header class="mb-4 space-y-1">
        <p class="text-xs uppercase tracking-[0.25em] text-slate-500">
          User list
        </p>
        <h2 class="text-xl font-semibold text-white">Current roster</h2>
        <p class="text-sm text-slate-400">
          Everything that has been added lives here for quick reference.
        </p>
      </header>
      <table class="w-full border-collapse text-sm text-slate-200">
        <thead class="text-left text-xs uppercase tracking-[0.2em] text-slate-500">
          <tr>
            <th class="py-2">ID</th>
            <th class="py-2">Name</th>
            <th class="py-2">Email</th>
            <th class="py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((user) => (
            <tr key={user.id} class="border-t border-slate-800/80">
              <td class="py-2 text-slate-500">#{user.id}</td>
              <td class="py-2">{user.name}</td>
              <td class="py-2 text-slate-400">{user.email}</td>
              <td class="py-2 font-mono text-xs text-slate-500">
                {maskPassword(user.password)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
