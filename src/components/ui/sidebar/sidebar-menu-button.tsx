
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, asChild = false, ...props }, ref) => {
  const { isCollapsed } = useSidebar()
  // Fix the issue by properly handling the element type based on asChild
  const Comp = asChild ? React.Fragment : "button"

  return (
    <Comp
      {...(asChild ? {} : { ref, ...props, className: cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        isCollapsed && "justify-center px-0",
        className
      ) })}
    >
      {props.children}
    </Comp>
  )
})

SidebarMenuButton.displayName = "SidebarMenuButton"
