import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    // constructor(){
    //     super();
    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`);
    //     }
    // }
    
    onLabelClick() {
        console.log(`Done: ${this.props.label}`);
    }
    render() {
        const {label, important = false} = this.props; // деструктурирование props потому что ф-я render() не принимает параметры
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
              <span
                  className="todo-list-item-label"
                  // onClick={()=>console.log(`Done: ${label}`)}
                  onClick={this.onLabelClick.bind(this)} // передаём не вызов ф-ции, а саму ф-цию. Bind нужен для того чтобы сохранить правильный контекст (т.к. это уже не стрелочная ф-я и контекст теряется)
                  // но bind() не очень хороший способ привязать ф-ю к контексту, потому что каждый раз при клике будет создаваться новая ф-я (так работает bind())
                  // гораздо лучше создать ф-ю в конструкторе класса и через стрелочную ф-ю привязать к ней контекст данного экземпляра класса а не прототипа. В этом случае не онужно делать bind. В дальнейшем будем использовать такой способ.
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
