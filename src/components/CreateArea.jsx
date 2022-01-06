import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function addNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <hr />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
