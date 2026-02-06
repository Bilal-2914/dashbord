import React from 'react'

interface SidebarProps {
    isCollapsed: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
    return (
        <div
            className="bg-[#1e3a5f] h-screen text-white fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out"
            style={{
                width: isCollapsed ? '80px' : '256px',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <div className={isCollapsed ? "mt-16 space-y-2.5" : "mt-6 space-y-2.5"}>
                <div className="flex items-center justify-start pl-6">
                    {!isCollapsed && (
                        <img
                            src="/logo.png"
                            alt="Logo"
                            style={{ width: '100px', height: '40px' }}
                            className="object-contain"
                        />
                    )}
                </div>
            </div>

            <nav className="mt-6 space-y-2.5">
                <div
                    className="bg-[#2d4a6b]"
                    style={{
                        width: isCollapsed ? '48px' : '208px',
                        height: '40px',
                        marginLeft: isCollapsed ? '16px' : '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className={`flex items-center text-sm h-full ${isCollapsed ? 'justify-center' : ''}`}>
                        <img
                            src="/Group.png"
                            alt="Dashboard"
                            style={{
                                width: isCollapsed ? '15px' : '12px',
                                height: isCollapsed ? '16px' : '13.33px',
                                marginLeft: isCollapsed ? '0px' : '2px'
                            }}
                            className={isCollapsed ? '' : 'mr-3'}
                        />
                        {!isCollapsed && (
                            <span className="text-white font-medium">
                                Dashboard
                            </span>
                        )}
                    </div>
                </div>

                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: isCollapsed ? '48px' : '208px',
                        height: '40px',
                        marginLeft: isCollapsed ? '16px' : '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className={`flex items-center text-sm h-full w-full ${isCollapsed ? 'justify-center' : ''}`}>
                        <img
                            src="/hugeicons_medical-file.png"
                            alt="Perspectives"
                            style={{
                                width: isCollapsed ? '15px' : '12px',
                                height: isCollapsed ? '16px' : '13.33px',
                                marginLeft: isCollapsed ? '0px' : '2px'
                            }}
                            className={isCollapsed ? '' : 'mr-3'}
                        />
                        {!isCollapsed && (
                            <span className="transition-colors text-gray-400 group-hover:text-white">
                                Perspectives
                            </span>
                        )}
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: isCollapsed ? '48px' : '208px',
                        height: '40px',
                        marginLeft: isCollapsed ? '16px' : '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className={`flex items-center text-sm h-full w-full ${isCollapsed ? 'justify-center' : ''}`}>
                        <img
                            src="/hugeicons_profile-02.png"
                            alt="Tasks"
                            style={{
                                width: isCollapsed ? '15px' : '12px',
                                height: isCollapsed ? '16px' : '13.33px',
                                marginLeft: isCollapsed ? '0px' : '2px'
                            }}
                            className={isCollapsed ? '' : 'mr-3'}
                        />
                        {!isCollapsed && (
                            <span className="transition-colors text-gray-400 group-hover:text-white">
                                Tasks
                            </span>
                        )}
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: isCollapsed ? '48px' : '208px',
                        height: '40px',
                        marginLeft: isCollapsed ? '16px' : '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className={`flex items-center text-sm h-full w-full ${isCollapsed ? 'justify-center' : ''}`}>
                        <img
                            src="/document.png"
                            alt="Documents"
                            style={{
                                width: isCollapsed ? '15px' : '12px',
                                height: isCollapsed ? '16px' : '13.33px',
                                marginLeft: isCollapsed ? '0px' : '2px'
                            }}
                            className={isCollapsed ? '' : 'mr-3'}
                        />
                        {!isCollapsed && (
                            <span className="transition-colors text-gray-400 group-hover:text-white">
                                Documents
                            </span>
                        )}
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: isCollapsed ? '48px' : '208px',
                        height: '40px',
                        marginLeft: isCollapsed ? '16px' : '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className={`flex items-center text-sm h-full w-full ${isCollapsed ? 'justify-center' : ''}`}>
                        <img
                            src="/report.png"
                            alt="Reports"
                            style={{
                                width: isCollapsed ? '15px' : '12px',
                                height: isCollapsed ? '16px' : '13.33px',
                                marginLeft: isCollapsed ? '0px' : '2px'
                            }}
                            className={isCollapsed ? '' : 'mr-3'}
                        />
                        {!isCollapsed && (
                            <span className="transition-colors text-gray-400 group-hover:text-white">
                                Reports
                            </span>
                        )}
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: isCollapsed ? '48px' : '208px',
                        height: '40px',
                        marginLeft: isCollapsed ? '16px' : '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className={`flex items-center text-sm h-full w-full ${isCollapsed ? 'justify-center' : ''}`}>
                        <img
                            src="/userrole.png"
                            alt="Users & Roles"
                            style={{
                                width: isCollapsed ? '15px' : '12px',
                                height: isCollapsed ? '16px' : '13.33px',
                                marginLeft: isCollapsed ? '0px' : '2px'
                            }}
                            className={isCollapsed ? '' : 'mr-3'}
                        />
                        {!isCollapsed && (
                            <span className="transition-colors text-gray-400 group-hover:text-white">
                                Users & Roles
                            </span>
                        )}
                    </div>
                </a>
            </nav>

        </div>
    )
}

export default Sidebar
