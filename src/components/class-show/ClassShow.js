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
            console.log(this.props)
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
                    <button onClick={() => console.log(this.props)}>Sign up for this Class!</button>
                </div>
                <div>
                    {this.state.edit ? <EditForm id={id} user={user} category={category} topic={topic} toggleEdit={this.toggleEdit} sendEdit={this.props.sendEdit} users={this.props.users} topics={this.props.topics} categories={this.props.categories}/> : null}
                </div>
            </div>
        )
    }
}
