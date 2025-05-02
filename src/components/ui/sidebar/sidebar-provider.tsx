
"use client"

import * as React from "react"

interface SidebarProviderProps {
  children: React.ReactNode
}

interface SidebarContextValue {
  isOpen: boolean
  isCollapsed: boolean
  toggle: () => void
  expand: () => void
  collapse: () => void
}

const SidebarContext = React.createContext<SidebarContextValue>({
  isOpen: true,
  isCollapsed: false,
  toggle: () => undefined,
  expand: () => undefined,
  collapse: () => undefined,
})

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const toggle = React.useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const expand = React.useCallback(() => {
    setIsCollapsed(false)
  }, [])

  const collapse = React.useCallback(() => {
    setIsCollapsed(true)
  }, [])

  return (
    <SidebarContext.Provider value={{ isOpen, isCollapsed, toggle, expand, collapse }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
