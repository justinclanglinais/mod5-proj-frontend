import React from 'react';
import InstructorCard from './InstructorCard.js'
import EditForm from './EditForm.js'
import ReactPlayer from "react-player"
import {TimeConverter} from '../../services/TimeConverter.js'


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
    handleSignUpSession = (id) => {
        this.props.signUpSession(id)
    }
    handleDelete = (id) => {
        this.props.deleteSession(id)
        this.props.history.push('/classes')
    }
    render () {
        const { id, time , user , category , topic } = this.props.sessions.find(s => s.id === this.props.match.params.id)
        return (
            <div classname="container-show">
                <div classname="container-child">
                    <div>
                        <h1>{topic.name}</h1>
                    </div>
                    <div >
                        <ReactPlayer url={topic.vid_url} />
                    </div>
                </div>
                <div className="container-child">
                    <div>
                        <h3>{category.name}</h3>
                        <p>
                            {time ? TimeConverter.getDay(time) : null} - {time ? TimeConverter.getTime(time) : null}
                            {category.name.includes("Kids") ? "(45 min)" : "(60 min)"}
                        </p>
                        <p>
                            Learn Brazilian Jiu-Jitsu basics. During this class, we will cover proper forms and movements for guarding against and attacking your opponents. This class is for 
                        </p>
                    </div>
                    <div>
                        <InstructorCard instructor={user}/>
                    </div>
                    <div>
                        <button className="card-button" onClick={() => this.setState({edit : !this.state.edit})}>
                            Edit Class
                        </button>
                        <button className="card-button" onClick={() => this.handleDelete(parseInt(id))}>
                            Delete Class
                        </button>
                        <button className="card-button" onClick={() => this.handleSignUpSession(id)}>
                            Sign up for this Class!
                        </button>
                    </div>
                    <div>
                        {this.state.edit ? 
                            <EditForm 
                                id={id} 
                                user={user} 
                                category={category} 
                                topic={topic} 
                                toggleEdit={this.toggleEdit} 
                                sendEdit={this.props.sendEdit} 
                                users={this.props.users} 
                                topics={this.props.topics} 
                                categories={this.props.categories}
                            /> : 
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
