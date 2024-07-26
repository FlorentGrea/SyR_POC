'use client'

import "@/app/globals.css"

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { HouseIcon, PlusIcon } from "./ui/icons"
import Link from "next/link"

export default function NavButton() {
    const currentRoute = usePathname()

    if (currentRoute == '/creation') {
        return(
            <Link href={'/'} className="m-auto">
                <Button>
                    <HouseIcon className="h-5 w-5 filter-white" />
                </Button>
            </Link>
    )}

    return (
        <Link href={'/creation'} className="m-auto">
            <Button>
                <PlusIcon className="h-5 w-5 filter-white" />
            </Button>
        </Link>
)}