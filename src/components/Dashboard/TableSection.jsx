import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const recentOrders = [
    {
        id: "#3847",
        cusomer: "John Smith",
        product: "Macbook Pro 16",
        amount: "$2,399",
        status: "completed",
        date: "2024-01-15"
    },{
        id: "#3848",
        cusomer: "Sarah Johnson",
        product: "iPhone 15 Pro",
        amount: "$1,199",
        status: "pending",
        date: "2024-01-15"
    },{
        id: "#3849",
        cusomer: "Mike Wilson",
        product: "Airpods Pro",
        amount: "$249",
        status: "completed",
        date: "2024-01-14"
    },{
        id: "#3850",
        cusomer: "Emily Davis",
        product: "iPad Air",
        amount: "$599",
        status: "cancelled",
        date: "2024-01-14"
    },
]

function TableSection() {

    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
            case "pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
            case "cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400"
        }
    }

    return (
        <div className='space-y-6'>
            {/* Recent Order */}
            <div 
                className='
                    bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 
                    dark:border-slate-700/50 overflow-hidden
                '
            >
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                                Recent Orders
                            </h3>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>
                                Latest customer orders
                            </p>
                        </div>
                        <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                            View All
                        </button>
                    </div>
                </div>

                {/* Table - error around 1:23:59*/}
                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thread>
                            <tr>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Order ID
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Product
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Amount
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Status
                                </th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                    Date
                                </th>
                            </tr>
                        </thread>
                        <tbody>
                            {recentOrders.map((order, index) => {
                                return (
                                    <tr
                                        className='
                                            border-b border-slate-200/50  dark:border-slate-700/50 hover:bg-slate-50/50 
                                            dark:hover:bg-slate-800/50 transition-colors
                                        ' 
                                    >
                                        <td className='p-4' key={index}>
                                            <span className='text-sm font-medium text-blue'>
                                                {order.id}
                                            </span>
                                        </td>
                                        <td className='p-4'>
                                            <span className='text-sm text-slate-800 dark:text-white'>
                                                {order.cusomer}
                                            </span>
                                        </td>      
                                        <td className='p-4'>
                                            <span className='text-sm text-slate-800 dark:text-white'>
                                                {order.product}
                                            </span>
                                        </td>      
                                        <td className='p-4'>
                                            <span className='text-sm text-slate-800 dark:text-white'>
                                                {order.amount}
                                            </span>
                                        </td>      
                                        <td className='p-4'>
                                            <span 
                                                className={`
                                                    text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full 
                                                    ${getStatusColor(order.status)}    
                                                `}
                                            >
                                                {order.status}
                                            </span>
                                        </td>      
                                        <td className='p-4'>
                                            <span className='text-sm text-slate-800 dark:text-white'>
                                                <MoreHorizontal className='w-4 h-4'/>
                                            </span>
                                        </td>                                
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top Products */}
            <div 
                className='
                    bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 
                    dark:border-slate-700/50 overflow-hidden
                '
            >
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div className='text-lg font-bold text-slate-800 dark:text-white'>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                                Top Products
                            </h3>
                        </div>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>
                            Best performing products
                        </p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableSection
