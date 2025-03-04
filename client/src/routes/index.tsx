import { createFileRoute } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import React from 'react'
import { flouriteAtom } from '../atoms'
import GlobalFlourite from '../components/GlobalFlourite'
import MineFloruriteButton from '../components/MineFlouriteButton'
import Logo from '../assets/flourite_logo.svg'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [flourite, setFlourite] = useAtom(flouriteAtom)

  return (
    <div className='vertical-flex flex-center home-page'>
      <img src={Logo} alt="Flourite Logo" className='flourite-logo'/>
      <GlobalFlourite />
      <div className='panel home-component'>
        <h3>{flourite} <span className='flourite-text'>flourite</span> aquired!</h3>
      </div>
      <MineFloruriteButton />
    </div>
  )
}
