import React from "react";
import PropType from 'prop-types';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                    <h2>Tambah Catatan</h2>
                    <input className="input_title" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="input_body" type="text" placeholder="Desc" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Tambah</button>
                </form>
        )
    }
}

NotesInput.propType = {
    addNote: PropType.func.isRequired
};

export default NotesInput;