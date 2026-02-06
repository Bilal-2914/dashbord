import React from 'react'

interface SidebarProps {
    isCollapsed: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
    return (
        <div
            className="bg-[#1e3a5f] h-screen text-white fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out"
            style={{
                width: isCollapsed ? '0px' : '256px',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            {/* Logo Section */}
            <div className="px-6 py-4 border-b border-blue-500/30">
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        style={{ width: '100px', height: '40px' }}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Menu Items */}
            <nav className="mt-6 space-y-2.5">
                {/* Dashboard - Active with Blue Background */}
                <div
                    className="bg-[#2d4a6b]"
                    style={{
                        width: '208px',
                        height: '40px',
                        marginLeft: '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <div className="flex items-center text-sm h-full">
                        <img
                            src="/Group.png"
                            alt="Dashboard"
                            style={{
                                width: '12px',
                                height: '13.33px',
                                marginTop: '1.33px',
                                marginLeft: '2px'
                            }}
                            className="mr-3"
                        />
                        <span className="text-white font-medium">
                            Dashboard
                        </span>
                    </div>
                </div>

                {/* Perspectives */}
                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: '208px',
                        height: '40px',
                        marginLeft: '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <img
                        src="/hugeicons_medical-file.png"
                        alt="Perspectives"
                        style={{
                            width: '12px',
                            height: '13.33px',
                            marginTop: '1.33px',
                            marginLeft: '2px'
                        }}
                        className="mr-3"
                    />
                    <span className="transition-colors text-gray-400 group-hover:text-white">
                        Perspectives
                    </span>
                </a>

                {/* Tasks */}
                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: '208px',
                        height: '40px',
                        marginLeft: '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <img
                        src="/hugeicons_profile-02.png"
                        alt="Tasks"
                        style={{
                            width: '12px',
                            height: '13.33px',
                            marginTop: '1.33px',
                            marginLeft: '2px'
                        }}
                        className="mr-3"
                    />
                    <span className="transition-colors text-gray-400 group-hover:text-white">
                        Tasks
                    </span>
                </a>

                {/* Documents */}
                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: '208px',
                        height: '40px',
                        marginLeft: '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <img
                        src="/document.png"
                        alt="Documents"
                        style={{
                            width: '12px',
                            height: '13.33px',
                            marginTop: '1.33px',
                            marginLeft: '2px'
                        }}
                        className="mr-3"
                    />
                    <span className="transition-colors text-gray-400 group-hover:text-white">
                        Documents
                    </span>
                </a>

                {/* Reports */}
                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: '208px',
                        height: '40px',
                        marginLeft: '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <img
                        src="/report.png"
                        alt="Reports"
                        style={{
                            width: '12px',
                            height: '13.33px',
                            marginTop: '1.33px',
                            marginLeft: '2px'
                        }}
                        className="mr-3"
                    />
                    <span className="transition-colors text-gray-400 group-hover:text-white">
                        Reports
                    </span>
                </a>

                {/* Users & Roles */}
                <a
                    href="#"
                    className="flex items-center text-sm hover:bg-blue-500/20 transition-all duration-200 group"
                    style={{
                        width: '208px',
                        height: '40px',
                        marginLeft: '23px',
                        padding: '10px',
                        borderRadius: '10px'
                    }}
                >
                    <img
                        src="/userrole.png"
                        alt="Users & Roles"
                        style={{
                            width: '12px',
                            height: '13.33px',
                            marginTop: '1.33px',
                            marginLeft: '2px'
                        }}
                        className="mr-3"
                    />
                    <span className="transition-colors text-gray-400 group-hover:text-white">
                        Users & Roles
                    </span>
                </a>
            </nav>

        </div>
    )
}

export default Sidebar