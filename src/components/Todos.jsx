import React, { useEffect, useState } from 'react';
import './Todos.css';

const Todos = () => {
    const[isCompleteScreen,setIsCompleteScreen] = useState(false);
    const[allTodos,setTodos] = useState([]);
    const[newName,setNewName] = useState("");
    const[newDescription,setNewDescription] = useState("");
    const[completedTodos,setCompletedTodos] = useState([]);
    
    

    const handleAddTodo =()=>{
        let newTodoItem={
            name:newName,
            description:newDescription
        }

        let updatedTodoArr= [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setTodos(updatedTodoArr);
        localStorage.setItem('todolist',JSON.stringify (updatedTodoArr))
    };

    
        

    const handleDeleteTodo=(index)=>{
        let reducetodo = [...allTodos];
        reducetodo.splice(index);

        localStorage.setItem("todolist", JSON.stringify(reducetodo));
        setTodos(reducetodo)
    }

    const handleComplete = (index)=>{
        let now = now.Date();
        let dd = now.getDate();
        let mm = now.getMonth() +1;
        let yyyyy = now.getFullYear();
        let h= now.getHours();
        let m= now.getMinutes();
        let s= now.getSeconds();
        let completedOn = dd + "-" + mm  + "-" + yyyy + "at" + h + ":" +m+":"+s;

        let filteredItem ={
            ...allTodos[index],
            completedOn:completedOn
        }

        let updatedCompletedArr = [...completedTodos];
        updatedCompletedArr.push(filteredItem);
        setCompletedTodos(updatedCompletedArr);
        handleDeleteTodo(index);
    }

    useEffect(()=>{
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));
        if(savedTodo){
            setTodos(savedTodo);
        }
    },[])
    

   
    
    return (
        <div className='App'>
            <h1>My Todos</h1>

            <div className='todo-wrapper'>
            <div className='todo-input'>
            <div className='todo-input-item'>
                    <label>Name</label>
                    <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder='Todo Name' />
                </div>
                <div className='todo-input-item'>
                    <label>Description</label>
                    <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='Todo Description' />
                </div>
                <div className='todo-input-item'>
                    <button type='button' onClick={handleAddTodo} className='primarybtn'>Add Todo</button>
                </div>
            </div>
            
            <div className='btn-area'>
                <button className={`secondarybtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
                <button className={`secondarybtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
            </div>
            <div className='todo-list'>
                
            {isCompleteScreen===false&& allTodos.map((item,index)=>{
                    return(
                        <div className='todo-list-item' key={index}>
                            <div>
                                <h3>Name:{item.name}</h3>
                                <p>Description:{item.description}</p>
                            </div>
                                               
                            <div>
                                <button className='deletebtn' onClick={()=>handleDeleteTodo(index)}>Delete</button>
                                <button className='editbtn'>Edit</button>
                                <button className='compbtn' onClick={()=>handleComplete(index)}>Complete</button>
                            </div>
                        </div>  
                    )
                })} {isCompleteScreen===false&& allTodos.map((item,index)=>{
                    return(
                        <div className='todo-list-item' key={index}>
                            <div>
                                <h3>Name:{item.name}</h3>
                                <p>Description:{item.description}</p>
                            </div>
                                               
                            <div>
                                <button className='deletebtn' onClick={()=>handleDeleteTodo(index)}>Delete</button>
                                <button className='editbtn'>Edit</button>
                                <button className='compbtn' onClick={()=>handleComplete(index)}>Complete</button>
                            </div>
                        </div>  
                    )
                })}

{isCompleteScreen===true && completedTodos.map((item,index)=>{
                    return(
                        <div className='todo-list-item' key={index}>
                            <div>
                                <h3>Name:{item.name}</h3>
                                <p>Description:{item.description}</p>
                                <p><small>Completed on: {item.completedOn}</small></p>
                            </div>
                                               
                            <div>
                                <button className='deletebtn' onClick={()=>handleDeleteTodo(index)}>Delete</button>
                                <button className='editbtn'>Edit</button>
                                
                            </div>
                        </div>  
                    )
                })}
                
            </div>
            </div>
        </div>
    );
};

export default Todos;