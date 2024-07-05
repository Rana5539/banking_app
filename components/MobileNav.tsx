import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
  
const MobileNav = ({user}: MobileNavProps) => {
  return (
    <section className='w-full max-w-[264px]'>
<Sheet>
  <SheetTrigger>
    <Image 
    src="/icons/hamburger.svg"
    width={30}
    height={30}
    alt='mobilenav'
    className='cursor-pointer'
    />
  </SheetTrigger>
  <SheetContent side='left'>
   
  </SheetContent>
</Sheet>


    </section>
  )
}

export default MobileNav