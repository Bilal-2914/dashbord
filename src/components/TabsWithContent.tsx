interface ContentItem {
    title: string;
    description: string;
}

interface TabsWithContentProps {
    tabs: string[];
    activeTab: number;
    onTabChange: (index: number) => void;
    overviewContent: ContentItem[];
    evidenceContent?: React.ReactNode;
}

const TabsWithContent = ({ tabs, activeTab, onTabChange, overviewContent, evidenceContent }: TabsWithContentProps) => {
    return (
        <div className="mt-6">
            {/* Tabs */}
            <div className="flex gap-3 bg-[#E0E8ED80] p-1 rounded-lg" style={{ width: 'fit-content' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(index)}
                        className="px-8 py-3 rounded-md text-sm font-medium"
                        style={{
                            backgroundColor: activeTab === index ? '#FFFFFF' : 'transparent',
                            color: activeTab === index ? '#4A5568' : '#9CA3AF'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 0 ? (
                /* Overview Content */
                <div className="mt-4 rounded-lg overflow-hidden border bg-white p-3 border-gray-100 relative">
                    {/* Vertical Separator Line */}
                    <div className="absolute left-[225px] top-0 bottom-0 w-px bg-[#E0E8ED]"></div>

                    {overviewContent.map((item, index) => (
                        <div key={index} className="flex p-2 mb-2 last:mb-0">
                            <div
                                className="w-48 shrink-0 p-4 rounded-lg mr-3"
                                style={{
                                    backgroundColor: '#F3F4F6',
                                }}
                            >
                                <h4 className="text-sm font-medium" style={{ color: '#4A5568' }}>
                                    {item.title}
                                </h4>
                            </div>
                            <div
                                className="flex-1 p-4 rounded-lg ml-3"
                                style={{
                                    backgroundColor: '#F3F4F6'
                                }}
                            >
                                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#6B7280' }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Evidence Content */
                <div className="mt-4">
                    {evidenceContent}
                </div>
            )}
        </div>
    );
};

export default TabsWithContent;
