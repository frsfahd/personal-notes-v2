import React from 'react';

const Action = ({ handlerAction, archived, id }) => {
  const handlerDelete = (e) => {
    handlerAction(id, 'DELETE');
    e.preventDefault();
  };

  const handlerArchive = (e) => {
    handlerAction(id, 'ARCHIVE');
    e.preventDefault();
  };
  return (
    <div className="note-item__action">
      <button onClick={handlerDelete} className="note-item__delete-button">
        Delete
      </button>
      <button onClick={handlerArchive} className="note-item__archive-button">
        {archived ? 'Pimdahkan' : 'Arsipkan'}
      </button>
    </div>
  );
};

export default Action;
