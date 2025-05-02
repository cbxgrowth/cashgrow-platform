"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/********** Provider **********/

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

/********** Sidebar **********/

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

/********** Trigger **********/

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

/********** Content **********/

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarContent({ className, ...props }: SidebarContentProps) {
  return <div className={cn("flex flex-1 flex-col overflow-auto", className)} {...props} />
}

/********** Header **********/

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <header
      className={cn("flex h-14 items-center gap-2 border-b px-4", className)}
      {...props}
    />
  )
}

/********** Footer **********/

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <footer
      className={cn("flex items-center gap-2 border-t p-4", className)}
      {...props}
    />
  )
}

/********** Group **********/

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return <div className={cn("px-2 py-2", className)} {...props} />
}

/********** Group Label **********/

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

/********** Group Content **********/

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarGroupContent({ className, ...props }: SidebarGroupContentProps) {
  return <div className={cn("space-y-1", className)} {...props} />
}

/********** Menu **********/

interface SidebarMenuProps extends React.OlHTMLAttributes<HTMLUListElement> {}

export function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return <ul className={cn("grid gap-1", className)} {...props} />
}

/********** Menu Item **********/

interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

export function SidebarMenuItem({ className, ...props }: SidebarMenuItemProps) {
  return <li className={cn("", className)} {...props} />
}

/********** Menu Button **********/

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
