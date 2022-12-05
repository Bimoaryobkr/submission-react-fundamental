import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotesDetail from '../components/NotesDetail';
import { getNote } from '../utils/api';

function DetailPage() {
    const params = useParams();
    const [notes, setNote] = useState(null);

    useEffect(() => {
        const getSingleNote = async () => {
            const { error, data } = await getNote(params.id);
            if (!error) {
                setNote(data);
            }
        };
        getSingleNote();
    }, [params]);


    if (notes !== null) {
        return (
            <NotesDetail
                title={notes.title}
                createdAt={notes.createdAt}
                body={notes.body}
            />
        );
    }
}

export default DetailPage;