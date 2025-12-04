import React from 'react'

export default function page({children}) {
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
      {children}
    </div>
  )
}


