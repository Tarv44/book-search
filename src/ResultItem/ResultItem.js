import React from 'react';
import './ResultItem.css'

class ResultItem extends React.Component {
    render() {
        return (
            <li>
                <h3>{this.props.result.title}</h3>
                <h5>{this.props.result.authors[0]}</h5>
                <img src={this.props.result.imageLinks.thumbnail}/>
                <p>{this.props.result.description}</p>
            </li>
        )
    }
}

export default ResultItem;