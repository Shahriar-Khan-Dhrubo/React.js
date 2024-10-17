import React, {Component} from 'react';

class Card2 extends Component{
    render(){
        const {heading,desc} = this.props;
        return(
            <div>
                <h3>{heading}</h3>
                <p>{desc}</p>
            </div>
        )
    }
}
export default Card2;

