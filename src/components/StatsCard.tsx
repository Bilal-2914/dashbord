import React from 'react'

interface StatsCardProps {
    value: string | number
    label: string
    icon: string
    isHighlighted?: boolean
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon, isHighlighted = false }) => {
    return (
        <div
            className={`flex flex-col p-4 bg-white rounded-lg border border-[#E0E8ED]`}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="text-2xl font-bold text-[#1D3557]">{value}</div>
                <div className="shrink-0">
                    <img
                        src={icon}
                        alt={label}
                        style={{ width: '17px', height: '20px', filter: 'invert(20%) sepia(89%) saturate(3500%) hue-rotate(345deg) brightness(90%) contrast(95%)' }}
                    />
                </div>
            </div>
            <div className="text-sm text-gray-500">{label}</div>
        </div>
    )
}

export default StatsCard
