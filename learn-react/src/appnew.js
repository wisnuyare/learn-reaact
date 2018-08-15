import React from 'react';

const NewApp = ({visitors}) => {
        const visitorsList = visitors.map(visitor => {
            return (
                <div className ="newApp" key={ visitor.name }>
                    <div>Name : { visitor.name }</div>
                    <div>Age : { visitor.age }</div>
                    <div>Job : { visitor.job }</div>
                </div>
            )
        })

        return(
            <div className="visitor-list">
                { visitorsList }
            </div>
        )
}

export default NewApp;