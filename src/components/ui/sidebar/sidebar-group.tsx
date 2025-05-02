
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return <div className={cn("px-2 py-2", className)} {...props} />
}
