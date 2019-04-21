import React, {Component} from 'react';

import AppHeader from './../app-header';
import SearchPanel from './../search-panel/search-panel';
import TodoList from './../todo-list/todo-list';
import ItemStatusFilter from './../item-status-filter/item-status-filter';
import ItemAddForm from './../item-add-form/item-add-form';
import './app.css';

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            todoData: [
                {label: 'Drink Coffee', important: false, id: 1},
                {label: 'Make Awesome App', important: true, id: 2},
                {label: 'Have a lunch', important: false, id: 3}
            ]
        };
    }
    deleteItem = (id) => {
        this.setState(({todoData}) => { // принимаем как аргумент state и сразу деструктурируем
            // получаем индекс элемента который удаляем
            const index = todoData.findIndex((el) => el.id === id);
            // можно удалить нужный нам элемент из массива методом splice() 
            // todoData.splice(index, 1)
            // или просто с помощью delete
            // delete todoData[index]
            // но так мы нарушаем один из основных принципов React - мы меняем state напрямую, так делать нельзя! 
            // Поэтому передадим новый массив состоящий из двух частей (до текущего и после текущего), а потом объединим их
            const newState = [
                ...todoData.slice(0, index), // с помощью spread оператора сразу формируем новый массив из частей state
                ...todoData.slice(index + 1)
            ];
            return {todoData: newState}
        });
    };
    addItem = (text) => {
        // 1 - сгенерировать уникальный id
        // 2 - добавить элемент в массив
        const d = new Date,
            newItem = {
                label: text,
                important: false,
                id: d.getTime()
            };
        this.setState(({todoData}) => {
            return  {
                todoData: [
                    ...todoData,
                    newItem
                ]
            }
        });
    };

    render() {
        return (
        <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
        
          <TodoList 
              todos={this.state.todoData}
              onDeleted={ (id) => {this.deleteItem(id)}}
          />
            <ItemAddForm onItemAdded={this.addItem}/>
        </div>
        );
    }
};