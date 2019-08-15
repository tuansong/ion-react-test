import React, {Component} from 'react';

import './Root.css'

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>I-ON Communications Code Test</h1>
                    <p>This challenge contains 3 tests. Complete the tests and share us your GIT repository.</p>
                    <h4>Test Pages Links</h4>
                    <ul className="test-list">
                        <li><a>Test - 1</a></li>
                        <li><a>Test - 2</a></li>
                        <li><a>Test - 3</a></li>
                        <li><a>Test - 4</a></li>
                    </ul>
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}