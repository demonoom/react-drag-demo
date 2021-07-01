import React from "react";
import {Draggable} from "react-beautiful-dnd";


const Task = (props) => {
    const {task, index} = props

    return <Draggable draggableId={task.id} index={index}>
        {
            provided => {
                return (
                    <div
                        {...provided.dragHandleProps}
                        style={{
                            border:'1px solid lightgrey',
                            borderRadius: 2,
                            padding: 8,
                            marginBottom: 8,
                            backgroundColor: 'white'
                        }}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        {task.content}
                    </div>
                )
            }
        }
    </Draggable>
}

export default Task



