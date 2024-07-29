'use client'

import "@/app/globals.css"

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { HouseIcon, PlusIcon } from "./ui/icons"
import Link from "next/link"

export default function NavButton() {
    const currentRoute = usePathname()

    if (currentRoute == '/creation' || currentRoute.substring(0, 7) == '/cards/') {
        return(
            <div>
                <Link href={'/pocmainpage'} className="m-auto mr-2">
                    <Button>
                        <HouseIcon className="h-5 w-5 filter-white" />
                    </Button>
                </Link>
                { currentRoute.substring(0, 7) == '/cards/' ?
                    <Link href={'/creation'} className="m-auto">
                        <Button>
                            <PlusIcon className="h-5 w-5 filter-white" />
                        </Button>
                    </Link>
                : false}
            </div>
    )}
    else if (currentRoute == '/pocmainpage') {
        return (
            <Link href={'/creation'} className="m-auto">
                <Button>
                    <PlusIcon className="h-5 w-5 filter-white" />
                </Button>
            </Link>
    )}
    else
        return (false)
}