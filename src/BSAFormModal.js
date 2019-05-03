import React, {Component} from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

export default class BSAFormModal extends Component {
    state = {modalOpen: false};

    handleOpen = () => this.setState({modalOpen: true});

    handleClose = () => this.setState({modalOpen: false});

    render() {
        return (
            <Modal
                trigger={<Button primary onClick={this.handleOpen}>Complain</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Header icon='browser' content='Make a complaint'/>
                <Modal.Content>
                    <h3>Do you want to make a complaint to a Broadcaster, or the Broadcasting Standards Authority?</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={this.handleClose}>
                        <Icon name='video'/> Broadcaster
                    </Button>
                    <Button secondary onClick={this.handleClose}>
                        <Icon name='building'/> Broadcasting Standards Authority
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
