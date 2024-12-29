import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJob: JSON.parse(localStorage.getItem('arrJob')) || [
            {id: 'abcJob1', title: 'Developers', salary: '500'},
            {id: 'abcJob2', title: 'Testers', salary: '400'},
            {id: 'abcJob3', title: 'Project Managers', salary: '1000'}
        ]
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    generateRandomId = () => {
        return 'abcJob' + Math.floor(Math.random() * 1000);
    }

    addNewJob = (job) => {
        job.id = this.generateRandomId();
        const updatedArrJob = [...this.state.arrJob, job];
        this.setState({
            arrJob: updatedArrJob
        });
        localStorage.setItem('arrJob', JSON.stringify(updatedArrJob));
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJobs
        });
        localStorage.setItem('arrJob', JSON.stringify(currentJobs));
    }

    componentDidUpdate(preProps, preState) {
        console.log('>>> componentDidUpdate: ', 'pre state', preState, ' current state', this.state)
    }

    componentDidMount() {
        console.log('>>> componentDidMount')
    }

    render() {
        return (
            <>
                <AddComponent 
                    addNewJob={this.addNewJob}
                />
                <ChildComponent 
                    arrJob={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;