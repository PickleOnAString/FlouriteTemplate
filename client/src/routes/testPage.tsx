import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/testPage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/testPage"!</div>
}
