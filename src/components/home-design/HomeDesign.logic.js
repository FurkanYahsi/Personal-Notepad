import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BookOutlined} from '@ant-design/icons';

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

    // const [isSidebarUpdated, setIsSidebarUpdated] = useState(false);

    // if (notes === localStorage.getItem('notes')) {
    //   setIsSidebarUpdated(true);
    // } else {
    //   setIsSidebarUpdated(false);
    // }
    // const [items, setItems] = useState();

    // useEffect(()=> {
    //   setItems( [
    //     {
    //       key: 'notes',
    //       icon: <BookOutlined/>,
    //       label: 'My Notes',
    //       children: notes.filter(note=>note.userId === currentUser).map(note => ({
    //         key: note.id,
    //         label: note.header,
    //       })),
    //     },
    //   ]);
    // }, [isSidebarUpdated]);

    let items;
      items = [
        {
          key: 'notes',
          icon: <BookOutlined/>,
          label: 'My Notes',
          children: notes.filter(note=>note.userId === currentUser).map(note => ({
            key: note.id,
            label: note.header,
          })),
        },
      ];



    useEffect(() => {
      if (currentUser) {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
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
    }

    const handleLogoutButton = () => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('guest');
      localStorage.removeItem(null);
      navigate("/login");
    }

    const handleMenuClick = (e) => {
      const noteId = e.key;
      
      const note = notes.find(n => n.id === noteId);
      if (note) {
        const path = '/home/my-notes/:noteId' + noteId;
        // <Route path='/home/my-notes:{noteId}'></Route>
        navigate(path);
        setSelectedNote(note);
        setShowAddNote(false);
      }

    };

    const handleDeleteNoteButton = () => {
      if (!selectedNote || !currentUser) return;

      const updatedNotes = notes.filter(note => note.id !== selectedNote.id);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));

      setNotes(updatedNotes);
      setSelectedNote(null);
    }
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
