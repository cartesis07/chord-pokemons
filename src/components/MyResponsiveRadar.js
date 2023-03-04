import { ResponsiveRadar } from "@nivo/radar";
import { colors } from "../data/arrays/Pokemon Type Stats";

export function MyResponsiveRadar(props) {
  return (
    <ResponsiveRadar
      data={props.data}
      keys={props.keys}
      indexBy="FIELD1"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={colors}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}

export default { MyResponsiveRadar };
