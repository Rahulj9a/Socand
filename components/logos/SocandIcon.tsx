import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface SocandIconProps {
    spin?: boolean
    className?: string
    dark?: boolean
}

const SocandIcon: React.FC<SocandIconProps> = ({
    spin,
    className,
    dark
}) => {
    return (
        <div className={cn(`${spin ? "animate-spin duration-[5000ms]" : ""}`, className)}>
            <Image alt="Socand" className='w-full h-fit' width={500} height={500} src={`${dark ? "/logoIconBlack.png" : "/logoIcon.png"}`} />

        </div>
    )
}

export default SocandIcon