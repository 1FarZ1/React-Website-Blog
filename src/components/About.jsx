import React ,{useEffect}from 'react'
import '../App.css'
import '../card.css'

export default function About() {

    // we can also make our custom Error Handler
    // error for custom error message and message for ux 
    // const [error, setError] = React.useState(null);
    // const [isLoaded, setIsLoaded] = React.useState(false);


    const [data, setData] = React.useState([]);
    const [Shown, setShown] = React.useState(false);

    // its better to make a custom hook for fetching data
    // and use it in all components
    // so we can maintain our code easily in one place
    // just create a file for custom hooks and import it in all components
    // and use it
    useEffect(() => {
        fetch("https://dummyjson.com/users").then((response) => {
            return response.json();
        }).then((Newdata) => {
           
            setData(Newdata["users"])
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);
  return (
    <div className='Home'>
        <h1>About</h1>
        <div className="content">
            <h2>Content</h2>
            <button onClick={
                ()=>{setShown(!Shown)}
            }>Show Data</button>
          {
                Shown ?   
                <ul className='DataList'>
                {
                 data!= null ? 
                     data.map
                         ( (item,index)=>{
                           
                             return <li key={index}>
                                 <span>
                                     {item.firstName},
                                 </span>
                         
                                 <span>
                                     {item.lastName},
                                 </span>
                                 <span>
                                     {item.age},
                                 </span>
                                 
                                 <span>
                                     {item.gender}
                                 </span>
 
                             </li> 
                         })
                 :  
                     <li>loading</li>
                }
             </ul> : 
            <div className='dottedContainer'>
            <div className="dotted"></div>
            <div className="dotted"></div>
            <div className="dotted"></div>
            </div>

          }
        </div>

    </div>
  )
}
