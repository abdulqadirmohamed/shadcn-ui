import React from 'react'
import UserItem from './UserItem'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command'
import { BarChart2, CookieIcon, Gauge, Mail, MessageSquare, Rss, Settings, User } from 'lucide-react'
import { Cookie } from 'next/font/google'
import Link from 'next/link'

const Sidebar = () => {
    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: "/",
                    title: "Dashboard",
                    icon: <Gauge  size={20} />
                },
                {
                    link: "/profile",
                    title: "Profile",
                    icon: <User size={20} />
                },
                {
                    link: "/inbox",
                    title: "Inbox",
                    icon: <Mail size={20} />
                },
                {
                    link: "/analytics",
                    title: "Analytics",
                    icon: <BarChart2 size={20} />
                },
                {
                    link: "/contents",
                    title: "Contents",
                    icon: <Rss size={20} />
                },
            ]
        },
        {
            group: 'Setting',
            items: [
                {
                    link: "/",
                    title: "General Setting",
                    icon: <Settings size={20} />
                },
                {
                    link: "/",
                    icon: <MessageSquare size={20} />,
                    title: "Logs"
                },

                {
                    link: "/",
                    icon: <CookieIcon size={20} />,
                    title: "Privacy"
                },
            ]
        },
    ]
    return (
        <div className='w-[300px] min-w-[300px] min-h-screen flex flex-col border-r p-4'>
            <div>
                <UserItem />
            </div>
            <div className='grow h-full'>
                <Command style={{ overflow: 'visible' }}>
                    <CommandList style={{ overflow: 'visible' }}>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((item: any, itemKey: number) => (
                                    <CommandItem key={itemKey}>
                                        <Link href={item.link} className='flex gap-3 cursor-pointer'>
                                            <span > {item.icon}</span>
                                            {item.title}
                                        </Link>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>

            </div>
            <div>Setting</div>
        </div>
    )
}

export default Sidebar