import React from 'react'
import CategoryStatusGrid from './CategoryStatusGrid'

interface CategoryCardProps {
    title: string
    percentage: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, percentage }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-lg lg:w-auto" style={{ backgroundColor: '#1E3A5F', minWidth: '140px' }}>
            <div className="text-white text-sm font-medium text-center mb-3 leading-tight">
                {title}
            </div>
            <div className="text-white text-sm font-semibold">
                {percentage}
            </div>
        </div>
    )
}

const ProgressStatus: React.FC = () => {
    const statusItems = [
        { label: 'Not Started', color: '#9CA3AF' },
        { label: 'In Progress', color: '#F59E0B' },
        { label: 'Completed', color: '#10B981' },
        { label: 'Partially Uploaded', color: '#1E3A5F' },
        { label: 'Fully Uploaded', color: '#3B82F6' },
        { label: 'Delayed', color: '#EF4444' }
    ]

    const categories = [
        { title: 'Strategy And Planning', percentage: '97.78%' },
        { title: 'Organization And Culture', percentage: '70.83%' },
        { title: 'Operations And Execution', percentage: '%80.00' },
        { title: 'Business Continuity', percentage: '90.59%' },
        { title: 'Information Technology', percentage: '75.00%' },
        { title: 'Comprehensive Governance', percentage: '64.44%' },
        { title: 'Channels And Services', percentage: '100%' },
        { title: 'Beneficiary Centralization', percentage: '60.00%' },
        { title: 'Government Data', percentage: '87.50%' },
        { title: 'Research And Innovation', percentage: '17.65%' }
    ]

    return (
        <div className="bg-white rounded-lg border" style={{ borderColor: '#E0E8ED' }}>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 gap-4" style={{ borderColor: '#E0E8ED' }}>
                <h3 className="text-base font-semibold text-gray-900 shrink-0">Progress Status</h3>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-4 md:gap-6 min-w-max">
                        {statusItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 shrink-0">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="p-6">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 min-w-max lg:grid lg:grid-cols-5 xl:grid-cols-10 lg:min-w-0">
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                title={category.title}
                                percentage={category.percentage}
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* <CategoryStatusGrid /> */}

        </div>
    )
}

export default ProgressStatus
