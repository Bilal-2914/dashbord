import React from 'react'

interface Performer {
    name: string
    perspective: string
    score: number
    avatar?: string
}

interface TopPerformersProps {
    performers: Performer[]
}

const TopPerformers: React.FC<TopPerformersProps> = ({ performers }) => {
    return (
        <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E0E8ED' }}>
            <h3 className="text-base font-semibold text-gray-900 mb-6">Top Performing Perspective Leaders</h3>

            <div className="space-y-4">
                {performers.map((performer, index) => (
                    <div key={index} className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                            {performer.avatar ? (
                                <img src={performer.avatar} alt={performer.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg font-semibold">
                                    {performer.name.charAt(0)}
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900">{performer.name}</div>
                            <div className="text-xs text-gray-500">{performer.perspective}</div>
                        </div>

                        {/* Score */}
                        <div className="text-lg font-bold text-gray-900 shrink-0">{performer.score}%</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopPerformers
