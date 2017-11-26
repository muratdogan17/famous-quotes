import React, { Component } from 'react';
import FilterItem from './FilterItem';
const filters = require("../../data/filterNames.json");

class Filters extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.state = ({
            selectedFilterType: this.props.selectedFilterType,
            isHidden: this.props.isHidden ? "hidden-filters" : "visible-filters"
        });
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                isHidden: "hidden-filters"
            });
        }, 3000)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                isHidden: this.props.isHidden ? "hidden-filters" : "visible-filters"
            });
        }
    }

    handleFilterChange(filterType) {
        this.props.onFilterChange(filterType);
    }

    render() {
        return (
            <div className={`filters ${this.state.isHidden}`}>
                <div className="filter-list">
                    {
                        filters.filterNames.map((filter, index) => {
                            return (<FilterItem key={index} filterName={filter} onFilterChange={this.handleFilterChange} backgroundImageUrl={this.props.backgroundImageUrl} filterType={`filter-type-${index + 1}`} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Filters;