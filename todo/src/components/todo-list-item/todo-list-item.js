import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props; // деструктурирование props потому что ф-я render() не принимает параметры
        console.log('done:', done, '\n', 'important:', important);
        let classNames = 'todo-list-item';
        classNames += done ? ' done' : '';
        classNames += important ? ' important' : '';

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={onToggleDone}>
                {label}
              </span>
        
              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/>
              </button>
              {/* Для того чтобы удалить компонент нам нужно его удалить из data, потому что просто так компонент не может удалить сам себя
              поэтому нам нужно пробросить событие удаления с кнопки внутри компонента до уровня App. 
              Сделать это можно через кастомные события (обычные функции, которые мы будем вызывать по цепочке)
              Пробрасывать события мы будем через props*/}
              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={onDeleted}> 
                <i className="fa fa-trash-o"/>
              </button>
            </span>
        );
    }
}
