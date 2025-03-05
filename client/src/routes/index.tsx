import { createFileRoute } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import React from 'react'
import { flouriteAtom } from '../atoms'
import GlobalFlourite from '../components/GlobalFluorite'
import MineFloruriteButton from '../components/MineFluoriteButton'
import Logo from '../assets/fluorite_logo.svg'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [flourite, setFlourite] = useAtom(flouriteAtom)

  return (
    <div className='vertical-flex flex-center home-page'>
      <img src={Logo} alt="Fluorite Logo" className='fluorite-logo'/>
      <GlobalFlourite />
      <div className='panel home-component'>
        <h3>{flourite} <span className='fluorite-text'>fluorite</span> aquired!</h3>
      </div>
      <MineFloruriteButton />
    </div>
  )
}
