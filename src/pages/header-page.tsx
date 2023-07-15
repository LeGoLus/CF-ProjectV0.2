import Link from "next/link"
import { cn } from "../utils"
import Search from '../pages/search';
import UserNav from '../pages/usernav';




export default function Header({
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) {
    return (
    <div>
        <nav
        className={cn("flex items-center space-x-4 lg:space-x-10 p-4", className)}
        {...props}
        >
        <Link
          href="/home-page"
          className="text-m font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/document-page"
          className="text-m font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Document
        </Link>
        <Link
          href="/project-page"
          className="text-m font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Project
        </Link>
        <Link
          href="/dashboard-page"
          className="text-m font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          href="/employeeprofile-page"
          className="text-m font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          EmployeeProfile
        </Link>
       
        <div className="ml-auto flex  w-full"></div><Search></Search>
        <div className="float-right bg-white"></div><UserNav ></UserNav> 
       
      </nav>
    </div>
    )
}