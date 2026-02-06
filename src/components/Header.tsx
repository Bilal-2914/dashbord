import SearchBar from './SearchBar'

const Header = ({ isCollapsed }: { isCollapsed: boolean }) => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4">
                {/* Left Section - Search Bar */}
                <div className="flex-1 max-w-md">
                    <SearchBar />
                </div>

                {/* Right Section - Notification & Profile */}
                <div className={`flex items-center gap-3 md:gap-4 ${isCollapsed ? 'ml-6 md:ml-12' : 'ml-4'}`}>
                    {/* Notification Bell */}
                    <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <img
                            src="/bell.png"
                            alt="Notifications"
                            className="w-5 h-5 md:w-6 md:h-6"
                        />
                        {/* Notification Badge */}
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    {/* Profile Section */}
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer bg-gray-100  px-3 py-1 rounded-full transition-colors">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                        />
                        <span className="hidden sm:block text-sm md:text-base font-medium text-gray-700">
                            Mohamed
                        </span>
                        <img
                            src="/arrow-down.png"
                            alt="Dropdown"
                            className="hidden sm:block w-3 h-3 md:w-4 md:h-4"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
