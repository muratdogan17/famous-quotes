import React, { Component } from 'react';

class Background extends Component {
    render(){
        return (
            <main className={`App-background filter-type`} data-filter-type={this.props.selectedFilterType} style={{backgroundImage:`url(${this.props.backgroundImageUrl})`}}></main>
        )
    }
}

export default Background;