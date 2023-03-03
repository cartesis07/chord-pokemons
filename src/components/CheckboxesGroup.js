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
    normal,
    fire,
    water,
    electric,
    grass,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dragon,
    dark,
    steel,
    fairy,
  ];

  const colors = [
    "#9e9e9e",
    "#e92d2f",
    "#2d95fb",
    "#fcdc06",
    "#409d29",
    "#a9ebfc",
    "#fbb759",
    "#9846cf",
    "#8c4e22",
    "#a2d0f2",
    "#ef5492",
    "#dfe5b2",
    "#bfb699",
    "#bc86bc",
    "#5665df",
    "#907575",
    "#83bccc",
    "#f4a9f4",
  ];

  const [state, setState] = React.useState({
    type_selector: new Array(keys.length).fill(true),
    chord_data: data,
    chord_keys: keys,
    chord_colors: colors,
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
    let new_chord_colors = [];

    for (let i = 0; i < new_type_selector.length; i += 1) {
      if (new_type_selector[i] === true) {
        new_chord_data.push(data[i]);
        new_chord_keys.push(keys[i]);
        new_chord_colors.push(colors[i]);
      }
    }

    setState({
      ...state,
      type_selector: new_type_selector,
      chord_keys: new_chord_keys,
      chord_data: new_chord_data,
      chord_colors: new_chord_colors,
    });
  };

  return (
    <>
      <div className="responsive-chord">
        <MyResponsiveChord
          data={state.chord_data}
          keys={state.chord_keys}
          colors={state.chord_colors}
        />
      </div>{" "}
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        variant="standard"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <FormLabel component="legend">Select Pokemon Types</FormLabel>
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
