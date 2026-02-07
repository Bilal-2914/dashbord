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
                className={`fixed top-20 transition-all duration-300 ease-in-out z-50 ${isCollapsed ? 'left-0 md:left-[80px]' : 'left-64'
                    }`}
            >
                <SidebarToggle isCollapsed={isCollapsed} onToggle={onToggleSidebar} />
            </div>


            <div
                className={`flex-1 flex flex-col transition-all duration-300 ease-in-out min-w-0 ${isCollapsed ? 'ml-0 md:ml-[80px]' : 'ml-64'
                    }`}
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
