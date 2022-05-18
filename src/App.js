import React, {useEffect, useState} from "react";
import axios from "axios";
import Addresses from './Addresses'



function App () {
  const [arrayOfAddresses, setArrayOfAddresses] = useState([])

  useEffect(()=>{
    axios.get('https://randomuser.me/api?results=25').then((res) =>{
      setArrayOfAddresses(res.data.results);
    });
    
  }, [])

  

   
      return (
      <div className="App">
       <header className="App-header">
         {arrayOfAddresses.length === 0 ? (
           <p>loading ...</p>
           ):(
            <ol>
              {arrayOfAddresses.map((address, index) =>{
                return <Addresses  key={index} address={address}></Addresses>
              })}
               </ol>
           )}
        </header>
        </div>
      );
    
  
  
}

export default App;
