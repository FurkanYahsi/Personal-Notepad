import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BookOutlined} from '@ant-design/icons';
import { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';


//Add functionality to buttons.
export const useHomeDesign = () => {
    const [showAddNote, setShowAddNote] = useState(false);
    const [defaultHeader, setDefaultHeader] = useState('');
    const [defaultBody, setDefaultBody] = useState('');
    const [defaultId, setDefaultId] = useState(null);
    const [isEditNote, setIsEditNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const navigate = useNavigate();

    const currentUser = localStorage.getItem('currentUser');
    const { state, dispatch } = useContext(NoteContext);
    const [items, setItems] = useState();
    useEffect(()=> {
          setNotes(state.notes.filter(note => note.userId === currentUser))

    }, [])

 
    useEffect(() => {
      if (state.notes && currentUser) {
        setNotes(state.notes.filter(note => note.userId === currentUser));
      }
    }, [state.notes, currentUser]);

    useEffect(() => {
      if (!notes) return;
      setItems([
        {
          key: 'notes',
          icon: <BookOutlined />,
          label: 'My Notes',
          children: notes.map(note => ({
            key: note.id,
            label: note.header,
          })),
        },
      ]);
    }, [notes, currentUser]); 

    useEffect(() => {
      if (currentUser) {
        try {
          const savedNotes = JSON.parse(localStorage.getItem('notes')).filter(note => note.userId === currentUser) || [];
            setNotes(savedNotes);
        } catch (e) {
        }
      }
    }, [currentUser, showAddNote]);

    const handleNewNoteButton = (id, oldHeader, oldBody) => {
      if (id !== null) {
        setDefaultId(id);
        setIsEditNote(true);
      }
      setShowAddNote(true);
      setDefaultHeader(oldHeader);
      setDefaultBody(oldBody);
      setSelectedNote(null);
      navigate('/home/my-notes/new-note')
    }

    const handleLogoutButton = () => {
      let allNotes = [];
      try {
        allNotes = JSON.parse(localStorage.getItem('notes'));
      } catch (e) {
        console.error("Notes couldn't parse from localStorage", e);
      }

      if (currentUser === 'guest') {
        const notesWithoutGuest = allNotes.filter(note => note.userId !== 'guest');
        localStorage.setItem('notes', JSON.stringify(notesWithoutGuest));

        dispatch({ type: 'EDIT_NOTE', payload: notesWithoutGuest });
      }

      localStorage.removeItem('currentUser');
      localStorage.removeItem('guest');
      navigate("/login");
    };

    const handleMenuClick = (e) => {
      const noteId = e.key;
      
      const note = notes.find(n => n.id === noteId);
      if (note) {
        const path = `/home/my-notes/${noteId}`;
        navigate(path);
        setSelectedNote(note);
        setShowAddNote(false);
      }
    };

    const handleDeleteNoteButton = () => {
      if (!selectedNote || !currentUser) return;

      let allNotes = [];
      try {
        allNotes = JSON.parse(localStorage.getItem('notes')) || [];
      } catch (e) {
        console.error(e);
        return;
      }

      const updatedAllNotes = allNotes.filter(note => note.id !== selectedNote.id);

      localStorage.setItem('notes', JSON.stringify(updatedAllNotes));

      const updatedUserNotes = updatedAllNotes.filter(note => note.userId === currentUser);
            dispatch({ type: "EDIT_NOTE", payload: updatedAllNotes });

      setNotes(updatedUserNotes);
      setSelectedNote(null);
    };

  return {
    showAddNote,
    handleNewNoteButton,
    handleLogoutButton,
    selectedNote,
    handleMenuClick,
    handleDeleteNoteButton,
    defaultId,
    defaultHeader,
    defaultBody,
    isEditNote,
    items
  }
}