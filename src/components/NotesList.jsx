import React from 'react';
import NoteItem from './note-item/NoteItem';

const NotesList = ({ notes, handlerAction }) => {
  if (notes === null || notes.length == 0) {
    return <div className="notes-list__empty-message">Tidak ada catatan</div>;
  }
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} title={note.title} date={note.createdAt} body={note.body} archived={note.archived} handlerAction={handlerAction} />
      ))}
    </div>
  );
};

export default NotesList;
