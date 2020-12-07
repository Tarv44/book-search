import React from 'react';
import ResultItem from '../ResultItem/ResultItem'

import './ResultsList.css'

class ResultsList extends React.Component {
    render() {
        const resultItems = this.props.results.map(result => {
            return <ResultItem result={result.volumeInfo}/>
        })

        return (
            <ul>
                {resultItems}
            </ul>
        )
    }
}

export default ResultsList;