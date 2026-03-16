import React, { useEffect, useState } from 'react'
import { getPlanner } from '../../api/auth'

export default function PlannerCard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
            const res = await getPlanner();
            setData(res.data);
            console.log(res.data);
        }

        fetchDetails();
    }, [])


  return (
    <div className='mt-14'>
        {/* date bar */}
        <div style={{background: "var(--date-bar-background)", fontSize: "var(--date-bar-size)", color: "var(--dashboard-hero-heading-color)"}} className='text-center p-2 font-bold'>
            <p>Mar 18 - Mar 24</p>
        </div>

        {/* Day bar */}
        <div style={{background: "var(--day-bar-background)", fontSize: "var(--day-bar-size)", color: "var(--day-bar-color)"}} className='text-center p-2 font-bold'>
            <p>Mon    |    Tue    |    Wed    |    Thu    |    Fri    |    Sat    |    Sun</p>
        </div>
    </div>
  )
}
