import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewNote from '../new-note/NewNote';

export const useHomeDesign = () => {
    const [showAddNote, setShowAddNode] = useState(false);
    const navigate = useNavigate();

    const handleNewNoteButton = () => {
      setShowAddNode(!showAddNote);
    }

    const handleLogoutButton = () => {
      navigate("/login");
    }
  
    <div>
      
    </div>
  

  return {
    handleNewNoteButton,
    handleLogoutButton,
    showAddNote
  }
}
