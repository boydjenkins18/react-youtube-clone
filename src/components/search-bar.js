import React from 'react';

export default class SearchBar extends React.Component{
  render(){
    return(
        <form onSubmit={this.props.onUpdateSearch} >
            <input
            className='search-bar'
            type="text"
            placeholder="Search"/>
            <button className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    )
  }
}
