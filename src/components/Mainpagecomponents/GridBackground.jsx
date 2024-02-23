import {
  GridBackground,
  GridBackgroundProps,
  StoryBook,
  useControls,
  useCreateStore,
} from "@lobehub/ui";
import { useTheme } from "antd-style";
import { rgba } from "polished";
import Mainpagelayout from "./Mainpagelayout";
import Card from "../Card";
import CardBox from "./CardBox";
import SearchBox from "../SearchBox";
import GradientButton from "../GradientButton";
import Button from "../GradientButton";

export default function GridLayout({ children }) {
  const theme = useTheme();
  const store = useCreateStore();
  const control = useControls(
    {
      animation: true,
      backgroundColor: "#001dff",
      colorBack: rgba(theme.colorText, 0.2),
      colorFront: theme.colorText,
      duration: {
        max: 24,
        min: 1,
        step: 1,
        value: 6,
      },
      flip: false,
      random: true,
      reverse: false,
      showBackground: false,
      strokeWidth: {
        max: 10,
        min: 1,
        step: 1,
        value: 3,
      },
    },
    { store }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h4 style={{ color: "black", fontSize: "45px", marginBottom: "45px" }}>
        Find & Use The Best Agents
      </h4>
      <GridBackground children={<Mainpagelayout />} style={{ width: "50%" }} />
      <SearchBox />

      <div className="button-container" style={{marginTop:'30px'}}>
        <Button/>
      </div>
      <div className="tabs" style={{ marginTop: "20px" }}>
        <CardBox />
      </div>
    </div>
  );
}
