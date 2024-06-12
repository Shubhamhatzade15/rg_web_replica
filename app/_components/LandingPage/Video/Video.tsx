import React from 'react'
import "./Video.css"
import Image from 'next/image'

export default function Video() {
  return (
    <div className="video p-4 md:px-20 py-10 text-center" data-aos="fade-up">
        <div className="bg-gray-300 mx-auto my-4 overflow-clip rounded-lg">
          <Image
            src="/assets/Banner.png"
            alt="Hero image"
            width={2000}
            height={2000}
            className="object-cover w-full h-full"
          />
        </div>
    </div>
  )
}
