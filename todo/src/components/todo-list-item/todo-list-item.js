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
        const {label} = this.props, // деструктурирование props потому что ф-я render() не принимает параметры
              {done, important} = this.state;
        console.log('done:', done, '\n', 'important:', important);
        let classNames = 'todo-list-item';
        classNames += done ? ' done' : '';
        classNames += important ? ' important' : '';

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={this.onLabelClick}>
                {label}
              </span>
        
              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation"/>
              </button>
        
              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
              </button>
            </span>
        );
    }
}
