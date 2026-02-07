import { useState } from 'react';
import ProjectHeader from '../components/ProjectHeader';
import StatsCards from '../components/StatsCards';
import TabsWithContent from '../components/TabsWithContent';
import LeadersSection from '../components/LeadersSection';
import EvidenceTab from '../components/EvidenceTab';

const Perspective = () => {
    const [activeTab, setActiveTab] = useState(0);

    const statsData = [
        { icon: '/4.png', value: '4', label: 'Total Evidence' },
        { icon: '/3.png', value: '3', label: 'Under Review Evidence' },
        { icon: '/2.png', value: '2', label: 'In Progress Evidence' },
        { icon: '/1.png', value: '1', label: 'Completed Evidence' }
    ];

    const overviewData = [
        {
            title: 'Objective',
            description: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030."
        },
        {
            title: 'Implementation Requirements',
            description: "Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:\nA. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.\nB. Strategic Initiatives, Programs, And Performance Indicators.\nC. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.\nD. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives."
        },
        {
            title: 'Evidence Documents',
            description: "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months."
        },
        {
            title: 'Related Regulations',
            description: "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16)."
        },
        {
            title: 'Scope',
            description: "All Government Entities."
        }
    ];

    const documentsData = [
        {
            number: '5.4.1.1',
            name: 'Digital_Transformation_Plan.Pdf',
            lead: 'Ahmed Khaled',
            preparer: 'Ahmed Khaled',
            date: '2025-08-01',
            dueDate: '2025-08-01',
            status: 'Approved' as const
        },
        {
            number: '5.4.1.2',
            name: 'KPI_Framework.Xlsx',
            lead: 'Mona Hamed',
            preparer: 'Mona Hamed',
            date: '2025-08-01',
            dueDate: '2025-08-01',
            status: 'Pending Review' as const
        },
        {
            number: '5.4.1.3',
            name: 'Roadmap_Version1.Docx',
            lead: 'Rami AlSharif',
            preparer: 'Rami AlSharif',
            date: '2025-08-01',
            dueDate: '2025-08-01',
            status: 'Pending Review' as const
        }
    ];

    const commentsData = [
        {
            initial: 'E',
            name: 'Sara Ibrahim',
            text: 'Ensure The Plan Includes A Clear Governance Model.',
            date: '2025-08-05'
        },
        {
            initial: 'M',
            name: 'Mona Hamed',
            text: 'Ensure The Plan Includes A Clear Governance Model.',
            date: '2025-08-05'
        }
    ];

    const activitiesData = [
        {
            text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
            time: '5 Mins Ago'
        },
        {
            text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
            time: '20 Mins Ago'
        },
        {
            text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
            time: '1 Hour Ago'
        }
    ];

    const leadersData = [
        { image: '/profile.png', name: 'Ahmed Al-Ali', role: 'Strategy Perspective' },
        { image: '/profile.png', name: 'Ahmed Al-Ali', role: 'Strategy Perspective' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 overflow-y-auto pb-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
                .min-h-screen::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            {/* Header Section */}
            <div className="bg-white px-6 py-4">
                <div className="flex items-center gap-4">
                    <img
                        src="/arrow-left.svg"
                        alt="Back"
                        className="w-6 h-6 cursor-pointer"
                        style={{ filter: 'brightness(0) saturate(100%) invert(14%) sepia(28%) saturate(1234%) hue-rotate(182deg) brightness(95%) contrast(92%)', height: "6px", width: "10px" }}
                    />
                    <h1
                        style={{
                            color: '#1D3557',
                            fontSize: '16px',
                            lineHeight: '16px',
                            fontWeight: 700,
                            letterSpacing: '0%'
                        }}
                    >
                        Digital Transformation Strategic Planning
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-6 py-6 pb-12">
                <ProjectHeader
                    badge="Strategy & Planning"
                    title="Digital Transformation Strategic Planning"
                    description="Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals"
                    progress={100}
                />

                <StatsCards stats={statsData} />

                <TabsWithContent
                    tabs={['Overview', 'Evidence']}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    overviewContent={overviewData}
                    evidenceContent={
                        <EvidenceTab
                            documents={documentsData}
                            comments={commentsData}
                            activities={activitiesData}
                        />
                    }
                />

                {activeTab === 0 && <LeadersSection leaders={leadersData} />}
            </div>
        </div>
    );
};

export default Perspective;
