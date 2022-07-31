import React, { useState } from 'react';
import "./homeStyle.css"
const Home = () => {
    const [todos, setTodos] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        const todo = event.target.todo.value;
        const id = todos.length + 1
        const singleTodo = { id, todo }
        setTodos([...todos, singleTodo])
    }
    console.log(todos);
    return (
        <div >
            <h1 className='headline'>Add what you want <span className='todoText'>To Do</span></h1>
            <form onSubmit={handleSubmit}>
                <input className='inputField' type="text" placeholder='write note' name="todo" />
                <input className='addButton' type="submit" value="Add" />
            </form>
            <div className="todoSection">
              <div className='container'>
                {
                    todos.map(todo => {
                        return (
                            <div key={todo.id} className="singleTodo">
                                <p>
                                    {todo.todo}
                                </p>
                            </div>
                        )
                    })
                }
            </div>  
            </div>
        </div >
    );
};

export default Home;