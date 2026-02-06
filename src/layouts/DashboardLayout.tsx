import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import SidebarToggle from '../components/SidebarToggle'

interface DashboardLayoutProps {
    children: React.ReactNode
    isCollapsed: boolean
    onToggleSidebar: () => void
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, isCollapsed, onToggleSidebar }) => {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar isCollapsed={isCollapsed} />

            <div
                className="fixed top-20 transition-all duration-300 ease-in-out z-50"
                style={{
                    left: isCollapsed ? '80px' : '256px'
                }}
            >
                <SidebarToggle isCollapsed={isCollapsed} onToggle={onToggleSidebar} />
            </div>


            <div
                className="flex-1 flex flex-col transition-all duration-300 ease-in-out min-w-0"
                style={{
                    marginLeft: isCollapsed ? '80px' : '256px'
                }}
            >
                <div className="sticky top-0 z-40 bg-white">
                    <Header isCollapsed={isCollapsed} />
                </div>

                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
