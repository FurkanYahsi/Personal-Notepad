import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NewNote from '../new-note/NewNote';

export const useHomeDesign = () => {
    const [showAddNote, setShowAddNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const navigate = useNavigate();

    const currentUser = localStorage.getItem('currentUser');

    useEffect(() => {
      if (currentUser) {
        const savedNotes = JSON.parse(localStorage.getItem(`notes_${currentUser}`)) || [];
        setNotes(savedNotes);
      }
    }, [currentUser, showAddNote]);

    const handleNewNoteButton = () => {
      setShowAddNote(!showAddNote);
      setSelectedNote(null);
    }

    const handleLogoutButton = () => {
      navigate("/login");
    }
  
    const handleMenuClick = (e) => {
      const noteId = e.key;
      const note = notes.find(n => n.id === noteId);
      if (note) {
        setSelectedNote(note);
        setShowAddNote(false);
      }
    };
   
  return {
    showAddNote,
    handleNewNoteButton,
    handleLogoutButton,
    notes,
    selectedNote,
    handleMenuClick,
  }
}
