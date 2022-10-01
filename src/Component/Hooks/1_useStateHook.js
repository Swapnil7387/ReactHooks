import React,{useState} from "react";
import { Component } from "react";

function Hooks(){
    const [name, setName] = useState("Swapnil");
    const [age , setAge] = useState(26);
    const handleClick = () =>{
        setName("swapi");
        setAge(20)
    }
    return(
        <div>
            <h1>Hello {name}</h1>
            <h3>Your age is : {age}</h3>
            <button onClick={handleClick}>Change Data</button>
        </div>
    );
}
export default Hooks;

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state={
//             name: "Swapi",
//             age : 26,
//         }
//     }

//     changeAllData = () => {
//         this.setState({ name : "Nanaso" , age : 25})
//     }
//     render(){
//         return(
//             <>
//             <h1> My name is : {this.state.name}</h1>
//             <h1> My age is : {this.state.age}</h1>
//             <button onClick={this.changeAllData}>Change Data</button>
//             </>
//         );
//     }
// }
// export default Hooks;