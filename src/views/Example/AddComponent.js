import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    generateRandomId = () => {
        return 'abcJob' + Math.floor(Math.random() * 1000);
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Please enter job title and salary')
            return
        }
        console.log(
            'check data input', this.state
        )
        this.props.addNewJob({
            id: this.generateRandomId(),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render(){
        return(
            <form>
                    <label htmlFor="fname">Job Title:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br/><br/>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
        )
    }

}

export default AddComponent;