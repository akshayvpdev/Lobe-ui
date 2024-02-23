import { Layout } from "@lobehub/ui";
import { createStyles } from "antd-style";
import { Flexbox } from "react-layout-kit";
import MainNavbar from "./MainNavbar";
import GridLayout from "./GridBackground";

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
  Array.from({ length: 50 })
    .fill("")
    .map((_, index) => <div key={index}>{text}</div>);

export default () => {
  const { styles } = useStyles();
  return (
    <div
      style={{
        height: "100%",
        flex: 1,
        backgroundColor: "rgb(245 245 245 / 94%)",
        overflow: "hidden",
      }}>
      <Layout

        header={
          <Flexbox
            align={"center"}
            className={styles.header}
            justify={"center"}>
            <MainNavbar />
          </Flexbox>
        }>
      

        <GridLayout>
          <MockData text="CONTENT" />
        </GridLayout>
      </Layout>
    </div>
  );
};
