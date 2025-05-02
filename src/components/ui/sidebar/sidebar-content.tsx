
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return <div className={cn("flex flex-1 flex-col overflow-auto", className)} {...props} />
}
