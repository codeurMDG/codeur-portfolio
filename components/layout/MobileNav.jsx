"use client"

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import links from "../path/links"
import Logo from "../Logo"


const MobileNav = () => {
    const pathName = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="flex items-center justify-center">
                            <Logo/>
                        </h1>
                    </Link>
                </div>
                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return <Link 
                            href={link.path} 
                            key={index}
                            className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    } )}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav