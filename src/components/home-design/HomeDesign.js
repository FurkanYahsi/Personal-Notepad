import './HomeDesign.css'
import {useHomeDesign} from './HomeDesign.logic'
import {BookOutlined, PlusOutlined, LogoutOutlined, ToolOutlined, DeleteOutlined} from '@ant-design/icons';
import { Button, Menu, FloatButton } from 'antd';
import NewNote from '../new-note/NewNote';
import { format } from "date-fns";

const HomeDesign = () => {

  const {
    showAddNote,
    handleNewNoteButton,
    handleLogoutButton,
    notes,
    selectedNote,
    handleMenuClick,
    handleDeleteNoteButton,
    handleEditNoteButton
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
   
  return (
    <div className='homeDesign' >
      <div className='sidebarWrapper'>
        <Menu className='sidebarMenu' selectedKeys={selectedNote ? [selectedNote.id] : []} mode='inline' theme='dark' items={items} onClick={handleMenuClick}/> 
      </div>
      <div className='upperbarAndContentWrapper'>
        <div className='upperbar'>
          <Button className='logoutButton' onClick={handleLogoutButton}>
            <LogoutOutlined/>Logout</Button>
        </div>
         <div className='newNoteWrapper'>
          {showAddNote && <NewNote/>}
          {!showAddNote && selectedNote && (
            <div className='showNote'>
              <div style={{width:'100%'}}>
                <div style={{display:'flex'}}>
                  <h2 style={{color:'#d4d4d4', flex:1, position:'absolute', left:'10%', width:'80%'}}>{selectedNote.header} </h2>
                  <h6 style={{width:'100%', height:'50px', display:'flex', justifyContent:'flex-end'}} className='textColor'>{format(new Date(selectedNote.date), "dd-LLL-yyyy HH:mm").toLocaleString()}</h6>
                  <ToolOutlined className='icon' onClick={()=>handleEditNoteButton()}/> 
                </div>        
                <p className='textColor'>{selectedNote.body}</p>
                <DeleteOutlined className='icon' onClick={()=>handleDeleteNoteButton()}/>
              </div>
            </div>
          )}
          {!showAddNote && !selectedNote && (<div>Please select a note or add a new one.</div>)}
        </div>
      </div> 
      {!showAddNote && <FloatButton icon={<PlusOutlined />} onClick={handleNewNoteButton} />}
    </div>
  )
}
export default HomeDesign;

