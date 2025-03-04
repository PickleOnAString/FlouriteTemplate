import { useQuery } from '@tanstack/react-query';
import React from 'react';

function GlobalFlourite() {
  const {data, isPending} = useQuery({ queryKey: ['global_flourite'], queryFn: async () => {
    const data = await fetch('http://localhost:3000/flourite/get').then((res) => res.json())
    return data
  }})

  if (isPending) {
    return <div>Loading...</div>
  }

  return (
    <div className='panel home-component'>
      <h3>Global <span className='flourite-text'>flourite</span> mined: {data.amount}</h3>
    </div>
  );
}

export default GlobalFlourite;