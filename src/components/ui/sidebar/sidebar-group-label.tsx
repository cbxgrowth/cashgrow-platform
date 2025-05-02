
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function SidebarGroupLabel({ className, ...props }: SidebarGroupLabelProps) {
  const { isCollapsed } = useSidebar()

  if (isCollapsed) return null

  return (
    <p
      className={cn("mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground", className)}
      {...props}
    />
  )
}
