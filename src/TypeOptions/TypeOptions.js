import React from 'react';

class TypeOptions extends React.Component {
    render() {
        return (
            <select onChange={e => this.props.typeSelect(e.target.value)} id="categories" value={this.props.type}>
                <option>All</option>
                <option>Books</option>
                <option>Magazines</option>
            </select>
        )
    }
}

export default TypeOptions;