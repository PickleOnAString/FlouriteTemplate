import { useQuery } from '@tanstack/react-query';
import React from 'react';

function GlobalFlourite() {
  const {data, isPending} = useQuery({ queryKey: ['global_fluorite'], queryFn: async () => {
    const data = await fetch('http://localhost:3000/fluorite/get').then((res) => res.json())
    return data
  }})

  if (isPending) {
    return <div>Loading...</div>
  }

  return (
    <div className='panel home-component'>
      <h3>Global <span className='fluorite-text'>fluorite</span> mined: {data.amount}</h3>
    </div>
  );
}

export default GlobalFlourite;