interface Leader {
    image: string;
    name: string;
    role: string;
}

interface LeadersSectionProps {
    leaders: Leader[];
}

const LeadersSection = ({ leaders }: LeadersSectionProps) => {
    return (
        <div className="mt-6 bg-white rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#1D3557' }}>Leaders</h3>

            <div className="flex gap-4">
                {leaders.map((leader, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg max-w-[225px]"
                        style={{ backgroundColor: '#F9FAFB' }}
                    >
                        <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h4 className="text-sm font-medium" style={{ color: '#1D3557' }}>
                                {leader.name}
                            </h4>
                            <p className="text-xs" style={{ color: '#9CA3AF' }}>
                                {leader.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeadersSection;
