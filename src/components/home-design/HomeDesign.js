import React, { Component, useState } from 'react'
import './HomeDesign.css'
import {useHomeDesign} from './HomeDesign.logic'

import Icon, {BookOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined, LogoutOutlined} from '@ant-design/icons';
import { Button, Menu, FloatButton } from 'antd';
import NewNote from '../new-note/NewNote';

const items = [
  {key : '1', icon : <BookOutlined/>, label : 'My Notes', children : [
                                                          {key : '2', label : 'General'},
                                                          {key : '3', label : 'Shopping List'}
                                                        ]}
]

const HomeDesign = () => {

    const {handleNewNoteButton, handleLogoutButton, showAddNote} = useHomeDesign();
   
      return (
        <div className='homeDesign' >
            <div className='sidebarWrapper'>
              <Menu className='sidebarMenu' selectedKeys={['1']} mode='inline' theme='dark' items={items}/> 
            </div>

          <div className='upperbarAndContentWrapper'>

            <div className='upperbar' onClick={handleLogoutButton}>
              <Button className='logoutButton'>
                <LogoutOutlined/>Logout</Button>
            </div>
            
             <div className='newNoteWrapper'>
              {showAddNote && <NewNote />}
            </div>
          </div> 
          {!showAddNote && <FloatButton icon={<PlusOutlined />} onClick={handleNewNoteButton} />}
         
        </div>
      )
    
}
export default HomeDesign;

