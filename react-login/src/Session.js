import React from 'react';
import './Session.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './DragDrop';

function Session() {
  const session = () => {
    window.location.href = '/session';
  };
  return (
    <div className="createSession">
      <h3>Create your own session</h3>
      <div className="createSession1"></div>
      <p>Session One</p>

      <button className="button-next" onClick={session}>
        {' '}
        Confirm{' '}
      </button>
    </div>
  );
}

export default Session;

/* <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider> */
