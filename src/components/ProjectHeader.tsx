interface ProjectHeaderProps {
    badge: string;
    title: string;
    description: string;
    progress: number;
}

const ProjectHeader = ({ badge, title, description, progress }: ProjectHeaderProps) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="inline-block mb-3">
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: '16px',
                                paddingRight: '16px',
                                height: '32px',
                                backgroundColor: '#ffffff',
                                color: '#8597A8',
                                border: '1px solid #E0E8ED',
                                borderRadius: '16px',
                                fontSize: '12px',
                                fontWeight: 400,
                                lineHeight: '22px',
                                letterSpacing: '0%',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {badge}
                        </span>
                    </div>
                    <h2 className="text-lg font-bold text-[#1D3557] mb-2">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-400">
                        {description}
                    </p>
                </div>
                <div className="ml-6 shrink-0">
                    <div className="relative w-[80px] h-[80px]">
                        <svg className="w-[80px] h-[80px] transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="#E5E7EB"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke="#10B981"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 36}`}
                                strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-base font-bold text-[#10B981]">{progress}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
