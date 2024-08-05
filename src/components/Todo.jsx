import React, { useState } from 'react';
// import "./Todo.css";

const Todo = () => {
   
//    const [addValue,setAddValue] = useState("");
//    const [data,setData]=useState([]);
   

//    const handleAdd = ()=>{
//     if(!addValue){
//         alert("Enter the Name and Description");
//     }
//     else{
       
//         setData([...data,addValue]);
//         setAddValue("");
//     }
//         }
// const handleRemove = (index)=>{
//     const remove = data.filter((item,indexItem)=>indexItem !==index);
//     setData(remove);
// }
// const handleEdit = (index)=>{
//     let newEditItem=item.find((index)=>{
//         return index.data
//     })
// }

//    return (
// <div className='todolist'>
            
//       <h1>My todo</h1>

//     <div className="todo-wrapper">
//         <div className="todo-input">
//             <div className="d-flex gap-2 align-item-center">
//                 <input type="text" className='name' placeholder='Todo Name' onChange={(e)=>setAddValue(e.target.value)} value={addValue} />          
//                 <input type="text" className='description' placeholder='Todo Description' onChange={(e)=>setAddValue(e.target.value)} value={addValue} />         
//                 <button type='button' className='primaryBtn' onClick={()=>handleAdd()} >Add Todo</button>
//             </div>

            
//         </div>
//     </div>
//     <div className='drop'>My Todos</div>
//     <div className='drop'>Status Filter</div>



// <div className='cards-grouo'>
    
//         {
//             data.map((currItem, index)=>{
//                 return(
//                     <>
//                    <div className='card'>
//                     <p className='card-text'>
//                     Name: {currItem} <br />
//                     Description:{currItem}
                    
//                     </p>
//                     <button className='remove' onClick={()=> handleRemove(index)}>Delete</button>
//                         <button className='btn-edit' onClick={()=> handleEdit(index)}>Edit</button>
//                    </div>
                      
                        
                    
//                     </>
//                 );
//             })
//         }
    
     
// </div>
// </div>
       
//     );
};

export default Todo;