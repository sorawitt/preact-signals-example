import { roster, type User } from "../signals/store";

function maskPassword(password: User["password"]) {
  if (!password) {
    return "—";
  }

  if (password.length <= 4) {
    return `${password.slice(0, 1)}••${password.slice(-1)}`;
  }

  return `${password.slice(0, 3)}••••${password.slice(-2)}`;
}

export function UserTable() {
  const tableRows = roster.value;

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
          {tableRows.length === 0 ? (
            <tr class="border-t border-slate-800/80">
              <td class="py-4 text-center text-sm text-slate-500" colSpan={4}>
                ยังไม่มีผู้ใช้ในรายการ ลองเพิ่มคนแรกดูนะ
              </td>
            </tr>
          ) : (
            tableRows.map((user) => (
              <tr
                key={user._id || `${user.email}-${user.name}`}
                class="border-t border-slate-800/80"
              >
                <td class="py-2 text-slate-500">#{user._id || "PENDING"}</td>
                <td class="py-2">{user.name}</td>
                <td class="py-2 text-slate-400">{user.email}</td>
                <td class="py-2 font-mono text-xs text-slate-500">
                  {maskPassword(user.password)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}
