import React from 'react';
import Filters from '../Filters/Filters'

class SearchForm extends React.Component {
    

    render() {
        return (
            <form onSubmit={e => this.props.onSearchSubmit(e)}>
                <fieldset>
                    <label>Search:</label>
                    <input 
                        onChange={e => this.props.onSearchUpdate(e.target.value)}
                        value={this.props.keyword} 
                        type="text" 
                        name="searchWord" 
                        id="searchWord"></input>
                    <button
                        type="submit">
                    Search
                    </button>
                </fieldset>
                <Filters 
                    filters={this.props.filters}
                    checkEbook={this.props.checkEbook}
                    typeSelect={this.props.typeSelect}/>
            </form>
        )
    }
}

export default SearchForm;