
import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarMenuProps extends React.OlHTMLAttributes<HTMLUListElement> {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return <ul className={cn("grid gap-1", className)} {...props} />
}
