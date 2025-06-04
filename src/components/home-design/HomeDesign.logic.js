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
 
    //Extract the notes that is belong to currentUser
    useEffect(() => {
      if (state.notes && currentUser) {
        setNotes(state.notes.filter(note => note.userId === currentUser));
      }
    }, [state.notes, currentUser]);

    //Set items to show on sidebar menu
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

    //Floating add button logic
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

    //Logout button logic
    const handleLogoutButton = () => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('guest');
      localStorage.removeItem(null);
      //Guest başka biri girerse önceki guestin notlarını görüntüleyebiliyor
      // let count = 0;
      // let temp = JSON.parse(localStorage.getItem('notes'));
      // for (var i = temp.length - 1; i >= 0; i = i-1) {
      //   if (temp[i].userId === 'guest') {
      //     temp[i] = null;
      //     count = count + 1;
      //   }
      // }
      // let newTemp = [];
      // let a = 0;
      // for (var i = temp.length - 1; i >= 0; i = i-1) {
      //   try {
      //     if (temp[i].userId) {

      //     }
      //     if (a <= i)
      //       newTemp[a] = temp[i];    
      //   } catch (e) {

      //   }
      // }
      // localStorage.setItem('notes', JSON.stringify(newTemp));
      navigate("/login");
    }

    //Sidebar click logic
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

    //Delete button logic
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
      dispatch({ type: "DELETE_NOTE", payload: updatedAllNotes });

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