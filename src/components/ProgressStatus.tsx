import React from 'react'
import CategoryStatusGrid from './CategoryStatusGrid'

interface CategoryCardProps {
    title: string
    percentage: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, percentage }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-lg" style={{ backgroundColor: '#1E3A5F', minWidth: '120px' }}>
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
            <div className="flex items-center justify-between p-4" style={{ borderColor: '#E0E8ED' }}>
                <h3 className="text-base font-semibold text-gray-900">Progress Status</h3>
                <div className="flex items-center gap-6">
                    {statusItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm text-gray-600">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="p-6">
                <div className="flex gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            title={category.title}
                            percentage={category.percentage}
                        />
                    ))}
                </div>
                <style>{`
                    .overflow-x-auto::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>


            <CategoryStatusGrid />

        </div>
    )
}

export default ProgressStatus
