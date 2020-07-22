import React from 'react';
import InstructorCard from './InstructorCard.js'
import Topic from './Topic.js'
import EditForm from './EditForm.js'

export default class ClassShow extends React.Component {
// const ClassShow = ({match,sessions}) => {
    state = {
        fields : {},
        edit : false
    }
    toggleEdit = () => {
        this.setState({
            edit : !this.state.edit
        })
    }
    render () {
        const { id, time , user , category , topic } = this.props.sessions[this.props.match.params.id - 1]
        return (
            <div>
                <div>
                    <h1>Class Show</h1>
                    <h2>{time} - {category.name}</h2>
                    <h1>{id}</h1>
                </div>
                <div>
                    <Topic topic={topic}/>
                </div>
                <div>
                    <InstructorCard instructor={user}/>
                </div>
                <div>
                    <button onClick={() => this.setState({edit : !this.state.edit})}>Edit Class</button>
                </div>
                <div>
                    {this.state.edit ? <EditForm toggleEdit={this.toggleEdit}/> : null}
                </div>
            </div>
        )
    }
}
