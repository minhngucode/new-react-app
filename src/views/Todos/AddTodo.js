import React from "react";


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnchangTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleClickAdd = () => {
        if (!this.state.title) {
            alert('Please enter title')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let title = this.state.title
        return (
            <div className="add-todo">
                <input 
                    type='text' value={title}
                    onChange={ (e) => this.handleOnchangTitle(e) }
                />
                <button 
                    type="button" className="add"
                    onClick = { () => this.handleClickAdd() }
                    >Add
                </button>
            </div>
        )
    }

}

export default AddTodo