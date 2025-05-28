import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useHomeDesign = () => {
    const [showAddNote, setShowAddNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const navigate = useNavigate();

    const currentUser = localStorage.getItem('currentUser');

    useEffect(() => {
      if (currentUser) {
        const savedNotes = JSON.parse(localStorage.getItem(currentUser)) || [];
        setNotes(savedNotes);
      }
    }, [currentUser, showAddNote]);

    const handleNewNoteButton = () => {
      setShowAddNote(!showAddNote);
      setSelectedNote(null);
    }

    const handleLogoutButton = () => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem(null);
      navigate("/login");
    }
  
    const handleMenuClick = (e) => {
      const noteId = e.key;
      
      const note = notes.find(n => n.id === noteId);
      if (note) {
        const path = '/home/my-notes/' + noteId;
        navigate(path);
        setSelectedNote(note);
        setShowAddNote(false);
      }
    };

    const handleDeleteNoteButton = () => {
      if (!selectedNote || !currentUser) return;

      const updatedNotes = notes.filter(note => note.id !== selectedNote.id);
      localStorage.setItem(currentUser, JSON.stringify(updatedNotes));

      setNotes(updatedNotes);
      setSelectedNote(null);
    }

    const handleEditNoteButton = () => {
      
    }
   
  return {
    showAddNote,
    handleNewNoteButton,
    handleLogoutButton,
    notes,
    selectedNote,
    handleMenuClick,
    handleDeleteNoteButton,
    handleEditNoteButton
  }
}
