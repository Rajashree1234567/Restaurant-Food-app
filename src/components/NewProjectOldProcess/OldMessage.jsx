import {Component} from "react";
class OldMessage extends Component {
    render(){
        return(
            <div>
                <h1>Hi {this.props.message}</h1>
            </div>
        )
    }
}

export default OldMessage;