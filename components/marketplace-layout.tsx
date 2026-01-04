"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Home,
  Users,
  Settings,
  Zap,
  GitBranch,
  Package,
  Database,
  Network,
  FileText,
  Shield,
  Bug,
  Telescope,
  Wrench,
  Cpu,
  Plug,
  ShoppingBag,
  HelpCircle,
  ChevronsUpDown,
  Star,
  RefreshCw,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarVariants = {
  open: {
    width: "15rem",
  },
  closed: {
    width: "3.05rem",
  },
}

const contentVariants = {
  open: { display: "block", opacity: 1 },
  closed: { display: "block", opacity: 1 },
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
}

const transitionProps = {
  type: "tween",
  ease: "easeOut",
  duration: 0.2,
  staggerChildren: 0.1,
}

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.02 },
  },
}

interface MarketplaceLayoutProps {
  children: React.ReactNode
}

export function MarketplaceLayout({ children }: MarketplaceLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const pathname = usePathname()

  return (
    <div className="relative flex min-h-screen bg-white">
      {/* Sidebar */}
      {/* Fixed: Sidebar at z-30 with light theme background */}
      <motion.div
        className={cn(
          "sidebar fixed left-0 top-0 z-30 h-full shrink-0 border-r bg-white",
        )}
        initial={isCollapsed ? "closed" : "open"}
        animate={isCollapsed ? "closed" : "open"}
        variants={sidebarVariants}
        transition={transitionProps}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      >
        {/* Fixed: Light theme only - removed dark mode classes */}
        <motion.div
          className={`relative flex text-muted-foreground h-full shrink-0 flex-col bg-white transition-all`}
          variants={contentVariants}
        >
          <motion.ul variants={staggerVariants} className="flex h-full flex-col">
            <div className="flex grow flex-col items-center">
              {/* Organization Header */}
              <div className="flex h-[54px] w-full shrink-0 border-b p-2">
                <div className="mt-[1.5px] flex w-full">
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="w-full" asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex w-fit items-center gap-2 px-2" 
                      >
                        <Avatar className='rounded size-4'>
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <motion.li
                          variants={variants}
                          className="flex w-fit items-center gap-2"
                        >
                          {!isCollapsed && (
                            <>
                              <p className="text-sm font-medium">
                                Your organization
                              </p>
                              <ChevronsUpDown className="h-4 w-4 text-muted-foreground/50" />
                            </>
                          )}
                        </motion.li>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <p className="text-xs text-muted-foreground">Community Plan</p>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex h-full w-full flex-col">
                <div className="flex grow flex-col gap-4">
                  <ScrollArea className="h-16 grow p-2">
                    <div className={cn("flex w-full flex-col gap-1")}>
                      {/* Primary Navigation */}
                      <Link
                        href="/marketplace"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("marketplace") && "bg-muted text-blue-600",
                        )}
                      >
                        <Home className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Home</p>
                          )}
                        </motion.li>
                      </Link>
                      
                      <Link
                        href="/marketplace"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("marketplace") && "bg-muted text-blue-600",
                        )}
                      >
                        <Users className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Agents</p>
                          )}
                        </motion.li>
                      </Link>

                      <Separator className="w-full" />

                      {/* Orchestrate Section */}
                      <div className="px-2 py-1">
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Orchestrate
                            </p>
                          )}
                        </motion.li>
                      </div>

                      <Link
                        href="/marketplace?category=managerial"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("managerial") && "bg-muted text-blue-600",
                        )}
                      >
                        <Settings className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <div className="flex items-center gap-2">
                              <p className="ml-2 text-sm font-medium">Managerial</p>
                              <Badge
                                className={cn(
                                  "flex h-fit w-fit items-center gap-1.5 rounded border-none bg-blue-50 px-1.5 text-blue-600",
                                )}
                                variant="outline"
                              >
                                BETA
                              </Badge>
                            </div>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=workflows"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("workflows") && "bg-muted text-blue-600",
                        )}
                      >
                        <Zap className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <div className="flex items-center gap-2">
                              <p className="ml-2 text-sm font-medium">Workflows</p>
                              <Badge
                                className={cn(
                                  "flex h-fit w-fit items-center gap-1.5 rounded border-none bg-blue-50 px-1.5 text-blue-600",
                                )}
                                variant="outline"
                              >
                                BETA
                              </Badge>
                            </div>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=blueprints"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("blueprints") && "bg-muted text-blue-600",
                        )}
                      >
                        <Package className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <div className="flex items-center gap-2">
                              <p className="ml-2 text-sm font-medium">Blueprints</p>
                              <Badge
                                className={cn(
                                  "flex h-fit w-fit items-center gap-1.5 rounded border-none bg-blue-50 px-1.5 text-blue-600",
                                )}
                                variant="outline"
                              >
                                BETA
                              </Badge>
                            </div>
                          )}
                        </motion.li>
                      </Link>

                      <Separator className="w-full" />

                      {/* Knowledge Source Section */}
                      <div className="px-2 py-1">
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Knowledge Source
                            </p>
                          )}
                        </motion.li>
                      </div>

                      <Link
                        href="/marketplace?category=knowledge"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("knowledge") && "bg-muted text-blue-600",
                        )}
                      >
                        <Database className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Knowledge Bases</p>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=graph"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("graph") && "bg-muted text-blue-600",
                        )}
                      >
                        <Network className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Knowledge Graph</p>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=context"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("context") && "bg-muted text-blue-600",
                        )}
                      >
                        <FileText className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Global Context</p>
                          )}
                        </motion.li>
                      </Link>

                      <Separator className="w-full" />

                      {/* Governance Section */}
                      <div className="px-2 py-1">
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Governance
                            </p>
                          )}
                        </motion.li>
                      </div>

                      <Link
                        href="/marketplace?category=responsible-ai"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("responsible-ai") && "bg-muted text-blue-600",
                        )}
                      >
                        <Shield className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <div className="flex items-center gap-2">
                              <p className="ml-2 text-sm font-medium">Responsible AI</p>
                              <Button
                                size="sm"
                                className="h-5 px-2 text-xs bg-purple-600 hover:bg-purple-700"
                              >
                                Upgrade
                              </Button>
                            </div>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=agent-eval"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("agent-eval") && "bg-muted text-blue-600",
                        )}
                      >
                        <Bug className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <div className="flex items-center gap-2">
                              <p className="ml-2 text-sm font-medium">Agent Eval</p>
                              <Button
                                size="sm"
                                className="h-5 px-2 text-xs bg-purple-600 hover:bg-purple-700"
                              >
                                Upgrade
                              </Button>
                            </div>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=traces"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("traces") && "bg-muted text-blue-600",
                        )}
                      >
                        <Telescope className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Traces</p>
                          )}
                        </motion.li>
                      </Link>

                      <Separator className="w-full" />

                      {/* Connect Section */}
                      <div className="px-2 py-1">
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                              Connect
                            </p>
                          )}
                        </motion.li>
                      </div>

                      <Link
                        href="/marketplace?category=tools"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("tools") && "bg-muted text-blue-600",
                        )}
                      >
                        <Wrench className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Tools</p>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace?category=models"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("models") && "bg-muted text-blue-600",
                        )}
                      >
                        <Cpu className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Models</p>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/marketplace/data-connectors"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("data-connectors") && "bg-muted text-blue-600",
                        )}
                      >
                        <Plug className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Data Connectors</p>
                          )}
                        </motion.li>
                      </Link>

                      <Separator className="w-full" />

                      {/* Secondary Navigation */}
                      <Link
                        href="/m1"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("m1") && "bg-muted text-blue-600",
                        )}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Marketplace</p>
                          )}
                        </motion.li>
                      </Link>

                      <Link
                        href="/help"
                        className={cn(
                          "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
                          pathname?.includes("help") && "bg-muted text-blue-600",
                        )}
                      >
                        <HelpCircle className="h-4 w-4" />
                        <motion.li variants={variants}>
                          {!isCollapsed && (
                            <p className="ml-2 text-sm font-medium">Help</p>
                          )}
                        </motion.li>
                      </Link>
                    </div>
                  </ScrollArea>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col p-2">
                  {/* Credits Section */}
                  <div className="mb-4">
                    <motion.li variants={variants}>
                      {!isCollapsed && (
                        <div className="mb-2">
                          <p className="text-xs text-muted-foreground mb-1">Credits Left</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <span className="text-xs font-medium">500</span>
                            <RefreshCw className="h-3 w-3 text-muted-foreground" />
                            <Plus className="h-3 w-3 text-muted-foreground" />
                          </div>
                        </div>
                      )}
                    </motion.li>
                  </div>

                  {/* Upgrade Button */}
                  <Button className="w-full mb-4 bg-gray-800 hover:bg-gray-900 text-white">
                    <Star className="h-4 w-4 mr-2" />
                    <motion.li variants={variants}>
                      {!isCollapsed && (
                        <span className="text-sm">Upgrade</span>
                      )}
                    </motion.li>
                  </Button>

                  {/* Lyzr.ai Logo */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <motion.li variants={variants}>
                      {!isCollapsed && (
                        <span className="text-sm font-medium">Ai LifeBOT</span>
                      )}
                    </motion.li>
                  </div>
                </div>
              </div>
            </div>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      {/* Fixed: Content wrapper with solid white background and proper z-index */}
      <div
        className={cn(
          "relative z-10 flex-1 bg-white transition-all duration-200",
          isCollapsed ? "ml-[3.05rem]" : "ml-[15rem]"
        )}
      >
        {children}
      </div>
    </div>
  )
}


