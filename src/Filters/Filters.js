import React from 'react';
import TypeOptions from '../TypeOptions/TypeOptions';

class Filters extends React.Component {
    render() {
        return (
            <fieldset>
                <label>Print Types:</label>
                <TypeOptions typeSelect={this.props.typeSelect} type={this.props.filters.type}/>
                <input 
                    name="ebookFilter" 
                    id="ebookFilter" 
                    type="checkbox" 
                    checked={this.props.filters.ebook}
                    onChange={e => this.props.checkEbook(e.target.checked)}></input>
                <label>eBook</label>
            </fieldset> 
        )
    }
}

export default Filters;