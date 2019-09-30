import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import history from '../history';

class TestModal extends Component {
    
    componentDidMount() {
        history.push({
            search: '?mode=edit'
        })
    }

    componentWillUnmount() {
        history.push({
            search: null
        })
    }

    render() {
        return (
            <Modal isOpen={true} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </Modal>
        )
        
    }
}

export default TestModal;
