import React, { useEffect } from 'react'

export default function Footer() {
    const[year,setYear]=React.useState(0);

    const getDate=()=>{
        // GET current Year
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }
    useEffect(() => {
        setYear(getDate());
    },[])
    return (
        <div className="footer">
            <h5>Copyright reserved {year} @</h5>
    
            <ul><li>
               <a href="/">Facebook</a></li>
                <li><a href="/">Github</a></li>
                <li><a href="/">Instagram</a></li>

            </ul>
        </div>
    )
}