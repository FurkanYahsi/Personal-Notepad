import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useHomeDesign = () => {
    const navigate = useNavigate();

    const handleNewNoteButton = () => {
        
        navigate("/home/new-note");
    }
  
    <div>
      
    </div>
  

  return {
    handleNewNoteButton,
  }
}
