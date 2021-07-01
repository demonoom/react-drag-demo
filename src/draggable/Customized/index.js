import React from "react";
import {DraggableArea} from "react-draggable-tags"
import Select from '../components/select'
import './index.css'


const initialTags = [
    {id: 1, content: <Select style={{margin: 6, width: 120}} label='年级1'/>},
    {id: 2, content: <Select style={{margin: 6, width: 120}} label='年级2'/>},
    {id: 3, content: <Select style={{margin: 6, width: 160}} label='试卷类型'/>},
    {id: 4, content: <Select style={{margin: 6, width: 120}} label='年级4'/>},
    {id: 5, content: <Select style={{margin: 6, width: 120}} label='年级5'/>},
    {id: 6, content: <Select style={{margin: 6, width: 150}} label='题库类别'/>},
    {id: 7, content: <Select style={{margin: 6, width: 120}} label='年级7'/>},
];

const Customized = () => {
    return <div className='Customized'>
        <DraggableArea
            tags={initialTags}
            render={({tag}) => tag.content}
        />
    </div>
}

export default Customized