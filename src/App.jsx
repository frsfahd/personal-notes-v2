import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

import { getInitialData } from './../utils/index';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [notesActive, setNotesActive] = useState([]);
  const [notesArchived, setNotesArchived] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // console.log(notes);
    const activeNote = notes.filter((note) => !note.archived);
    const archivedNote = notes.filter((note) => note.archived);

    setNotesActive(activeNote);
    setNotesArchived(archivedNote);
    return () => {};
  }, [notes, isSearching]);

  const handlerSave = (note) => {
    setNotes([note, ...notes]);
  };
  const handlerAction = (id, action) => {
    switch (action) {
      case 'DELETE':
        setNotes(notes.filter((note) => note.id !== id));
        break;
      case 'ARCHIVE':
        const modifiedNote = notes.find((note) => note.id == id);
        modifiedNote.archived = !modifiedNote.archived;
        // reassign notes
        setNotes([...notes.filter((note) => note.id != id), modifiedNote]);
    }
  };
  const handlerSearchAction = (query) => {
    if (query.length !== 0) {
      const pattern = new RegExp(query, 'i');
      setNotesActive(notes.filter((note) => pattern.test(note.title) && !note.archived));
      setNotesArchived(notes.filter((note) => pattern.test(note.title) && note.archived));
      return;
    }
    setIsSearching(!isSearching);
  };

  return (
    <>
      <Header handlerSearchAction={handlerSearchAction} />
      <div className="note-app__body">
        <NoteForm handlerSave={handlerSave} />
        <h2>Catatan Aktif</h2>
        <NotesList notes={notesActive} handlerAction={handlerAction} />
        <h2>Arsip</h2>
        <NotesList notes={notesArchived} handlerAction={handlerAction} />
      </div>
    </>
  );
};

export default App;
