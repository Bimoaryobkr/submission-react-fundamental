import React from 'react';
import PropType from 'prop-types';
import NotesItemContent from './NotesItemContent';
import DeleteButton from './DeleteButton';

function NotesItem({ title, createdAt, body, id, onDelete }) {
    return (
        <div className="note-item">
            <NotesItemContent id={id} title={title} body={body} createdAt={createdAt} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

NotesItem.propType = {
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
    onDelete: PropType.func.isRequired
};

export default NotesItem;