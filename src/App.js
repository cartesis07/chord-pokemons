import "./styles.css";
import CheckboxesGroup from "./components/CheckboxesGroup";
import { data, keys } from "./data/arrays/Pokemon Type Stats";

export default function App() {
  return (
    <div className="App">
      <CheckboxesGroup data={data} keys={keys} />
    </div>
  );
}
