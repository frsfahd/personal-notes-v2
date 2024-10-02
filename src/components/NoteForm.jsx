import React from 'react';
import { useState } from 'react';

const NoteForm = ({ handlerSave }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const charLimit = 50;

  const handlerTitle = (e) => {
    setTitle(e.target.value.slice(0, charLimit));
  };
  const handlerBody = (e) => {
    setBody(e.target.value);
  };
  const handlerSubmit = (e) => {
    const now = new Date();
    handlerSave({
      id: now.getTime(),
      title: title,
      body: body,
      createdAt: now.toISOString(),
      archived: false,
    });
    //reset form
    setTitle('');
    setBody('');
    e.preventDefault();
  };
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <div className="note-input__title__char-limit">sisa karakter: {charLimit - title.length}</div>
      <form onSubmit={handlerSubmit}>
        <input onChange={handlerTitle} value={title} className="note-input__title" type="text" placeholder="ini adalah judul..." />
        <textarea
          onChange={handlerBody}
          value={body}
          className="note-input__body"
          name="catatan"
          id="catatan"
          placeholder="tulis catatanmu disini..."
          rows={10}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default NoteForm;
