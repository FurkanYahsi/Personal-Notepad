import './HomeDesign.css'
import {useHomeDesign} from './HomeDesign.logic'
import {BookOutlined, PlusOutlined, LogoutOutlined, ToolOutlined, DeleteOutlined} from '@ant-design/icons';
import { Button, Menu, FloatButton } from 'antd';
import NewNote from '../new-note/NewNote';
import { format } from "date-fns";
import { useParams } from 'react-router-dom';

const HomeDesign = () => {
  
  const {
    showAddNote,
    handleNewNoteButton,
    handleLogoutButton,
    notes,
    selectedNote,
    handleMenuClick,
    handleDeleteNoteButton,
    defaultHeader,
    defaultBody,
    defaultId,
    isEditNote
  } = useHomeDesign();

  //Dinamik oluşturmak için içeri aldık
  const items = [
    {
      key: 'notes',
      icon: <BookOutlined/>,
      label: 'My Notes',
      children: notes.map(note => ({
        key: note.id,
        label: note.header,
      })),
    },
  ];
   const { id } = useParams();
        
  return (
    <div className='homeDesign' >
      <div className='sidebarWrapper'>
        <Menu name="homeDesignSidebarMenu" key="homeDesignSidebarMenu" className='sidebarMenu' selectedKeys={selectedNote ? [selectedNote.id] : []} mode='inline' theme='dark' items={items} onClick={handleMenuClick}/>        
      </div>
      <div className='upperbarAndContentWrapper'>
        <div className='upperbar'>
          <Button key='logOutButton' name='logOutButton' className='logoutButton' onClick={handleLogoutButton}>
            <LogoutOutlined/>Logout</Button>
        </div>
         <div className='newNoteWrapper'>
          {(showAddNote) && !isEditNote && <NewNote name="homeDesignAddNoteButton" key="homeDesignAddNoteButton" buttonName="Add" defaultId={defaultId} defaultHeader={defaultHeader} defaultBody={defaultBody}/>}
          {(showAddNote) && isEditNote && <NewNote name="homeDesignAddNoteButton" key="homeDesignAddNoteButton" buttonName="Save" defaultId={defaultId} defaultHeader={defaultHeader} defaultBody={defaultBody}/>}
          {!showAddNote && selectedNote && (
            <div className='showNote'>
              <div className='fullWidth'>
                <div className='noteContainer'>
                  <h2 className='noteHeader'>{selectedNote.header} </h2>
                  <h6 className='noteBody'>{format(new Date(selectedNote.date), "dd-LLL-yyyy HH:mm").toLocaleString()}</h6>
                  <ToolOutlined className='icon' onClick={()=> {
                    handleNewNoteButton(selectedNote.id, selectedNote.header, selectedNote.body);
                  }}/> 
                </div>        
                <p className='textColor'>{selectedNote.body}</p>
                <DeleteOutlined className='icon' onClick={()=>handleDeleteNoteButton()}/>
              </div>
            </div>
          )}
          {!showAddNote && (<div>Please select a note or add a new one.</div>)}
        </div>
      </div> 
      {!showAddNote && <FloatButton key='goToNewNoteFormButton' name='goToNewNoteFormButton' icon={<PlusOutlined />} onClick={()=>{handleNewNoteButton(null,'','');console.log(id);}} />}
    </div>
  )
}
export default HomeDesign;

