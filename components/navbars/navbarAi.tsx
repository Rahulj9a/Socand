 
import React from 'react'
 
import Image from 'next/image'
import MobileSidebarAi from '../sideBars/mobileSidebarAi'
import AvatarModal from '@/components/AvatarModal'

const NavbarAi = () => {
  return (
    <div className='flex items-center bg-gray-200 opacity-30 '>
      <MobileSidebarAi/>
      {/* <div className="relative w-1/12 h-auto mr-4  ">
        <Image alt="Logo" src="/logoIconBlack.png" className="animate-spin duration-[5000ms]  w-full h-auto" width={500} height={500} />
      </div> */}
      <div className='flex w-full justify-end'>
        <AvatarModal/>
      </div>
    </div>
  )
}

export default NavbarAi