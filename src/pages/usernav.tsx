import { CreditCard, LogOut, PlusCircle, Settings, User } from "lucide-react"
import Link from 'next/link';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar"

import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export default function UserNav() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full bg-gray-200">
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end" forceMount>
        <DropdownMenuLabel className="font-normal" >
          <div className="flex flex-col space-y-1 p-2">
            <p className="text-m font-medium leading-none">KRIT</p>
            <p className="text-xs leading-none text-muted-foreground space-y-2 ">
              KRIT@example.com
            </p>
          </div>
        </DropdownMenuLabel >
        <DropdownMenuSeparator />
        <DropdownMenuGroup >
          <DropdownMenuItem >
            <User className="mr-2 h-8 w-5" />
            <span>Profile</span>
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-8 w-5" />
            <span>Settings</span>
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-8 w-5" />
            <span>Back End Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-8 w-5" />
          <Link href="/"><span>Log out</span></Link>
          
          <DropdownMenuShortcut></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}