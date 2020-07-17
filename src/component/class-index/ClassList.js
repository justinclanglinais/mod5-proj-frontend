import React, {Component} from 'react';
import ClassCard from '../ClassCard.js'

export default class ClassList extends Component {
    state = {
        sessions: []
    }

    fetchClasses = () => {
        fetch(`http://localhost:3000/sessions`)
        .then(r=>r.json())
        .then(d=>
            // console.log(d)
            this.setState({sessions : d})    
        )
    }

    componentDidMount = () => {
        this.fetchClasses()
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Showing (NUM) classes for (DATE) for (CATEGORY)</h2>
                </div>
                <div>
                    {this.state.sessions.map(session=>{
                        return <ClassCard thisSession={session}/>
                    })}
                </div>
            </div>
        )
    }
}