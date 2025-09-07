"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AppState {
  currentPage: string
  isBookingModalOpen: boolean
  isProfileModalOpen: boolean
  isNotificationsModalOpen: boolean
  user: {
    name: string
    studentId: string
    email: string
  }
}

interface AppContextType {
  state: AppState
  setCurrentPage: (page: string) => void
  openBookingModal: () => void
  closeBookingModal: () => void
  openProfileModal: () => void
  closeProfileModal: () => void
  openNotificationsModal: () => void
  closeNotificationsModal: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    currentPage: "dashboard",
    isBookingModalOpen: false,
    isProfileModalOpen: false,
    isNotificationsModalOpen: false,
    user: {
      name: "Alex Johnson",
      studentId: "SMB2024001",
      email: "alex.johnson@smobus.edu",
    },
  })

  const setCurrentPage = (page: string) => {
    setState((prev) => ({ ...prev, currentPage: page }))
  }

  const openBookingModal = () => {
    setState((prev) => ({ ...prev, isBookingModalOpen: true }))
  }

  const closeBookingModal = () => {
    setState((prev) => ({ ...prev, isBookingModalOpen: false }))
  }

  const openProfileModal = () => {
    setState((prev) => ({ ...prev, isProfileModalOpen: true }))
  }

  const closeProfileModal = () => {
    setState((prev) => ({ ...prev, isProfileModalOpen: false }))
  }

  const openNotificationsModal = () => {
    setState((prev) => ({ ...prev, isNotificationsModalOpen: true }))
  }

  const closeNotificationsModal = () => {
    setState((prev) => ({ ...prev, isNotificationsModalOpen: false }))
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setCurrentPage,
        openBookingModal,
        closeBookingModal,
        openProfileModal,
        closeProfileModal,
        openNotificationsModal,
        closeNotificationsModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
