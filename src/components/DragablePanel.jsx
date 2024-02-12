import {
    DraggablePanel,
    DraggablePanelBody,
    DraggablePanelContainer,
    DraggablePanelFooter,
    DraggablePanelHeader,
  } from '@lobehub/ui';
  import { useState } from 'react';
  import { Flexbox } from 'react-layout-kit';
import SearchBox from './SearchBox';
import Card from './Card';
import SideNav from './SideNav';
  
  export default () => {
    const [expand, setExpand] = useState(true);
    const [pin, setPin] = useState(true);
    return (
      <Flexbox style={{ height:500, position: 'relative' }}>
        <DraggablePanel
        minHeight={'100vh'}
        minWidth={200}
        maxWidth={400}
          expand={expand}
          mode={pin ? 'fixed' : 'float'}
          onExpandChange={setExpand}
          pin={pin}
          placement="left"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <DraggablePanelContainer style={{ flex: 1 }}>
            <DraggablePanelHeader
              pin={pin}
              position="left"
              setExpand={setExpand}
              setPin={setPin}
              title="LobHub"
            />
            <DraggablePanelBody>
                <SearchBox/>
                <div className="" style={{marginTop:'20px'}}>
                    <Card title={'Just Chat'}/>
                </div>
            </DraggablePanelBody>
          </DraggablePanelContainer>
        </DraggablePanel>
        
      </Flexbox>
    );
  };
  