import React, { useState } from 'react';
// import "./TodoList.css";

// const TodoList = () => {
// const [inputArr,setInputArr]=useState([])

// const [inputdata,setInputdata]=useState({
//     name:"",
//     description:""
// })


// function changehandle(e){
// setInputdata({...inputdata,[e.target.name]:e.target.value})
// }
// let {name,description}=inputdata;
// function changehandle(){
//     setInputArr([...inputArr,name,description])
// }
//     return (
//         <div className='App'>
//             <h3>My Todo</h3>
//             <input type="text" autoComplete='off' className='name' value={inputdata.name} onChange={changehandle} placeholder='Todo Name' />
//             <input type="text" autoComplete='off' className='description' value={inputdata.description} onChange={changehandle} placeholder='Todo Description' />
//             <button onClick={changehandle}>Add Todo</button><br /><br /> 
        
//             <div className='card-group'>
//                <div>
//                 <p1>Name</p1>
//                 <p2>Description</p2>
//                 </div>
//                 {
//                      inputArr.map((info, ind)=>{
//                         return(
//                             <>
//                            <div className='card'>
//                             <p className='card-text'>
//                             Name: {info.name}
//                             description:{info.description}
//                             </p>
//                             </div>
//                             </>
//                         )
//                     })
//                 }

//             </div>
//         </div>
//     );
// };

export default TodoList;