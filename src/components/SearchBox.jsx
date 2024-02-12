import React from 'react'
import { SearchBar, SearchBarProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';


const SearchBox = () => {
    const store = useCreateStore();
  const controls= useControls(
    {
      enableShortKey: true,
      placeholder: 'Type keywords...',
      shortKey: 'f',
      spotlight: false,
      type: {
        options: ['ghost', 'block'],
        value: 'ghost',
      },
    },
    { store },
  );
  return (

    <SearchBar {...controls} />

    )
}

export default SearchBox