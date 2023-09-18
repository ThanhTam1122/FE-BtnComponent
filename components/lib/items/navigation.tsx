'use client'

import { usePathname } from "next/navigation"
import Link from 'next/link'

export interface link {
    href: string,
    name: string
}   


export default function Navigation({ navLinks }: {
    navLinks: link[]  
}) {
    const pathName = usePathname();

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathName === link.href

                return (
                    <Link
                        className={isActive ? 'text-yellow-primary' : 'text-black'}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}