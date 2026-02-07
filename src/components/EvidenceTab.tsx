interface Document {
    number: string;
    name: string;
    lead: string;
    preparer: string;
    date: string;
    dueDate: string;
    status: 'Approved' | 'Pending Review';
}

interface Comment {
    initial: string;
    name: string;
    text: string;
    date: string;
}

interface Activity {
    text: string;
    time: string;
}

interface EvidenceTabProps {
    documents: Document[];
    comments: Comment[];
    activities: Activity[];
}

const EvidenceTab = ({ documents, comments, activities }: EvidenceTabProps) => {
    return (
        <div className="space-y-6">
            {/* Documents Table */}
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Document Number
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Document Name
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Document Lead
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Document Preparer
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Date
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Due Date
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                            <th className="text-left p-4 text-sm font-medium text-gray-600">
                                <div className="flex items-center gap-2">
                                    Status
                                    <img src="/table-head.svg" alt="" className="w-3 h-3" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc, index) => (
                            <tr key={index} className="border-b border-gray-100 last:border-b-0">
                                <td className="p-4 text-sm text-gray-600">{doc.number}</td>
                                <td className="p-4 text-sm text-gray-600">{doc.name}</td>
                                <td className="p-4 text-sm text-gray-600">{doc.lead}</td>
                                <td className="p-4 text-sm text-gray-600">{doc.preparer}</td>
                                <td className="p-4 text-sm text-gray-600">{doc.date}</td>
                                <td className="p-4 text-sm text-gray-600">{doc.dueDate}</td>
                                <td className="p-4">
                                    <span
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            backgroundColor: doc.status === 'Approved' ? '#D1FAE5' : '#FEF3C7',
                                            color: doc.status === 'Approved' ? '#065F46' : '#92400E'
                                        }}
                                    >
                                        {doc.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Comments and Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Comments Section */}
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#1D3557' }}>Comments</h3>

                    <div className="space-y-3 mb-4">
                        {comments.map((comment, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg border border-gray-100"
                                style={{ backgroundColor: '#FFFFFF' }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
                                        style={{ backgroundColor: '#E0E8ED', color: '#4A5568' }}
                                    >
                                        {comment.initial}
                                    </div>
                                    <div className="flex-1 flex items-center justify-between">
                                        <span className="text-sm font-semibold" style={{ color: '#1D3557' }}>
                                            {comment.name}
                                        </span>
                                        <span className="text-xs text-gray-400">{comment.date}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">{comment.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Comment Input Box */}
                    <div
                        className="mb-4 p-4 rounded-lg border border-gray-200"
                        style={{ backgroundColor: '#FFFFFF', minHeight: '120px' }}
                    >
                        {/* Empty textarea placeholder */}
                    </div>

                    <button
                        className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white"
                        style={{ backgroundColor: '#1D3557' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8L14 8M8 2L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Post Comment
                    </button>
                </div>

                {/* Recent Activities Section */}
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#1D3557' }}>Recent Activities</h3>

                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#EF4444' }}></div>
                                <div className="flex-1 flex items-start justify-between gap-4">
                                    <p className="text-sm text-gray-600 flex-1">{activity.text}</p>
                                    <span className="text-xs text-gray-400 shrink-0">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvidenceTab;
