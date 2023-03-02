import { useState } from 'react';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleAddNote = () => {
    if (currentNote) {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
      localStorage.setItem('currentNote', notes);
    }
  };

  const handleDeleteNote = (noteIndex) => {
    const newNotes = [...notes];
    newNotes.splice(noteIndex, 1);
    setNotes(newNotes);
  };

  return (
    <div className="main">
      <h1 className="title">notes app🛸</h1>
      <input
        type="text"
        placeholder="Add a note"
        className="notesinput"
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
      />
      <button className='button-50' onClick={handleAddNote}>Add</button>
      <ul>
      <div className="notes">

        {notes.map((note, index) => (
          <li key={index} className="note">
            {note}
            <button className='button-50' onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
        
        </div>

      </ul>
    </div>
  );
}
