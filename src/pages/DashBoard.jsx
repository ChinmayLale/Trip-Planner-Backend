import React from 'react'
import ProfilePage from './ProfilePage';
import TripHistory from './TripHistory';
import { Settings } from 'lucide-react';

const DashBoard = () => {
const [sidebarOpen, setSidebarOpen] = React.useState(false);
const [activeSection, setActiveSection] = React.useState('Profile');

const sections = [
    { name: 'Profile' },
    { name: 'Trip History' },
    { name: 'Settings' },
];

return (

    <div className="flex min-h-screen bg-gray-50">
        {/* Hamburger for mobile - now top right */}
        <button
            className="md:hidden fixed top-4 right-4 z-[100] p-2 rounded bg-white shadow"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        {/* Sidebar */}
        <aside
            className={`
                fixed inset-y-0 left-0 z-40 w-56 bg-white shadow-lg transform
                transition-transform duration-200 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:static md:translate-x-0 md:flex-shrink-0
            `}
        >
            <div className="flex flex-col h-full p-6">
                {/* Close button for mobile */}
                <button
                    className="md:hidden self-end mb-6"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav className="flex-1">
                    <ul className="space-y-4">
                        {sections.map((section) => (
                            <li key={section.name}>
                                <button
                                    className={`w-full text-left px-3 py-2 rounded transition
                                        ${activeSection === section.name
                                            ? 'bg-blue-100 text-blue-700 font-semibold'
                                            : 'hover:bg-gray-100 text-gray-700'}
                                    `}
                                    onClick={() => {
                                        setActiveSection(section.name);
                                        setSidebarOpen(false);
                                    }}
                                >
                                    {section.name}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                className="w-full px-3 py-2 rounded bg-black text-white hover:bg-gray-700 transition-colors"
                                onClick={() => {
                                    // handle logout here
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
            />
        )}
        <div className="flex-1 flex items-top justify-center">
        
        {/* Main content */}
        <main className="p-8 md:ml-56">
            {activeSection === 'Profile' && (
                <ProfilePage/>
            )}
            {activeSection === 'Trip History' && (
                <TripHistory />
            )}
            {activeSection === 'Settings' && (
                <Settings />
            )}

        </main>
        </div>
    </div>
);
}

export default DashBoard;