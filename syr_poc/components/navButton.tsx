'use client'

import "@/app/globals.css"

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { HouseIcon, PlusIcon } from "./ui/icons"
import Link from "next/link"

export default function NavButton() {
    const currentRoute = usePathname()

    if (currentRoute == '/') {
        return (    
            <Link href='/pocmainpage' className="m-auto mr-2">
                <Button className="bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50">
                  Access POC
                </Button>
            </Link>
    )}

    if (currentRoute == '/creation' || currentRoute.substring(0, 7) == '/cards/') {
        return(
            <div>
                <Link href={'/pocmainpage'} className="m-auto mr-2">
                    <Button className="bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50">
                        Home
                    </Button>
                </Link>
                { currentRoute.substring(0, 7) == '/cards/' ?
                    <Link href={'/creation'} className="m-auto">
                        <Button className="bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50">
                            Create point
                        </Button>
                    </Link>
                : false}
            </div>
    )}
    else if (currentRoute == '/pocmainpage') {
        return (
            <Link href={'/creation'} className="m-auto">
                <Button className="bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50">
                    Create point
                </Button>
            </Link>
    )}
    else
        return (false)
}