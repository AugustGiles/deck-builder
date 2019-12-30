const noteServiceModule = () => {
  const baseUrl = "http://localhost:3001";

  let addNewNote = async (note, deckId) => {
    let body = {
      timestamp: Date.now(),
      note,
      deckId
    };
    let res = await fetch(`${baseUrl}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    let data = await res.json();
    return data;
  };

  let editNote = async (note, id) => {
    let body = {
      timestamp: Date.now(),
      note
    };
    let res = await fetch(`${baseUrl}/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    let data = await res.json();
    return data;
  };

  let getAllNotes = async () => {
    let res = await fetch(`${baseUrl}/notes`);
    let data = await res.json();
    return data;
  };

  let getNotesByDeckId = async id => {
    let res = await fetch(`${baseUrl}/notes?deckId=${id}`);
    let data = await res.json();
    return data;
  };

  let getNoteById = async id => {
    let res = await fetch(`${baseUrl}/notes/${id}`);
    let data = await res.json();
    return data;
  };

  let deleteNoteById = async id => {
    let res = await fetch(`${baseUrl}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    let data = await res.json();
    return data;
  };

  return {
    addNewNote,
    editNote,
    getAllNotes,
    getNotesByDeckId,
    getNoteById,
    deleteNoteById
  };
};

export default noteServiceModule();
