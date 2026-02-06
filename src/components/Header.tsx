import React from 'react'
import SidebarToggle from './SidebarToggle'
import SearchBar from './SearchBar'
import { ChevronDown } from 'lucide-react'

interface HeaderProps {
    isCollapsed: boolean
    onToggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ isCollapsed, onToggleSidebar }) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Left Side - Toggle Button and Search */}
                <div className="flex items-center space-x-2">
                    <SidebarToggle isCollapsed={isCollapsed} onToggle={onToggleSidebar} />
                    <SearchBar />
                </div>

                {/* Right Side - Notifications and Profile */}
                <div className="flex items-center space-x-6">
                    {/* Notifications */}
                    <div className="relative">
                        <img
                            src="/bell.png"
                            alt="Notifications"
                            className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 bg-gray-50 rounded-full w-[180] px-4 py-2 transition-colors">
                        <div className="w-10 bg-green-400 h-10 rounded-full overflow-hidden">
                            <img
                                src="https://via.placeholder.com/40x40/4A90E2/FFFFFF?text=B"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-sm font-medium whitespace-nowrap text-gray-700">Bilal Hassan</span>
                        <ChevronDown size={20} className="text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header