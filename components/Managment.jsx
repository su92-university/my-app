'use client'
import React, { useState } from 'react'

export default function Managment() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');

    const vendors = [
        { id: 1, name: 'TechCorp Inc.', email: 'vendor@techcorp.com', status: 'approved', projects: 5, subscribers: 234, revenue: 45000, joined: '1/1/2024', initial: 'T', color: 'bg-blue-500' },
        { id: 2, name: 'CloudApp Solutions', email: 'info@cloudapp.io', status: 'pending', projects: 2, subscribers: 45, revenue: 8500, joined: '1/10/2024', initial: 'C', color: 'bg-green-500' },
        { id: 3, name: 'DataFlow Systems', email: 'hello@dataflow.com', status: 'approved', projects: 8, subscribers: 567, revenue: 89000, joined: '12/15/2023', initial: 'D', color: 'bg-orange-500' },
        { id: 4, name: 'API Masters', email: 'contact@apimasters.dev', status: 'pending', projects: 1, subscribers: 12, revenue: 1200, joined: '1/15/2024', initial: 'A', color: 'bg-teal-500' },
        { id: 5, name: 'SaaS Builder', email: 'team@saasbuilder.io', status: 'suspended', projects: 3, subscribers: 89, revenue: 15000, joined: '11/20/2023', initial: 'S', color: 'bg-purple-500' },
    ];

    const stats = {
        total: vendors.length,
        approved: vendors.filter(v => v.status === 'approved').length,
        pending: vendors.filter(v => v.status === 'pending').length,
        suspended: vendors.filter(v => v.status === 'suspended').length,
    };

    const getStatusBadge = (status) => {
        const styles = {
            approved: 'bg-green-100 text-green-700 border border-green-200',
            pending: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
            suspended: 'bg-red-100 text-red-700 border border-red-200',
        };
        return styles[status] || '';
    };

    const filteredVendors = vendors.filter(vendor => {
        const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             vendor.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All Status' || vendor.status === statusFilter.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Vendor Management</h1>
                <p className="text-gray-500 mt-1">Manage and monitor all registered vendors</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Total Vendors */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                            <p className="text-gray-500 text-sm">Total Vendors</p>
                        </div>
                    </div>
                </div>

                {/* Approved */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">{stats.approved}</p>
                            <p className="text-gray-500 text-sm">Approved</p>
                        </div>
                    </div>
                </div>

                {/* Pending */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">{stats.pending}</p>
                            <p className="text-gray-500 text-sm">Pending</p>
                        </div>
                    </div>
                </div>

                {/* Suspended */}
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">{stats.suspended}</p>
                            <p className="text-gray-500 text-sm">Suspended</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search vendors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer transition-all duration-300"
                >
                    <option>All Status</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Suspended</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Name</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Projects</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subscribers</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Revenue</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined</th>
                                <th className="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVendors.map((vendor, index) => (
                                <tr 
                                    key={vendor.id} 
                                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                                >
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 ${vendor.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                                                {vendor.initial}
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{vendor.name}</p>
                                                <p className="text-sm text-gray-500">{vendor.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusBadge(vendor.status)}`}>
                                            {vendor.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700">{vendor.projects}</td>
                                    <td className="py-4 px-6 text-gray-700">{vendor.subscribers}</td>
                                    <td className="py-4 px-6 text-gray-700">${vendor.revenue.toLocaleString()}</td>
                                    <td className="py-4 px-6 text-gray-700">{vendor.joined}</td>
                                    <td className="py-4 px-6">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
