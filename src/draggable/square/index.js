import React, {useState} from "react";
import {DraggableAreasGroup} from 'react-draggable-tags';
import Select from "../components/select";
import deep from 'deep'
import './index.css'

const group = new DraggableAreasGroup()
const DraggableAreaLeft = group.addArea('area_left');
const DraggableAreaRight = group.addArea('area_right');

const Square = () => {
    const [leftTag, setLeftTag] = useState([
        {id: 1, content: <Select style={{margin: 6, width: 120}} label='年级1'/>},
        {id: 2, content: <Select style={{margin: 6, width: 120}} label='年级2'/>},
        {id: 3, content: <Select style={{margin: 6, width: 160}} label='试卷类型'/>},
        {id: 4, content: <Select style={{margin: 6, width: 120}} label='年级4'/>},
        {id: 5, content: <Select style={{margin: 6, width: 120}} label='年级5'/>},
        {id: 6, content: <Select style={{margin: 6, width: 150}} label='题库类别'/>},
        {id: 7, content: <Select style={{margin: 6, width: 120}} label='年级7'/>},
    ])
    const [rightTag, setRightTag] = useState([])

    return (
        <div className='square_container'>
            <div className="square square_left">
                <DraggableAreaLeft
                    tags={leftTag}
                    render={({tag}) => (
                        <div className="tag">
                            {tag.content}
                        </div>
                    )}
                    onChange={(tag, {fromArea, toArea}) => {
                        // console.log(leftTag);
                        // console.log(tag, 'leftTag_left');
                        // console.log(fromArea, 'fromArea_left');
                        // console.log(toArea, 'toArea_left');
                        const res = deep.clone(leftTag)
                        setLeftTag(res)
                    }}
                />
            </div>
            <div className="square square_right">
                <DraggableAreaRight
                    tags={rightTag}
                    render={({tag}) => (
                        <div className="tag">
                            {tag.content}
                        </div>
                    )}
                    onChange={(tag, {fromArea, toArea}) => {
                        console.log(tag, 'rightTag_right');
                        console.log(fromArea, 'fromArea_right');
                        console.log(toArea, 'toArea_right');
                        setRightTag(tag)
                    }}
                />
            </div>
        </div>
    )
}

export default Square