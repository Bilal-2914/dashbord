import React from 'react'
import ProjectTimeline from '../components/ProjectTimeline'
import StatsCard from '../components/StatsCard'
import ProgressStatus from '../components/ProgressStatus'
import ComplianceScore from '../components/ComplianceScore'
import TopPerformers from '../components/TopPerformers'
import RecentActivities from '../components/RecentActivities'
import MonthlyPerformance from '../components/MonthlyPerformance'
import AuditReadiness from '../components/AuditReadiness'

const Dashboard: React.FC = () => {
    const timelineData = [
        { date: 'Mar 17', title: 'Kickoff Workshop', status: 'completed' as const },
        { date: 'March 18', title: 'Data Collection', status: 'completed' as const },
        { date: 'May 8', title: 'Initial Phase', status: 'upcoming' as const },
        { date: 'May 9 - July 12', title: 'Verification', status: 'upcoming' as const },
        { date: 'July 13', title: 'Completion Reviews', status: 'upcoming' as const },
        { date: 'August 21', title: 'Cycle Conclusion', status: 'upcoming' as const }
    ]

    const statsData = [
        { value: '78.65%', label: 'Overall Progress', icon: '/Vector.png', isHighlighted: true },
        { value: '95', label: 'Total Criteria', icon: '/hugeicons_folder-01.png' },
        { value: '52', label: 'Completed Criteria', icon: '/hugeicons_folder-check.png' },
        { value: '386', label: 'Evidence Documents', icon: '/hugeicons_file-security.png' },
        { value: '302', label: 'Evidence [Completed]', icon: '/Group-2.png' },
        { value: '258', label: 'Uploaded To OGA', icon: '/Group-3.png' }
    ]

    const performersData = [
        { name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96 },
        { name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective', score: 94 },
        { name: 'Mohammad Al-Mansour', perspective: 'IT Perspective', score: 92 }
    ]

    const activitiesData = [
        { title: 'Document "Strategy_Review.Pdf"', description: 'Was Uploaded By Ahmed Khaled', time: '5 Mins Ago' },
        { title: 'Task "Review Compliance Files"', description: 'Was Assigned To Mona Hamed', time: '30 Mins Ago' },
        { title: 'New Criterion "5.3 Digital Identity"', description: 'Was Created By Admin', time: '1 Hour Ago' }
    ]

    const monthlyData = [
        { month: 'Jan', value: 90 },
        { month: 'Feb', value: 75 },
        { month: 'Mar', value: 80 },
        { month: 'Apr', value: 42 },
        { month: 'May', value: 88 },
        { month: 'Jun', value: 78 },
        { month: 'Jul', value: 55 },
        { month: 'Aug', value: 85 },
        { month: 'Sept', value: 77 },
        { month: 'Oct', value: 55 },
        { month: 'Nov', value: 88 },
        { month: 'Dec', value: 78 }
    ]

    return (
        <div className="space-y-6">
            {/* Stats Cards Section */}
            <div className="grid grid-cols-6 gap-4">
                {statsData.map((stat, index) => (
                    <StatsCard
                        key={index}
                        value={stat.value}
                        label={stat.label}
                        icon={stat.icon}
                        isHighlighted={stat.isHighlighted}
                    />
                ))}
            </div>

            {/* Project Timeline Section */}
            <ProjectTimeline
                title="Project Timeline"
                year="2026"
                items={timelineData}
            />

            {/* Progress Status Section */}
            <ProgressStatus />

            {/* Bottom Section - 3 Cards */}
            <div className="grid grid-cols-3 gap-6">
                <ComplianceScore score={65} />
                <TopPerformers performers={performersData} />
                <RecentActivities activities={activitiesData} />
            </div>

            {/* Last Section - 2 Cards */}
            <div className="flex gap-6">
                <div className="flex-1">
                    <MonthlyPerformance data={monthlyData} />
                </div>
                <AuditReadiness score={80} overdue={12} missing={5} />
            </div>
        </div>
    )
}

export default Dashboard