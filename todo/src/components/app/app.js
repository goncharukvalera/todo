import React, {Component} from 'react';

import AppHeader from './../app-header';
import SearchPanel from './../search-panel/search-panel';
import TodoList from './../todo-list/todo-list';
import ItemStatusFilter from './../item-status-filter/item-status-filter';
import ItemAddForm from './../item-add-form/item-add-form';
import './app.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            todoData: [
                this.createTodoItem('Drink coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
            ],
            term: '',
            filter: 'all' // all, active, done
        };
    }

    id = 1;

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.id++
        }
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
        this.setState(({todoData}) => {
            return {
                todoData: [
                    ...todoData,
                    this.createTodoItem(text)
                ]
            }
        });
    };
    toggleProp = (arr, id, propName) => {
        const index = arr.findIndex((el) => el.id === id),
            oldItem = arr[index],
            newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
    };
    toggleImportant = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProp(todoData, id, 'important')
            }
        });
    };
    toggleDone = id => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProp(todoData, id, 'done')
            }
        });
    };

    search(items, term) {
        if (!term.length) return items;
        // return items.filter(item => item.label.indexOf(term) > -1);
        return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1); // чтобы поиск был регистронезависимый
    }

    searchChange = term => {
        this.setState({term});
    };
    
    filter(items, filter) {
        if(filter === 'done') return items.filter(item => item.done);
        else if(filter === 'active') return items.filter(item => !item.done);
        return items;
    }

    render() {
        const {todoData, term, filter} = this.state,
            visibleItems = this.filter(this.search(todoData, term), filter),
            doneCount = todoData.filter(el => el.done).length,
            todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.searchChange}/>
                    <ItemStatusFilter filter={filter}/>
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={(id) => {
                        this.deleteItem(id)
                    }}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};