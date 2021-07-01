import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Task from "./task";


const Column = (props) => {
    const {column, tasks} = props;
    return (
        <div style={{
            margin: 8,
            border: '1px solid lightgray',
            borderRadius: 2
        }}>
            <h3 style={{padding: 8}}>
                {column.title}
            </h3>
            <Droppable droppableId={column.id}>
                {
                    provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}
                             style={{padding: 8}}>
                            {
                                tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}

export default Column
