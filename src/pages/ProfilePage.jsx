import React from 'react'

const ProfilePage = () => {
// Dummy user data for demonstration
const user = {
    profileImage: 'https://via.placeholder.com/150',
    username: 'johndoe',
    email: 'johndoe@example.com',
    fullname: 'John Doe',
    gender: 'Male',
    phone: '+1 234 567 890'
};

return (
    <>
        <div className="flex flex-col items-center gap-4 mt-12">
            <img
                src={user.profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-blue-500"
            />
            <h2 className="text-3xl font-bold text-gray-800">{user.fullname}</h2>
            <span className="text-lg text-blue-600 font-medium">@{user.username}</span>
        </div>
        <div className="flex flex-col items-center gap-2 mt-8">
            <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Email:</span>
                <span className="text-gray-600">{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Gender:</span>
                <span className="text-gray-600">{user.gender}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Phone:</span>
                <span className="text-gray-600">{user.phone}</span>
            </div>
        </div>
        <div className="flex justify-center mt-8">
            <button className="px-8 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition">
                Edit Profile
            </button>
        </div>
    </>
)
}

export default ProfilePage