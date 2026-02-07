interface StatCard {
    icon: string;
    value: string;
    label: string;
}

interface StatsCardsProps {
    stats: StatCard[];
}

const StatsCards = ({ stats }: StatsCardsProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start gap-4">
                        <img src={stat.icon} alt={stat.label} className="w-6 h-6 mt-1" />
                        <div>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0%', color: '#1D3557', marginBottom: '8px' }}>
                                {stat.value}
                            </h3>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
