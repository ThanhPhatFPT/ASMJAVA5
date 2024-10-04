import React, { useState } from "react";

export default function ManageUser() {
    // Initial user data
    const initialData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    ];

    // State to manage users
    const [users] = useState(initialData);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>

            {/* Table displaying users */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b">
                            <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
