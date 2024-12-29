import React from 'react';
import './Demo.scss';

// class component

class ChildComponent extends React.Component {
    handleOnClick = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    state = {
        flag: false
    }
    handleOnClickDelete = (job) => {
        console.log('>>> handleOnClickDelete', job)
        this.props.deleteJob(job)
    }
    render() {
        let { arrJob } = this.props
        let flag = this.state.flag
        return (
            <>
                {!flag ? (
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleOnClick()}>Show Jobs List
                        </button>
                    </div>
                ) : (
                    <>
                        <div className='job-list'>
                            {arrJob && arrJob.length > 0 ? (
                                arrJob.map((item, index) => (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}$ <button onClick={() => this.handleOnClickDelete(item)}>x</button>
                                    </div>
                                ))
                            ) : (
                                <div>No jobs available</div>
                            )}
                        </div>
                        <div>
                            <button onClick={() => this.handleOnClick()}>Hide Jobs List</button>
                        </div>
                    </>
                )}
            </>
        )
    }
}

export default ChildComponent;