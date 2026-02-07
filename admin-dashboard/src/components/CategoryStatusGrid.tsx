import React from 'react'

interface StatusIndicator {
    number: number
    status: 'completed' | 'in-progress' | 'pending' | 'delayed' | 'info'
}

interface CategoryBox {
    title: string
    subtitle?: string
    indicators: StatusIndicator[]
    rowSpan?: number
    colSpan?: number
}

const CategoryStatusGrid: React.FC = () => {
    const getStatusColor = (status: string): string => {
        switch (status) {
            case 'completed':
                return '#10B981' // Green
            case 'in-progress':
                return '#F59E0B' // Orange/Yellow
            case 'pending':
                return '#9CA3AF' // Gray
            case 'delayed':
                return '#EF4444' // Red
            case 'info':
                return '#3B82F6' // Blue
            default:
                return '#9CA3AF'
        }
    }

    // Grid layout: 10 columns x 3 rows
    const gridItems: (CategoryBox | null)[] = [
        // Row 1
        {
            title: 'Digital Transformation',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'completed' }
            ],
            rowSpan: 2
        },
        {
            title: 'Digital Culture And Environment',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'completed' }
            ]
        },
        {
            title: 'Business Processes',
            indicators: []
        },
        {
            title: 'Risk Management',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'completed' },
                { number: 4, status: 'pending' },
                { number: 5, status: 'completed' }
            ],
            rowSpan: 2
        },
        {
            title: 'Support Systems',
            indicators: [
                { number: 1, status: 'info' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'completed' },
                { number: 4, status: 'completed' },
                { number: 5, status: 'completed' }
            ]
        },
        {
            title: 'Governance Platforms',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' }
            ]
        },
        {
            title: 'Service Quality',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'completed' }
            ]
        },
        {
            title: 'User Engagement',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' }
            ]
        },
        {
            title: 'Data Governance',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' }
            ]
        },
        {
            title: 'Innovation',
            indicators: [
                { number: 1, status: 'delayed' },
                { number: 2, status: 'delayed' },
                { number: 3, status: 'completed' },
                { number: 4, status: 'pending' }
            ],
            rowSpan: 2
        },

        // Row 2
        {
            title: 'Digital Governance',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'in-progress' },
                { number: 4, status: 'pending' }
            ]
        },
        {
            title: 'Leadership Development',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' },
                { number: 4, status: 'pending' }
            ]
        },
        {
            title: 'IT Infrastructure',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'completed' },
                { number: 4, status: 'completed' },
                { number: 5, status: 'info' },
                { number: 6, status: 'completed' },
                { number: 7, status: 'completed' }
            ],
            rowSpan: 2
        },
        {
            title: 'Business Continuity',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'pending' },
                { number: 3, status: 'pending' },
                { number: 4, status: 'pending' },
                { number: 5, status: 'completed' },
                { number: 6, status: 'pending' },
                { number: 7, status: 'completed' }
            ],
            rowSpan: 2
        },
        {
            title: 'Cloud Infrastructure',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'info' }
            ]
        },
        {
            title: 'Digital Channels',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'completed' },
                { number: 4, status: 'completed' }
            ]
        },
        {
            title: 'User Relationship',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' }
            ]
        },
        {
            title: 'Data Usage & Availability',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' }
            ]
        },

        // Row 3
        {
            title: 'Enterprise Architecture',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'completed' },
                { number: 3, status: 'completed' },
                { number: 4, status: 'pending' }
            ]
        },
        {
            title: 'Skills & Capacity Building',
            indicators: [
                { number: 1, status: 'in-progress' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' }
            ]
        },
        {
            title: 'User Experience',
            indicators: [
                { number: 1, status: 'completed' },
                { number: 2, status: 'in-progress' },
                { number: 3, status: 'in-progress' },
                { number: 4, status: 'completed' },
                { number: 5, status: 'completed' }
            ]
        },
        {
            title: 'Creative Solutions',
            indicators: []
        },
        {
            title: 'Open Data',
            indicators: [
                { number: 1, status: 'in-progress' },
                { number: 2, status: 'delayed' }
            ]
        }
    ]

    return (
        <div className="bg-white rounded-lg  p-6" style={{ borderColor: '#E0E8ED' }}>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="grid grid-cols-10 auto-rows-fr gap-4 min-w-[1200px]" style={{ gridAutoRows: 'minmax(140px, auto)' }}>
                    {gridItems.map((item, index) => {
                        if (!item) return null

                        return (
                            <div
                                key={index}
                                className="flex flex-col p-4 rounded-lg"
                                style={{
                                    backgroundColor: '#F5F8FB',
                                    gridRow: item.rowSpan ? `span ${item.rowSpan}` : 'span 1',
                                    gridColumn: item.colSpan ? `span ${item.colSpan}` : 'span 1'
                                }}
                            >
                                {/* Title */}
                                <div className="text-xs font-medium text-gray-700 text-center mb-3 leading-tight">
                                    {item.title}
                                </div>

                                {/* Subtitle if exists */}
                                {item.subtitle && (
                                    <div className="text-xs text-gray-500 text-center mb-2">
                                        {item.subtitle}
                                    </div>
                                )}

                                {/* Status Indicators */}
                                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                                    {item.indicators.map((indicator, idx) => (
                                        <div
                                            key={idx}
                                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                                            style={{ backgroundColor: getStatusColor(indicator.status) }}
                                        >
                                            {indicator.number}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryStatusGrid
