
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <header
      className={cn("flex h-14 items-center gap-2 border-b px-4", className)}
      {...props}
    />
  )
}
