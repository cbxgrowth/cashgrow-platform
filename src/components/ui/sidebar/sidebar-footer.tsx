
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <footer
      className={cn("flex items-center gap-2 border-t p-4", className)}
      {...props}
    />
  )
}
