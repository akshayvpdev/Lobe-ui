import {
  DraggablePanel,
  DraggablePanelBody,
  DraggablePanelContainer,
  DraggablePanelFooter,
  DraggablePanelHeader,
} from "@lobehub/ui";
import { useState } from "react";
import { Flexbox } from "react-layout-kit";
import SearchBox from "./SearchBox";
import Card from "./Card";
import SideNav from "./SideNav";

export default function DragableDiv({ placement }) {
  const [expand, setExpand] = useState(true);
  const [pin, setPin] = useState(true);
  return (
    <Flexbox
      style={{
        height: "100%",

        backgroundColor: "#5E5E5E",
      }}>
      <DraggablePanel
        minWidth={200}
        maxWidth={400}
        expand={expand}
        mode={pin ? "fixed" : "float"}
        onExpandChange={setExpand}
        pin={pin}
        placement={placement}
        style={{
          display: "flex",
          flexDirection: "column",
          height:'100%'
        }}>
        <DraggablePanelContainer style={{ flex: 1 }}>
          <DraggablePanelHeader
            pin={pin}
            position="left"
            setExpand={setExpand}
            setPin={setPin}
            title="LobHub"
          />
          <DraggablePanelBody>
            <SearchBox />
            <div className="" style={{ marginTop: "20px" }}>
              <Card title={"Just Chat"} />
            </div>
          </DraggablePanelBody>
        </DraggablePanelContainer>
      </DraggablePanel>
    </Flexbox>
  );
}
