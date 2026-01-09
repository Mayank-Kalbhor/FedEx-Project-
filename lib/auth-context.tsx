"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export type UserRole = "admin" | "manager" | "dca"

interface User {
    id: string
    name: string
    role: UserRole
    jurisdiction: string
}

interface AuthContextType {
    user: User | null
    login: (role: UserRole) => void
    logout: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Check for stored session
        const storedUser = localStorage.getItem("dca_user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setIsLoading(false)
    }, [])

    const login = (role: UserRole) => {
        let mockUser: User

        switch (role) {
            case "manager":
                mockUser = {
                    id: "mgr-001",
                    name: "Sarah Chen",
                    role: "manager",
                    jurisdiction: "West Region"
                }
                break
            case "dca":
                mockUser = {
                    id: "dca-882",
                    name: "Marcus Cole",
                    role: "dca",
                    jurisdiction: "Alpha Collections"
                }
                break
            case "admin":
            default:
                mockUser = {
                    id: "adm-001",
                    name: "Alex Rivera",
                    role: "admin",
                    jurisdiction: "Global"
                }
                break
        }

        localStorage.setItem("dca_user", JSON.stringify(mockUser))
        setUser(mockUser)
        router.push("/")
    }

    const logout = () => {
        localStorage.removeItem("dca_user")
        setUser(null)
        router.push("/login")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
