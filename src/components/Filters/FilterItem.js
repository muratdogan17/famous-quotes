import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterItem extends Component {
    constructor(){
        super();
        this.state = ({
            filterCount : 5
        })
        this.handleClick = this.handleClick.bind(this);
    }
    static propTypes = {
        filterType : PropTypes.string.isRequired
    }
    handleClick(e){
        e.stopPropagation();
        let selectedFilterType = e.target.getAttribute("data-filter-type");
        this.props.onFilterChange(selectedFilterType);
    }

    render(){
        return (
            <div className="filter-item-wrapper" onClick={this.handleClick}>
                <div className={`filter-bg filter-type ${this.props.filterType}`} data-filter-type={this.props.filterType} style={{backgroundImage:`url(${this.props.backgroundImageUrl})`}}></div>
                <div className="filter-name">{this.props.filterName}</div>
            </div>
        )
    }
}

export default FilterItem;