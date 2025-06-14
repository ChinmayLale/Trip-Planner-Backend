import React from 'react'

const TripHistory = () => {
// Dummy trip history data
const trips = [
    {
        name: "Paris",
        startDate: "2024-05-01",
        endDate: "2024-05-07",
        totalDays: 7,
        cost: "$1500",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Tokyo",
        startDate: "2023-11-10",
        endDate: "2023-11-20",
        totalDays: 11,
        cost: "$2200",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "New York",
        startDate: "2022-08-15",
        endDate: "2022-08-22",
        totalDays: 8,
        cost: "$1800",
        image: "https://images.unsplash.com/photo-1549921296-a01050bfc8c5?auto=format&fit=crop&w=400&q=80"
    }
];

return (
    <div className="w-full px-4 py-8 bg-gray-50 min-h-screen !ml-0">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Trip History</h2>
        <div className="space-y-8 w-full">
            {trips.map((trip, idx) => (
                <div
                    key={idx}
                    className="flex flex-col md:flex-row w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                    <div className="md:w-1/3 w-full">
                        <img
                            src={trip.image}
                            alt={trip.name}
                            className="w-full h-56 md:h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">{trip.name}</h3>
                        <div className="text-gray-600 text-base space-y-2">
                            <div>
                                <span className="font-medium text-gray-800">Start Date:</span> {trip.startDate}
                            </div>
                            <div>
                                <span className="font-medium text-gray-800">End Date:</span> {trip.endDate}
                            </div>
                            <div>
                                <span className="font-medium text-gray-800">Total Days:</span> {trip.totalDays}
                            </div>
                            <div>
                                <span className="font-medium text-gray-800">Cost:</span> {trip.cost}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}

export default TripHistory