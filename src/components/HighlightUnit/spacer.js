import React, { Component } from 'react'

import './style.scss'

class Spacer extends Component {
    render() {
        return (
            <div className="highlightUnit col-xs-12 col-sm-6 col-md-4">
                <a href={this.props.link} target="_blank">
                </a>
                <div className="title bold">
                    {this.props.title}
                </div>
                <div className="time-period">
                    {this.props.timeperiod}
                </div>
                <div className="subtitle">
                    {this.props.subtitle}
                </div>
            </div>
        )
    }
}

export default Spacer
