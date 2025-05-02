
"use client"

import * as React from "react"
import { useSidebar } from "./sidebar-provider"

export function SidebarTrigger() {
  const { toggle } = useSidebar()

  return (
    <button
      className="fixed left-4 top-4 z-20 block rounded-md p-2 text-muted-foreground lg:hidden"
      onClick={toggle}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="18" rx="2" width="18" x="3" y="3" />
        <path d="M9 3v18" />
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}
