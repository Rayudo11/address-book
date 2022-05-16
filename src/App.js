import React, {Component} from "react";
import axios from "axios";




class App extends Component{
  constructor() {
    super()

    this.state = {
      arrayOfAddresses: []
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
    .then( res => {
      const arrayOfAddresses = res.data
      this.setState( arrayOfAddresses )
    })
  }

  componentDidUpdate() {
   console.log(this.state.results)
  
  }

    render() {
      return (
      <div className="App">
       <header className="App-header">
         {this.state.results.length === 0 ? (
           <p>loading ...</p>):(
            <ol>{this.state.results.map((address,index) => {
              return(
              <li key={index}>
                {address.name}
              </li>
              )
            })}
              
            </ol>
           )
         }
        </header>
        </div>
      );
    }
  
  
}

export default App;
