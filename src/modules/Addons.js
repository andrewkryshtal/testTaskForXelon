import React, { Component } from 'react';
import { Button } from 'reactstrap';
import TestModal from './TestModal';
import history from '../history';

class Addons extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isModalOpen: false
        };
      }

    componentDidMount() {
        if (history.location.search === '?mode=edit') {
            this.setState({
                isModalOpen: true
            });
        }
    }

    toggle() {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    render() {
        return (
            <div>
                <h2>Addons Component</h2>
                <Button onClick={() => this.toggle()}>Open modal</Button>
                {this.state.isModalOpen ? 
                    <TestModal
                        toggle={this.toggle}
                    /> :
                    null
                }
                
            </div>
        )
        
    }
}

export default Addons;
