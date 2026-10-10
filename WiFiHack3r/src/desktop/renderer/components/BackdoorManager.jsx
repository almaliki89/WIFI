import React, { useState } from 'react';

const BackdoorManager = () => {
    const [backdoors, setBackdoors] = useState([]);
    const [newBackdoor, setNewBackdoor] = useState({ name: '', description: '', target: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBackdoor(prev => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBackdoors([...backdoors, newBackdoor]);
        setNewBackdoor({ name: '', description: '', target: '' });
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Backdoor Manager</h2>
            <div className="mb-6">
                <h3 className="font-medium mb-2">Add New Backdoor</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={newBackdoor.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            name="description"
                            value={newBackdoor.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="target">Target IP</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="target"
                            type="text"
                            name="target"
                            value={newBackdoor.target}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Add Backdoor
                    </button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {backdoors.map((backdoor, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{backdoor.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{backdoor.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{backdoor.target}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BackdoorManager;