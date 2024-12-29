import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
// import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        ListTodo: [
            { id: 1, title: 'Doing Homework' },
            { id: 2, title: 'Playing Game' },
            { id: 3, title: 'Watching Movie' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodo: [...this.state.ListTodo, todo]
        })
        // toast.success("Wow so easy!")
    }

    handleDelete = (todo) => {
        console.log('check todo', todo)
        let currentTodo = this.state.ListTodo
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            ListTodo: currentTodo
        })
    }

    handleEdit = (todo) => {
        let { editTodo, ListTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let ListTodoCopy = [...ListTodo]
            let objIndex = ListTodoCopy.findIndex((item => item.id === todo.id))
            ListTodoCopy[objIndex].title = editTodo.title
            this.setState({
                ListTodo: ListTodoCopy,
                editTodo: {}
            })
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { ListTodo, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('check empty', isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {
                        ListTodo && ListTodo.length > 0 && ListTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEdit(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button
                                        className="edit"
                                        onClick={() => this.handleEdit(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button
                                        className="delete"
                                        onClick={() => this.handleDelete(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default ListTodo