import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    

    render() {
        console.log(this.state.term);
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            className="prompt" 
                            type="text" 
                            placeholder="Search images..." 
                            onChange={e => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;