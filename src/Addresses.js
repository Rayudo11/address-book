import { useState } from "react";
import './Addresses.css';

function Addresses(props) {
    //Destructuring
    const {address} = props

    const [pushed, setpushed] = useState(false)

    function handleDetails() {
        setpushed(!pushed)
    }

    return( 
    <li className="listform" style={{ flexDirection: 'row', justifyContent: 'space-between', border: "solid 3px black", margin: "10px 20px 50px 10px" }} >
        <img src={address.picture.large} alt={address.name}></img> <br />
        {address.name.first}
        {address.name.last} <br />
        {!pushed && <button
            id="push-button"
            onClick={handleDetails}>Show Details
        </button>}
        {pushed &&(
            <div>
                <button
                    id="push-button"
                    onClick={() => { handleDetails() }}>hide Details
                </button>
                <p>Phone Number: {address.cell} </p>
                <p>Email: {address.email}</p>
                <p> Age: {address.dob.age}</p>
            </div>
        )}
    </li>
    );

}

export default Addresses