import React from 'react';
import PropType from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

function DeleteButton({ id, onDelete }) {
    return <button className='item_delete' onClick={() => onDelete(id)}><AiFillDelete /></button>
}

DeleteButton.propType = {
    id: PropType.string.isRequired,
    onDelete: PropType.func.isRequired
};

export default DeleteButton;