import React from 'react'

function ActivityFeed() {
  return (
    <div 
        className='
            bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50
        '
    >
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                    Activity Feed
                </h3>        
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Recent System Activities
                </p>
            </div>  
            <button className='text-blue- hover:text-blue-700 text-sm font-medium'>
                View All
            </button>          
        </div>      
    </div>
  )
}

export default ActivityFeed
