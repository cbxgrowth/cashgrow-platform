
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform lg:static",
  {
    variants: {
      open: {
        true: "translate-x-0",
        false: "-translate-x-full lg:translate-x-0 lg:w-16",
      },
      collapsed: {
        true: "lg:w-16",
        false: "",
      },
    },
    defaultVariants: {
      open: true,
      collapsed: false,
    },
  }
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const { isOpen, isCollapsed } = useSidebar()

  return (
    <aside
      className={cn(sidebarVariants({ open: isOpen, collapsed: isCollapsed }), className)}
      {...props}
    />
  )
}
