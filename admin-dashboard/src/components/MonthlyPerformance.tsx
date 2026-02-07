import React from 'react'

interface MonthData {
    month: string
    value: number
}

interface MonthlyPerformanceProps {
    data: MonthData[]
}

const MonthlyPerformance: React.FC<MonthlyPerformanceProps> = ({ data }) => {
    const maxValue = 100

    return (
        <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E0E8ED', height: '330px' }}>
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-6">12-Month Performance</h3>

            <div className="relative" style={{ height: '240px' }}>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                </div>

                {/* Chart area */}
                <div className="ml-8 flex items-end justify-between gap-3" style={{ height: '200px', paddingBottom: '32px' }}>
                    {data.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center h-full justify-end">
                            {/* Bar with gradient */}
                            <div
                                className="w-full"
                                style={{
                                    height: `${(item.value / maxValue) * 100}%`,
                                    background: 'linear-gradient(to bottom, #0078D7 0%, rgba(0, 120, 215, 0.1) 100%)',
                                    borderRadius: '0 0 4px 4px',
                                    minHeight: '8px'
                                }}
                            />
                            {/* Month label */}
                            <span className="text-xs text-gray-500 mt-2 absolute" style={{ bottom: '0' }}>{item.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MonthlyPerformance
