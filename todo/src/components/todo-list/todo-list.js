import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const items = todos.map((item) => {
        const {id, ...itemProps} = item; /*Деструктуризация объекта со спред оператором, когда из свойств объекта убирается то которое мы занесли в отдельную переменную*/
        return ( 
            <li key={id} className="list-group-item">{/*Использовать индекс элемента в массиве плохая практика*/}
                {/*<TodoListItem label={item.label} important={item.important}/>*/}
                <TodoListItem 
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    );
}
export default TodoList;