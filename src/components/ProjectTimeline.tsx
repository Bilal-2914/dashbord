import React from 'react'
import { ChevronDown } from 'lucide-react'

interface TimelineItem {
    date: string
    title: string
    status: 'completed' | 'upcoming'
}

interface ProjectTimelineProps {
    title?: string
    year?: string
    items: TimelineItem[]
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
    title = "Project Timeline",
    year = "2026",
    items
}) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <div className="flex items-center gap-4 px-3 py-2 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50">
                    <span className="text-md font-semibold text-[#1e3a5f]">{year}</span>
                    <ChevronDown size={20} className="text-gray-600" />
                </div>
            </div>

            {/* Timeline Container - Scrollable */}
            <div className="overflow-x-auto scrollbar-hide pb-2">
                <div className="relative" style={{ minWidth: '800px' }}>
                    {/* Progress Line Wrapper - positioned absolutely above text */}
                    <div className="absolute" style={{ height: '14px', top: '0px', left: 0, right: 0 }}>
                        {/* Background Line (Gray) */}
                        <div className="absolute inset-0 bg-gray-200" style={{ borderRadius: '10px' }} />

                        {/* Colored Progress Line */}
                        <div
                            className="absolute bg-[#1EA54E] z-10"
                            style={{ top: 0, left: 0, height: '14px', width: '33%', borderRadius: '10px' }}
                        />
                    </div>

                    {/* Timeline Items Text Below */}
                    <div className="flex justify-between relative pt-8">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative">
                                {/* Dot positioned absolutely above text, centered in progress line */}
                                <div
                                    className={`absolute w-3 h-3 rounded-full z-20 ${item.status === 'completed' ? 'bg-white' : 'bg-red-500'
                                        }`}
                                    style={{
                                        top: '-30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)'
                                    }}
                                />
                                <div className="text-xs text-gray-500 mb-2 font-medium whitespace-nowrap">{item.date}</div>
                                <div className="text-sm text-gray-700 leading-tight font-medium whitespace-nowrap">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTimeline