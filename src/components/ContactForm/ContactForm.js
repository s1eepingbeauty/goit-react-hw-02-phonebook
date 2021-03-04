import { Component } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
    name: '',
    number: '',
}

class ContactForm extends Component {
    state = INITIAL_STATE;

    handleChangeForm = ({target}) => {
        const { name, value } = target;
        this.setState({[name]: value})
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const { onAdd } = this.props;

        const isValidatedForm = this.validateForm();

        if (!isValidatedForm) return;
        onAdd({ id: uuid(), name, number });
        this.resetForm();
    }

    validateForm = () => {
        const { name, number } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !number) {
            alert('Some field is empty');
            return false;
        }
        return onCheckUnique(name);
    }

    resetForm = () => this.setState(INITIAL_STATE);

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm} />
                <input type="tel" name="number" placeholder="Enter phone number" value={number} onChange={this.handleChangeForm} />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;