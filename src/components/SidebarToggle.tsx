import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SidebarToggleProps {
    isCollapsed: boolean
    onToggle: () => void
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isCollapsed, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="bg-white rounded-full transition-all duration-300 ease-in-out flex items-center justify-center border border-gray-200"
            style={{
                width: '40px',
                height: '40px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                left: isCollapsed ? '-15px' : '-44px', // Dynamic left position
                zIndex: 60
            }}
        >
            {isCollapsed ? (
                <ChevronRight size={18} className="text-gray-600" />
            ) : (
                <ChevronLeft size={18} className="text-gray-600" />
            )}
        </button>
    )
}

export default SidebarToggle

