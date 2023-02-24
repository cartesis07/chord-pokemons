import "./styles.css";
import { MyResponsiveChord } from "./MyResponsiveChord";
import { data, keys } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="responsive-chord">
        <MyResponsiveChord data={data} keys={keys} />
      </div>
    </div>
  );
}
