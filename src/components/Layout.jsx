import { Layout } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Flexbox } from 'react-layout-kit';
import DragablePanel from './DragablePanel';
import SideNav from './SideNav';
import SearchBox from './SearchBox';
import Navbar from './Navbar';

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
    .fill('')
    .map((_, index) => <div key={index}>{text}</div>);

export default () => {
  const { styles } = useStyles();
  return (
    <div style={{ height: '100vh', overflow: 'auto',flex:1 }}>
      <Layout
      
      
          header={
            <Flexbox align={'center'} className={styles.header} justify={'center'}>
                <Navbar/>
            </Flexbox>
          }
        // sidebar={<DragablePanel text="SIDEBAR" />}
        toc={'TOC'}

        children={ < MockData  text={'test data'}/>}
        
      >

       
      </Layout>
    </div>
  );
};
