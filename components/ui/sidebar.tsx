"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "relative flex h-full w-full flex-col overflow-hidden border-r bg-background",
  {
    variants: {
      variant: {
        default: "w-[300px] md:w-[300px]",
        sm: "w-[250px] md:w-[250px]",
        lg: "w-[350px] md:w-[350px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarContextValue {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextValue>({
  open: true,
  setOpen: () => undefined,
})

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true)

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
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

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {}

export function Sidebar({ className, variant, ...props }: SidebarProps) {
  const { open } = useSidebar()

  return (
    <div
      className={cn(
        sidebarVariants({ variant }),
        open ? "translate-x-0" : "-translate-x-full",
        "transition-transform duration-200 ease-in-out md:translate-x-0",
        className
      )}
      {...props}
    />
  )
}

export function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />
}

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-auto", className)} {...props} />
}

export function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />
}

export function SidebarTrigger({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useSidebar()

  return (
    <button
      className={cn("h-8 w-8", className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="9" x2="9" y1="3" y2="21" />
      </svg>
      <span className="sr-only">Toggle sidebar</span>
    </button>
  )
}

export function SidebarInset({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-auto", className)} {...props} />
} 