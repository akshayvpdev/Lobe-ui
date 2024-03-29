import { Layout } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";

import Navbar from "./Navbar";
import DragableDiv from "./DragablePanel";
import ChatInput from "./ChatInput";

const useStyles = createStyles(({ css, token }) => ({
  footer: css`
    height: 36px;
    border-top: 1px solid ${token.colorBorder};
  `,
  header: css`
    height: 100%;
    background: ${token.cyan5A};
    border-bottom: 1px solid ${token.colorBorder};
  `,
}));

const MockData = ({ text }) =>
  Array.from({ length: 10 })
    .fill("")
    .map((_, index) => <div style={{color:'yellow'}} key={index}>{text}</div>);

export default () => {
  const { styles } = useStyles();
  return (
    <div
      style={{
        height: "100%",
        flex: 1,
        backgroundColor: "white",
      }}>
      <Layout
        header={
          <Flexbox
            align={"center"}
            className={styles.header}
            justify={"center"}>
            <Navbar />
          </Flexbox>
        }
        toc={<DragableDiv />}>
        <div >
          <div style={{height:'449px',minWidth:'450px',overflowY:'scroll'}}>
          <MockData text={"test data"} />
          </div>

          <div className="" style={{height:'150px',position:'relative'}}>
          <ChatInput />
          </div>


        </div>
      </Layout>
    </div>
  );
};
