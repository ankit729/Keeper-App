import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prev) => [note, ...prev]);
  }

  function deleteNote(id) {
    setNotes((prev) => {
      const ret = [...prev];
      ret.splice(id, 1);
      return ret;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.content}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
