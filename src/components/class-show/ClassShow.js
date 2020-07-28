import React from 'react';
import InstructorCard from './InstructorCard.js'
import EditForm from './EditForm.js'
import ReactPlayer from "react-player"



export default class ClassShow extends React.Component {
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
            <div classname="container-show">
                <div classname="container-child">
                    <div>
                        <h1>{category.name}</h1>
                    </div>
                    <div >
                        <ReactPlayer url="https://www.youtube.com/watch?v=BMW5hr1ixKQ" />
                    </div>
                </div>
                <div className="container-child">
                    <div>
                        <h3>{topic.name}</h3>
                        <p>
                            {time}
                            {category.name.includes("Kids") ? "(45 min)" : "(60 min)"}
                        </p>
                        <p>
                            Learn Brazilian Jiu-Jitsu basics. During this class, we will cover proper forms and movements for guarding against and attacking your opponents. This class is for kids with Lv.1 White Belt.
                        </p>
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
            </div>
        )
    }
}
