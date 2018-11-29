import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    // On form submit, execute formSubmitHandler function with (e) passed as an argument.

    formSubmitHandler = (e) => {
        e.preventDefault();

        // Similarly, on search submit, execute searchSubmitHandler function in the parent <App>
        // with term passed as an argument.
        
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form  onSubmit={this.formSubmitHandler} className="ui form">
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