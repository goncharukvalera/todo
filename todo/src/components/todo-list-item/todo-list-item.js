import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    constructor(){
        super();
        this.state = {
            done: false,
            important: false
        };
    }
    onLabelClick = () => {
        // setState() работает асинхронно и на момент установки нового state текущий state не всегда имеет самую актуальную версию, 
        // поэтому чтобы избежать тяжело отлавливаемых ошибок нужно немного изменить вызов ф-и setState() с явным указанием state,
        // тогда React будет рендерить компонент только после реального обновления state
        this.setState((state) => { 
            return {done: !state.done}
        });
    };
    onMarkImportant = () => {
        this.setState(({important}) => { // можно сразу реструктурировать important из state
            return {important: !important}
        });
    };

    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone} = this.props, // деструктурирование props потому что ф-я render() не принимает параметры
              {done, important} = this.state;
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
