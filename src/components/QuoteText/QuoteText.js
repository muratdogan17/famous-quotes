import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuoteText extends Component {

    static PropTypes = {
        message: PropTypes.string,
        author: PropTypes.string
    }

    static defaultProps = {
        message: "Mesaj Buraya Gelecek",
        author: "Yazar Buraya Gelecek"
    }

    render(){
        return (
            <div className="quote-text-wrapper">
                <div>
                    <p>{this.props.message}</p>
                    <small>{this.props.author}</small>
                </div>
            </div>
        )
    }
}

export default QuoteText;