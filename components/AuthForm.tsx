'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Custominput from './Custominput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'





const AuthForm = ({type}: {type: string}) => {
    const [user,setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

      // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password:'0'
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)
    console.log(values)
    setIsLoading(false)
  }
  return (
    <section className='auth-form '>
        <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/'
        className='cursor-pointer items-center gap-1 flex'>
            <Image src="/icons/logo.svg" width={34} height={34}
            alt=''
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-blacl-1'>FinGuard</h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
<h1 className='text-24 lg:text-36 font-semibold  text-gray-900'>
   {user? 'Link Account': type==='sign-in'? 'Sign-in': 'Sign-up'} 

</h1>
<p className='text-16 font-normal text-gray-600 '>
    {user? 'Link you account': 'Please enter your details'}
</p>
        </div>
        </header>
        {user? (
            <div className='flex flex-col gap-4'>

            </div>
        ): <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {type === 'sign-up' && (
          <>
          
        <Custominput control={form.control} name='firstName' label='First Name' placeholder={'Enter Your first name'}/>

        <Custominput control={form.control} name='lastName' label='Last Name' placeholder={'Enter Your Last name'}/>
        
        <Custominput control={form.control} name='address' label='Address' placeholder={'Enter Your Address'}/>

        <Custominput control={form.control} name='province' label='Province' placeholder={'Example: Punjab'}/>

        <Custominput control={form.control} name='postalCode' label='Postal Code' placeholder={'Example: 54000'}/>

        <Custominput control={form.control} name='dateOfBirth' label='Date of Birth' placeholder={'Example: YYYY-MM-DD'}/>
          </>
          
        )}
       
        <Custominput control={form.control} name='email' label='Email' placeholder={'Enter Your Email'}/>
        <Custominput control={form.control} name='password' label='Password' placeholder={'Enter Your Password'}/>
        <div className='flex flex-col gap-4'>
        <Button type="submit" className='form-btn' disabled={isLoading}>
          {isLoading ?(
            <>
            <Loader2 size={20} className='animate-spin'/> &nbsp;
            Loading...
            </>
          ) : type === 'sign-in'? 'Sign In': 'Sign Up'}
          </Button>
        </div>
        
      </form>
    </Form>
    <footer className='flex justify-center gap-21'>
<p className='text-14 font-normal text-gray-600'>
  {type === 'sign-in'? "Dont't have an account?": 'Already have an acocunt?'}
</p>
<Link href={type === 'sign-in'? '/sign-up': 'sign-in'} className='form-link'
>{type === 'sign-in'? 'Sign Up': 'Sign in'}</Link>
    </footer>
        </>
        }
        </section>
  )
}

export default AuthForm