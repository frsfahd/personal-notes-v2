import React from 'react';
import Content from './Content';
import Action from './Action';

const NoteItem = ({ id, title, date, body, archived, handlerAction }) => {
  return (
    <div className="note-item">
      <Content title={title} date={date} body={body} />
      <Action handlerAction={handlerAction} archived={archived} id={id} />
    </div>
  );
};

export default NoteItem;
