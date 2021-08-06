import React from 'react'
import './BasicList.css'

function BasicList() {

    const todos = [
        {body: 'First Todo Object', done: true, id: 1},
        {body: 'Second Todo object', done: false, id: 2},
        {body: 'Third ToDo object', done: false, id: 3}
    ];

    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return(
                        <div className="list-item">
                            <input type="checkbox" id={todo.id} />
                            <label for={todo.id}>{todo.body}</label>
                        </div>
                    );
                })}
            </ul>
        </div>
    )
}

export default BasicList
