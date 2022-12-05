import React from "react";
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import {showFormattedDate} from "../utils/date";

function NotesItemContent({ id, title, body, createdAt }) {
    return (
        <div className="item_content">
            <h3 className="item_title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <p className="item_body">{body}</p>
            <p className="item_date">{showFormattedDate(createdAt)}</p>
        </div>
    )
}

NotesItemContent.propType = {
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
};

export default NotesItemContent;