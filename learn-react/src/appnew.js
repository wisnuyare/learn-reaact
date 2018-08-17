import React, { Component } from 'react';

class NewApp extends Component{
        constructor(props) {
            super(props);
            this.handleCheck = this.handleCheck.bind(this);
         }
        handleCheck(e){
            this.props.onCheck(e.target.checked)
        }
        render(){
            const { visitors } = this.props;
            const visitorsList = visitors.map((visitor, index) =>{
                return (
                    <div className ="newApp" key={ index }>
                    <br/>
                        <div>Name : { visitor.name }</div>
                        <div>Age : { visitor.age }</div>
                        <div>Job : { visitor.job }</div>
                        <div><input type = "checkbox" checked = { this.props.checkList } onChange = { this.handleCheck }/> Check This</div>
                        <br/>
                    </div>
                )
            })

        return(
            <div className="visitor-list">
                { visitorsList }
            </div>
        )
    }
}
export default NewApp;