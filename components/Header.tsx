'use client'
import React, { useState } from 'react'
import { CommandDemo } from './Command'
import { Bell, ChevronRightIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  const [notifications, setNotifications] = useState<any>([
    {
      text: 'This is a notification',
      date: '02/26/2024',
      isRead: true
    },
    {
      text: 'This is a notification',
      date: '02/26/2024',
      isRead: false
    }
  ])
  return (
    <div className='grid grid-cols-2 border-b py-4 px-4'>
      <CommandDemo />
      <div className='flex justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger className='outline-none'>
            <Bell className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem key={key}>
                <div className='p-2 cursor-pointer flex gap-2 items-center'>
                  <div className={`w-2 h-2 ${item.isRead ? 'bg-green-600': 'bg-neutral-300'}  rounded-full`}></div>
                  <div className='flex flex-col '>
                    <p>{item.text}</p>
                    <p className='text-xs text-neutral-500'>{item.date}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}

export default Header