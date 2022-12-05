import React from 'react';
import PropType from 'prop-types';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete }) {
    return (
        <div className='list'>
            <h2>Daftar Catatan</h2>
            {notes.length > 0 ? (
                <div className="note-list">
                    {
                        notes.map((note) => (
                            <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                        ))
                    }
                </div>
            ) : <div className="empty-message"><h3>Tidak ada list catatan</h3></div>}
        </div>
    );
}

NotesList.propType = {
    notes: PropType.arrayOf(PropType.object).isRequired,
    onDelete: PropType.func.isRequired
};

export default NotesList;