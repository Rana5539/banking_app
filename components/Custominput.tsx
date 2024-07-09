import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';


interface Custominput {
    control: Control<z.infer<typeof authFormSchema>>
    name: FieldPath<z.infer<typeof authFormSchema>>
    label: string,
    placeholder: string
}

const Custominput = ({control, name, label, placeholder}) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <div className='form-item'>
             <FormLabel className='form-label'>
                {label}
             </FormLabel>
             <div className='flex w-full flex-col'>
               <FormControl>
                <Input placeholder={placeholder}
                 className='input-calss' 
                 type={name === 'password'? 'password': 'text'}
                 {...field}/>
               </FormControl>
               <FormMessage className='form-message mt-2'>

               </FormMessage>
             </div>
            </div>
          )}
        />
  )
}

export default Custominput