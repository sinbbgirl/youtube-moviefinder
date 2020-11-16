import React, { Component } from 'react';
import * as Icons from 'react-bootstrap-icons'

const searchtext = 'Input search words'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: searchtext,
        }
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        if(e.target.value.length === 0) {
            this.setState({
                term: searchtext
            })
        } else {
            this.setState({
                term: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.term === searchtext) {
            alert('검색어를 입력하세요')
            return;
        }
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <form className='card card-sm' onSubmit={this.handleSubmit}>
                            <div className='card-body row align-items-center'>
                                <div className='col-auto'>
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className='col'>
                                    <input 
                                    id='searchBar' 
                                    type='search' 
                                    name='youtube-search' 
                                    placeholder={this.state.term} 
                                    className='form-control border-light'
                                    onChange={this.handleChange}/>
                                </div>
                                <div className='col-auto'>
                                    <button type='submit' className='btn btn-danger'>
                                        Search    
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;