import Image from 'next/image'
import React from 'react'

type SkillLogoProps = {
    name: string,
    logo: string
}

const SkillLogo = ({name, logo}: SkillLogoProps) => {
  return (
    <div className="flex items-center text-xs border w-fit p-1 pr-1.5 rounded-md font-medium">
    <Image
      src={logo}
      width={16}
      height={16}
      className="inline-flex mr-1"
      alt=""
    />
    <span>{name}</span>
  </div>
  )
}

export default SkillLogo