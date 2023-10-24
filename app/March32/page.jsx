import React from 'react'
import Image from 'next/image'

const March32 = () => {
  return (
    <>
      <div className="absolute inset-0 top-0 left-0 z-0 w-screen h-full">
        <div className="z-10 bg-cover bg-center bg-no-repeat">
          <Image
            src="/images/march32.png"
            alt="Overlay"
            width={700}
            height={600}
            sizes="100vw"
            className="h-full w-full object-cover z-0"
          />
        </div>
      </div>
    </>
  )
}

export default March32