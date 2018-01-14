
import React from 'react';

class Template extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Template;