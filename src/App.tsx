import React, { useState } from 'react'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './layouts/DashboardLayout'

const App: React.FC = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }

    return (
        <DashboardLayout isCollapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar}>
            <Dashboard />
        </DashboardLayout>
    )
}

export default App