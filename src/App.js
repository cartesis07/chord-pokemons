import "./styles.css";
import CheckboxesGroup from "./components/CheckboxesGroup";
import {
  data,
  keys,
  score_data,
  stats_data,
} from "./data/arrays/Pokemon Type Stats";

export default function App() {
  return (
    <div className="App">
      <CheckboxesGroup
        data={data}
        keys={keys}
        score_data={score_data}
        stats_data={stats_data}
      />
    </div>
  );
}
