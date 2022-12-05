import React from "react";
import PropType from 'prop-types';
import {showFormattedDate} from "../utils/date";

function NotesDetail({ title, body, createdAt }) {
    return (
        <div className="detail-page">
            <h3 className="detail-page_title">{title}</h3>
            <p className="detail-page_body">{body}</p>
            <p className="detail-page_createdAt ">{showFormattedDate(createdAt)}</p>
        </div>
    )
}

NotesDetail.propType = {
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    createdAt: PropType.string.isRequired
};

export default NotesDetail;