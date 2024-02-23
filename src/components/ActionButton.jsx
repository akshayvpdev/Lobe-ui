import {
    ActionIconGroup,
    ActionIconGroupProps,
    StoryBook,
    useControls,
    useCreateStore,
  } from '@lobehub/ui';
  
  import { dropdownMenu, items } from './data/ActionButtonGroup';
  
  export default function ActionButton() {
    const store = useCreateStore();
    const control= useControls(
      {
        direction: {
          options: ['row', 'column'],
          value: 'row',
        },
        spotlight: true,
        type: {
          options: ['ghost', 'block', 'pure'],
          value: 'block',
        },
      },
      { store },
    );
  
    return (

        <ActionIconGroup
          dropdownMenu={dropdownMenu}
          items={items}
          onActionClick={(key) => console.log(key)}

        />
    );
  };
  