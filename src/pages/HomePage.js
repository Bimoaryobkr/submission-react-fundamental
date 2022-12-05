import React from "react";
import { useSearchParams, } from 'react-router-dom';
import NotesList from '../components/NotesList';
import NotesInput from '../components/NotesInput';
import NotesSearch from '../components/NotesSearch';
import PropType from 'prop-types';
import { getNotes, addNote, deleteNote } from '../utils/api';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
        const { data } = await getNotes();

        this.setState(() => {
          return {
            notes: data
          }
        })
      }

    async onAddNoteHandler(Notes) {
        await addNote(Notes);
        const { data } = await getNotes();
        this.setState(() => {
          return {
            notes: data,
          }
        });
      }

    async onDeleteHandler(id) {
        await deleteNote(id);

        const { data } = await getNotes();
        this.setState(() => {
          return {
            notes: data,
          }
        });
      }

    async onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter((notes) => {
            return notes.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });
        return (
            <div className="app_body">
                <NotesInput addNote={this.onAddNoteHandler} />
                <NotesSearch keyword={this.state.keyword} onsearch={this.onKeywordChangeHandler} />
                <NotesList notes={notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

HomePage.propType = {
    keywordChange: PropType.string.isRequired,
    defaultKeyword: PropType.string.isRequired
};

export default HomePageWrapper;