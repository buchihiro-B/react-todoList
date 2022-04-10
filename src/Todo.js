import './Todo.css'
import TodoItem from './TodoItem.js'
import Input from './Input.js'
import React, { useState } from 'react';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [items, setItems] = useState([
        {key: getKey(), text: 'Learn JavaScript', done: false},
        {key: getKey(), text: 'Learn React', done: false},
        {key: getKey(), text: 'Get some good sleep', done: false},
    ]);

    const handleCheck = checked => {
        const newItems =items.map(item => {
            if(item.key === checked.key) {
                item.done = !item.done;
            }
            return item;
        });
        setItems(newItems);
    }

    const handleAdd = text => {
        setItems([...items, {key: getKey(), text, done: false}]);
    }

    return (
        <div className="panel">
            <div className="panel-heading">
                ⚛️ React ToDo
            </div>
            <Input onAdd={handleAdd} />
            {items.map(item => (
                <TodoItem 
                    key={item.key} 
                    item={item}
                    onCheck={handleCheck}
                />
            ))}
            <div className="panel-block">
                {items.length} items
            </div>
        </div>
    );
} 

export default Todo;
