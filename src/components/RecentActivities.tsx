import React from 'react'

interface Activity {
    title: string
    description: string
    time: string
}

interface RecentActivitiesProps {
    activities: Activity[]
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
    return (
        <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E0E8ED' }}>
            <h3 className="text-base font-semibold text-gray-900 mb-6">Recent Activities</h3>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex gap-3">
                        {/* Red Dot */}
                        <div className="shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div className="text-sm text-gray-900">
                                    {activity.title}
                                </div>
                                <div className="text-xs text-gray-400 shrink-0">{activity.time}</div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{activity.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentActivities
