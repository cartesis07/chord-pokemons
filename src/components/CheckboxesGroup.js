import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { MyResponsiveChord } from "./MyResponsiveChord";

import bug from "../images/Bug.png";
import dark from "../images/Dark.png";
import dragon from "../images/Dragon.png";
import electric from "../images/Electric.png";
import fairy from "../images/Fairy.png";
import fighting from "../images/Fighting.png";
import fire from "../images/Fire.png";
import flying from "../images/Flying.png";
import ghost from "../images/Ghost.png";
import grass from "../images/Grass.png";
import ground from "../images/Ground.png";
import ice from "../images/Ice.png";
import normal from "../images/Normal.png";
import poison from "../images/Poison.png";
import psychic from "../images/Psychic.png";
import rock from "../images/Rock.png";
import steel from "../images/Steel.png";
import water from "../images/Water.png";

export default function CheckboxesGroup({ data, keys }) {
  const imagesArray = [
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
  ];

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

    setState({
      ...state,
      type_selector: new_type_selector,
      chord_keys: new_chord_keys,
      chord_data: new_chord_data,
    });
  };

  return (
    <>
      <div className="responsive-chord">
        <MyResponsiveChord data={state.chord_data} keys={state.chord_keys} />
      </div>{" "}
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        variant="standard"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <FormLabel component="legend">Choose Pokemon Types</FormLabel>
        {keys.map(function (name, index) {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  icon={
                    <Avatar
                      sx={{ width: 20, height: 20 }}
                      src={imagesArray[index]}
                      style={{ filter: "brightness(50%)" }}
                    ></Avatar>
                  }
                  checkedIcon={
                    <Avatar
                      sx={{ width: 20, height: 20 }}
                      src={imagesArray[index]}
                    ></Avatar>
                  }
                  checked={state.type_selector[index]}
                  name={keys[index]}
                  onChange={(e) => handleChange(e, index)}
                  size="small"
                />
              }
              label={
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="body2" color="textSecondary">
                    {name}
                  </Typography>
                </div>
              }
            />
          );
        })}
      </FormControl>
    </>
  );
}
