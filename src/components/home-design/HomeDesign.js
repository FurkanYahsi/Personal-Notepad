import React, { Component, useState } from 'react'
import './HomeDesign.css'
import {useHomeDesign} from './HomeDesign.logic'

import {BookOutlined, PlusOutlined, LogoutOutlined} from '@ant-design/icons';
import { Button, Menu, FloatButton } from 'antd';
import NewNote from '../new-note/NewNote';


const HomeDesign = () => {

    const {
      showAddNote,
      handleNewNoteButton,
      handleLogoutButton,
      notes,
      selectedNote,
      handleMenuClick,
    } = useHomeDesign();

    //Dinamik oluşturmak için içeri aldık
    const items = [
    {
      key: 'notes',
      icon: <BookOutlined />,
      label: 'My Notes',
      children: notes.map(note => ({
        key: note.id,
        label: note.header || '(No Title)',
      })),
    },
  ];
   
      return (
        <div className='homeDesign' >
            <div className='sidebarWrapper'>
              <Menu className='sidebarMenu' selectedKeys={selectedNote ? [selectedNote.id] : []} mode='inline' theme='dark' items={items} onClick={handleMenuClick}/> 
            </div>

          <div className='upperbarAndContentWrapper'>

            <div className='upperbar' onClick={handleLogoutButton}>
              <Button className='logoutButton'>
                <LogoutOutlined/>Logout</Button>
            </div>
            
             <div className='newNoteWrapper'>
              {showAddNote && <NewNote/>}
              {!showAddNote && selectedNote && (
                <div>
                  <h2>{selectedNote.header}</h2>
                  <p>{selectedNote.body}</p>
                  <h6>{new Date(selectedNote.date).toLocaleString()}</h6>
                </div>
              )}
              {!showAddNote && !selectedNote && (
                <div>Please select a note or add a new one.</div>
              )}
            </div>
          </div> 
          {!showAddNote && <FloatButton icon={<PlusOutlined />} onClick={handleNewNoteButton} />}
         
        </div>
      )
    
}
export default HomeDesign;

