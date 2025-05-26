import React, { Component, useState } from 'react'
import {useHomeDesign} from './HomeDesign.logic'

import {BookOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PlusOutlined} from '@ant-design/icons';
import { Button, Menu, FloatButton } from 'antd';

const items = [
  {key : '1', icon : <BookOutlined/>, label : 'My Notes', children : [
                                                          {key : '2', label : 'General'},
                                                          {key : '3', label : 'Shopping List'}
                                                        ]}
]
const HomeDesign = () => {

    const {handleNewNoteButton} = useHomeDesign();
    // const [collapsed, setCollapsed] = useState(false);
    
    // const changeCollapse = () => {
    //     setCollapsed(!collapsed)
    // }
    
        return (
        <div style={{width:256}}>
            {/* <Button color='default' variant='solid' onClick={changeCollapse} style={{marginBottom : 2}}>
            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button> */}
            <Menu default selectedKeys={['1']} mode='inline' theme='dark' items={items} style={{height:'100vh'}}>
            
            </Menu>
            <FloatButton icon = {<PlusOutlined/>} onClick={handleNewNoteButton}/>
        </div>
        )
    
}
export default HomeDesign;

