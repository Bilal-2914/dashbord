import React from 'react'

interface SidebarToggleProps {
    isCollapsed: boolean
    onToggle: () => void
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isCollapsed, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="bg-white rounded-full transition-all duration-300 ease-in-out flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95"
            style={{
                width: '40px',
                height: '40px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                left: isCollapsed ? '-60px' : '-22px',
                zIndex: 60,
                top: "-65px"
            }}
        >
            <img
                src="/arrow.svg"
                alt="Toggle"
                className="transition-transform duration-300"
                style={{
                    width: '18px',
                    height: '14px',
                    color: "#747A8B",
                    transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
            />
        </button>
    )
}

export default SidebarToggle
