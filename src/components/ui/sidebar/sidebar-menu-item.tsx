
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return <li className={cn("", className)} {...props} />
}
