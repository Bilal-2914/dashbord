import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Perspective from './pages/Perspective'
import DashboardLayout from './layouts/DashboardLayout'

const App: React.FC = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) { // md breakpoint
                setSidebarCollapsed(true)
            } else {
                setSidebarCollapsed(false)
            }
        }

        // Initial check
        handleResize()

        // Resize listener
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }

    return (
        <DashboardLayout isCollapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/perspective" element={<Perspective />} />
            </Routes>
        </DashboardLayout>
    )
}

export default App