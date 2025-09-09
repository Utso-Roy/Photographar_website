import React from 'react'
import { FadeLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className=" max-w-6xl mx-auto flex items-center justify-center h-screen">
      <FadeLoader color="#cc5200" />
    </div>
  )
}
