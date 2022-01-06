import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(!isExpanded);
  }

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
    setIsExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={expand}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        {isExpanded && (
          <div>
            <hr />
            <textarea
              onChange={handleChange}
              name="content"
              placeholder="Take a note..."
              value={note.content}
              rows="3"
            />
          </div>
        )}
        <Zoom in={isExpanded} timeout={{ enter: 2000, exit: 1000 }}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
