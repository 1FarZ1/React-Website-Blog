import React, { useEffect } from "react";
import Card from "./card";
import "../card.css";



export default function Home() {
    const [counter, setCounter] = React.useState(0);
    // const [counter, setCounter] = React.useState(0);
    const data=[
        {  name:"Souhaib", posts:"30"  ,likes:"555"  ,imgUrl:"https://scontent.falg7-1.fna.fbcdn.net/v/t39.30808-6/307093216_906100407017815_1270206489116100985_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGyyeXcAb1IuAvdgQrbnnwMTWNY4rSVlGdNY1jitJWUZ0-fMCI0xni6oObH1RMvg7xn4jIzWgroSVr2E8F3A0yL&_nc_ohc=rv-TMGnMeD8AX8WgvWM&_nc_ht=scontent.falg7-1.fna&oh=00_AfDH7Rorwwkm7T-fOzryBkqhlLTxWXmc5TaKUmrFsbkaVg&oe=640D55EF"
        },
        {     name:"Rayane", posts:"30"  ,likes:"555"  ,imgUrl:"https://scontent.falg7-1.fna.fbcdn.net/v/t1.6435-9/37748817_207094393308785_7612488765159768064_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG_DnflFwuomy1nj38WzmPtnVxsdiZJZWOdXGx2JkllYxt9AIPb-UdzQ5TdEZUt0Z-C9m3YY74q7S5y22uqS8V8&_nc_ohc=AS8e8GpFjIoAX-H-h0s&_nc_ht=scontent.falg7-1.fna&oh=00_AfDz_V9WVjGyw2KQZ4w7i4C3M1AyTO7f9U0kjSP5ZDoTkQ&oe=642FFD0B",
        },
            {   
               name:"Fares", posts:"30"  ,likes:"555"  ,imgUrl:"https://scontent.falg7-1.fna.fbcdn.net/v/t39.30808-6/308563704_1300263990513693_4278023934451233394_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGs4ImGlb00WYq6X6d3jwlzjiFWuqS4TvOOIVa6pLhO1dawEN63xFqanTHjYabDUPQwflK-9n_q8DQHWsrx739&_nc_ohc=MesV5soPAtEAX_P6XoT&_nc_ht=scontent.falg7-1.fna&oh=00_AfBVpBNJ0ijpn0JbXSymdUfRso8RLe7u2e9oYdCNlMYilw&oe=640D9792"
            },
          

    ]

    useEffect(
        ()=>{
        
        },
        []
    );

    const addCounter = () => {
        // if(counter < data.length){
        //    setNewData([...newData, data[counter]])
        //    setCounter(counter + 1);
        // }
        // genetae random number every 2 seconds

        setNewData( [...newData, data[Math.floor(Math.random() * data.length)] ] )
           setCounter(counter + 1);

    }
    
    const [newData, setNewData] = React.useState([]);
    return (

        <div className="Home">
            <h2>
                Home
            </h2>
            <button onClick={addCounter}>
                Add Card
            </button>

            <h2>
                Current Cards: {counter}
            </h2>
        <div className="containerS">
               
        {
       newData.map((item,index) => {
            return <Card  Key={index.toString()} info={item} />
       })
        }
        
        </div>
        </div>
    )
}