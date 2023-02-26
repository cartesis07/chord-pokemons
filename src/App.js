import "./styles.css";
import { MyResponsiveChord } from "./MyResponsiveChord";
import { data, keys } from "./data";

export default function App() {
  return (
    <div className="App">
      <div className="responsive-chord">
        <MyResponsiveChord data={data} keys={keys} />
      </div>
    </div>
  );
}
