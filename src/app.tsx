import { count } from "./signals/store";

export function App() {
  return (
    <>
      <div class="card">
        <button onClick={() => (count.value += 1)}>count is {count}</button>
      </div>
    </>
  );
}
