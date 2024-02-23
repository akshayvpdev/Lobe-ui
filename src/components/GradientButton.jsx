import {
    GradientButton,
    GradientButtonProps,
    StoryBook,
    useControls,
    useCreateStore,
  } from '@lobehub/ui';
  
  export default function Button() {
    const store = useCreateStore();
    const control= useControls(
      {
        children:['Get a Demo','Get a Demo','Get a Demo','Get a Demo','Get a Demo'],
        glow: true,
        size: {
          options: ['large', 'normal', 'small'],
          value: 'large',
        },
      },
      { store },
    );
  
return (
    <div> 
        {/* {control?.children.map((text, index) => (
            <GradientButton key={index} {...control}/>
        ))} */}
    </div>
);
  };
  