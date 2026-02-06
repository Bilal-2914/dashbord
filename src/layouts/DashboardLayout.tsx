import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

interface DashboardLayoutProps {
    children: React.ReactNode
    isCollapsed: boolean
    onToggleSidebar: () => void
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, isCollapsed, onToggleSidebar }) => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar isCollapsed={isCollapsed} />

            {/* Main Content Area */}
            <div
                className="flex-1 flex flex-col transition-all duration-300 ease-in-out"
                style={{ marginLeft: isCollapsed ? '0px' : '256px' }}
            >
                {/* Header - Fixed */}
                <div className="sticky top-0 z-50 bg-white">
                    <Header isCollapsed={isCollapsed} onToggleSidebar={onToggleSidebar} />
                </div>

                {/* Page Content - Scrollable */}
                <main className="p-6 flex-1" style={{
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}>
                    {children}
                </main>
                <style>{`
                    main::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </div>
    )
}

export default DashboardLayout
