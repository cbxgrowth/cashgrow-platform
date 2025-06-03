
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
>(({ className, asChild = false, children, ...props }, ref) => {
  const { isCollapsed } = useSidebar()
  
  if (asChild) {
    // When asChild is true, we need to clone the child element and add our props
    return React.cloneElement(
      children as React.ReactElement,
      {
        className: cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          isCollapsed && "justify-center px-0",
          className
        ),
        ...props
      }
    )
  }

  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        isCollapsed && "justify-center px-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

SidebarMenuButton.displayName = "SidebarMenuButton"
