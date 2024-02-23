import React from 'react'
import { Header } from '@lobehub/ui';
import ActionButton from './ActionButton';


function Navbar() {
    return <Header  style={{backgroundColor:'#8F6E4D'}} actions={<ActionButton/>} logo={'LOGO'} nav={'ChatHub'} />
}

export default Navbar





// import { Header } from '@lobehub/ui';

// export default () => {
//   return <Header actions={'ACTIONS'} logo={'LOGO'} nav={'NAV'} />;
// };