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
        console.log(`Done: ${this.props.label}`);
        this.setState({ // правило после инициализации state его больше нельзя изменять напрямую, только через ф-ю setState(), которая говорит ф-ии render() что компонент изменился и его надо перерендерить
            done: !this.state.done
        });
    };
    onMarkImportant = () => {
        this.setState({
            important: !this.state.important // не обязательно перечислять весь новый state, React подставит только отличия, это очень удобная особенность, котороая позволяет писать более чистый код
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
