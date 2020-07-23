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
            const idx = this.props.match.params.id - 1
            const { id, time , user , category , topic } = this.props.sessions[idx]
            const session = this.props.sessions[idx]
            return (
            <div>
                <div>
                    <h1>Class Show</h1>
                    <h2>{id}</h2>
                    <h2>{time} - {category.name}</h2>
                    {/* <h1>{id}</h1> */}
                </div>
                <div>
                    <Topic topic={topic}/>
                </div>
                <div>
                    <InstructorCard instructor={user}/>
                </div>
                <div>
                    <button onClick={() => this.setState({edit : !this.state.edit})}>Edit Class</button>
                    <button>Sign up for this Class!</button>
                </div>
                <div>
                    {this.state.edit ? <EditForm id={id} toggleEdit={this.toggleEdit} sendEdit={this.props.sendEdit} /> : null}
                </div>
            </div>
        )
    }
}
