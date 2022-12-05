import React from "react";
import PropType from 'prop-types';

function NotesSearch ({ keyword, onsearch }) {
    return (
    <div className="note-input">
        <h2>Cari Catatan</h2>
        <input className="item_search" type='search' placeholder="Cari Judul Catatan.." value={keyword} onChange={(event) => onsearch(event.target.value)}></input>
    </div>
    )
}

NotesSearch.propType = {
    keyword: PropType.string.isRequired,
    onseacrh: PropType.func.isRequired
};

export default NotesSearch;