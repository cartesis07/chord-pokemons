import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { MyResponsiveChord } from "./MyResponsiveChord";

export default function CheckboxesGroup({ data, keys }) {
  const [state, setState] = React.useState({
    type_selector: new Array(keys.length).fill(true),
    chord_data: data,
    chord_keys: keys,
  });

  const handleChange = (e, index) => {
    const new_type_selector = state.type_selector.map((item, j) => {
      if (j === index) {
        return !item;
      } else {
        return item;
      }
    });

    let new_chord_data = [];
    let new_chord_keys = [];

    for (let i = 0; i < new_type_selector.length; i += 1) {
      if (new_type_selector[i] === true) {
        new_chord_data.push(data[i]);
        new_chord_keys.push(keys[i]);
      }
    }

    console.log(new_chord_data);

    setState({
      ...state,
      type_selector: new_type_selector,
      chord_data: new_chord_data,
      chord_keys: new_chord_keys,
    });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Choose Pokemon Types</FormLabel>
          {keys.map(function (name, index) {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={state.type_selector[index]}
                    name={keys[index]}
                    onChange={(e) => handleChange(e, index)}
                  />
                }
                label={name}
              />
            );
          })}
          <FormHelperText>Select at least two families</FormHelperText>
        </FormControl>
      </Box>{" "}
      <div className="responsive-chord">
        <MyResponsiveChord data={state.chord_data} keys={state.chord_keys} />
      </div>{" "}
    </>
  );
}
