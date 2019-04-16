import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    constructor(){
        super();
        this.state = {
            done: false
        };
    }
    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
        this.setState({ // правило после инициализации state его больше нельзя изменять напрямую, только через ф-ю setState(), которая говорит ф-ии render() что компонент изменился и его надо перерендерить
            done: !this.state.done
        });
    };

    render() {
        const {label, important = false} = this.props, // деструктурирование props потому что ф-я render() не принимает параметры
              {done} = this.state;
        console.log('done:', done);
        let classNames = 'todo-list-item';
        classNames += done ? ' done' : '';
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  // onClick={()=>console.log(`Done: ${label}`)}
                  onClick={this.onLabelClick}
                  style={style}>
                {label}
              </span>
        
              <button type="button"
                      className="btn btn-outline-success btn-sm float-right">
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

// Если нет явных причин (компонету не нужно хранить своё состояние (stateless компонент)) использовать компоненты классы - используем компоненты ф-ции

// const TodoListItemFunc = ({label, important = false}) => {
//
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     };
//
//     return (
//         <span className="todo-list-item">
//       <span
//           className="todo-list-item-label"
//           style={style}>
//         {label}
//       </span>
//
//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation"/>
//       </button>
//
//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o"/>
//       </button>
//     </span>
//     );
// };
//
// export default TodoListItem;
