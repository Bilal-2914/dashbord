import React from 'react'

interface StatusIndicator {
    number: number
    status: 'completed' | 'in-progress' | 'pending' | 'delayed' | 'info'
}

interface CategoryBox {
    title: string
    indicators: StatusIndicator[]
    gridColumn: string
    gridRow: string
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

    const categories: CategoryBox[] = [
        // Column 1 - 3 rows
        { title: 'Digital Transformation', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }], gridColumn: '1 / 2', gridRow: '1 / 2' },
        { title: 'Digital Governance', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'in-progress' }], gridColumn: '1 / 2', gridRow: '2 / 3' },
        { title: 'Enterprise Architecture', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }, { number: 4, status: 'pending' }], gridColumn: '1 / 2', gridRow: '3 / 4' },

        // Column 2 - 3 rows
        { title: 'Digital Culture And Environment', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'completed' }], gridColumn: '2 / 3', gridRow: '1 / 2' },
        { title: 'Leadership Development', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }, { number: 4, status: 'pending' }], gridColumn: '2 / 3', gridRow: '2 / 3' },
        { title: 'Skills & Capacity Building', indicators: [{ number: 1, status: 'in-progress' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }], gridColumn: '2 / 3', gridRow: '3 / 4' },

        // Column 3 - 1 element spanning 3 rows
        { title: 'Business Processes', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }, { number: 4, status: 'pending' }, { number: 5, status: 'completed' }, { number: 6, status: 'in-progress' }], gridColumn: '3 / 4', gridRow: '1 / 4' },

        // Column 4 - 2 rows
        { title: 'Risk Management', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }, { number: 4, status: 'pending' }, { number: 5, status: 'completed' }], gridColumn: '4 / 5', gridRow: '1 / 3' },
        { title: 'Business Continuity', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'pending' }, { number: 3, status: 'pending' }, { number: 4, status: 'pending' }, { number: 5, status: 'completed' }], gridColumn: '4 / 5', gridRow: '3 / 4' },

        // Column 5 - 3 rows
        { title: 'Support Systems', indicators: [{ number: 1, status: 'info' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }, { number: 4, status: 'completed' }, { number: 5, status: 'completed' }], gridColumn: '5 / 6', gridRow: '1 / 2' },
        { title: 'IT Infrastructure', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }, { number: 4, status: 'completed' }], gridColumn: '5 / 6', gridRow: '2 / 3' },
        { title: 'Cloud Infrastructure', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'info' }, { number: 4, status: 'completed' }], gridColumn: '5 / 6', gridRow: '3 / 4' },

        // Column 6 - 1 element spanning 3 rows
        { title: 'Governance Platforms', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }, { number: 4, status: 'pending' }, { number: 5, status: 'completed' }, { number: 6, status: 'completed' }], gridColumn: '6 / 7', gridRow: '1 / 4' },

        // Column 7 - 2 rows
        { title: 'Service Quality', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'completed' }, { number: 3, status: 'completed' }], gridColumn: '7 / 8', gridRow: '1 / 2' },
        { title: 'Digital Channels', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'completed' }, { number: 4, status: 'completed' }, { number: 5, status: 'in-progress' }], gridColumn: '7 / 8', gridRow: '2 / 4' },

        // Column 8 - 3 rows
        { title: 'User Engagement', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }, { number: 4, status: 'in-progress' }], gridColumn: '8 / 9', gridRow: '1 / 2' },
        { title: 'User Relationship', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }], gridColumn: '8 / 9', gridRow: '2 / 3' },
        { title: 'User Experience', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'completed' }, { number: 4, status: 'in-progress' }], gridColumn: '8 / 9', gridRow: '3 / 4' },

        // Column 9 - 3 rows
        { title: 'Data Governance', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }], gridColumn: '9 / 10', gridRow: '1 / 2' },
        { title: 'Data Usage & Availability', indicators: [{ number: 1, status: 'completed' }, { number: 2, status: 'in-progress' }, { number: 3, status: 'in-progress' }], gridColumn: '9 / 10', gridRow: '2 / 3' },
        { title: 'Open Data', indicators: [{ number: 1, status: 'in-progress' }, { number: 2, status: 'delayed' }], gridColumn: '9 / 10', gridRow: '3 / 4' },

        // Column 10 - 2 rows
        { title: 'Innovation', indicators: [{ number: 1, status: 'delayed' }, { number: 2, status: 'delayed' }, { number: 3, status: 'completed' }, { number: 4, status: 'pending' }], gridColumn: '10 / 11', gridRow: '1 / 3' },
        { title: 'Creative Solutions', indicators: [{ number: 1, status: 'delayed' }, { number: 2, status: 'delayed' }, { number: 3, status: 'completed' }], gridColumn: '10 / 11', gridRow: '3 / 4' },
    ]

    return (
        <div className="bg-white rounded-lg p-6">
            <div className="overflow-x-auto scrollbar-hide">
                <div
                    className="grid gap-3 min-w-[1400px]"
                    style={{
                        gridTemplateColumns: 'repeat(10, 1fr)',
                        gridTemplateRows: 'repeat(3, minmax(140px, auto))'
                    }}
                >
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-4 rounded-lg"
                            style={{
                                backgroundColor: item.title ? '#F5F8FB' : 'transparent',
                                gridColumn: item.gridColumn,
                                gridRow: item.gridRow
                            }}
                        >
                            {/* Title */}
                            {item.title && (
                                <div className="text-xs font-medium text-gray-700 text-center mb-3 leading-tight">
                                    {item.title}
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryStatusGrid
