import React from "react";
import DragableDiv from "../components/DragablePanel";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

function ChatPage() {
  return (
    <>
      <DragableDiv placement={"left"} />
      <Layout />
    </>
  );
}

export default ChatPage;
