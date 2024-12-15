import Link from "next/link";
import { SettingsIcon, UserIcon } from "lucide-react";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go";

import { cn } from "@/lib/utils";

const routes = [
    { 
        name: "Home", 
        href: "/", 
        icon: GoHome,
        activeIcon: GoHomeFill,
     },
     { 
        name: "My Tasks",
        href: "/tasks",
        icon: GoCheckCircle,
        activeIcon: GoCheckCircleFill,
     },
     { 
        name: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
     },
     {
        name: "Members",
        href: "/members",
        icon: UserIcon,
        activeIcon: UserIcon,
     }
];

export const Navigation = () => {
    return (
        <ul className="flex flex-col gap-2">
            {routes.map((item) => {
               const isActive = false;
               const Icon = isActive ? item.activeIcon : item.icon;

               return (
                  <Link href={item.href} key={item.name}>
                     <div className={cn(
                        "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                        isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
                     )}>
                        <Icon className="size-5 text-neutral-500 h-6 w-6" />
                        {item.name}
                     </div>
                  </Link>
               )
            })}
        </ul>
    );
};