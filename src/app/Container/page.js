import React from 'react'

export default function page({children}) {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 mx-auto">
      {children}
    </div>
  )
}


