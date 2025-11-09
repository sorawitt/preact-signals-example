import UserForm from "./components/UserForm";
import { UserTable } from "./components/UserTable";

export function App() {
  return (
    <div class="min-h-screen bg-slate-950 text-slate-100">
      <main class="mx-auto flex max-w-5xl flex-col gap-6 p-4 sm:p-8">
        <header class="space-y-1 text-slate-300">
          <p class="text-xs uppercase tracking-[0.25em] text-slate-500">
            Workspace · 2025
          </p>
          <h1 class="text-3xl font-semibold text-white">Team roster</h1>
          <p class="text-sm text-slate-400">
            Add new teammates and keep the list tidy from one screen.
          </p>
        </header>

        <div class="grid gap-6 lg:grid-cols-2">
          <UserForm />
          <UserTable />
        </div>
      </main>
    </div>
  );
}
