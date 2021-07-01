import React, {useState} from "react";
import initialData from "./initial-data"
import {DragDropContext} from "react-beautiful-dnd";
import Column from "./column";


const Text = () => {
    const [data,] = useState(initialData)

    /**
     * 拖拽结束后
     * @param result
     */
    const onDragEnd = (result) => {
    }

    /**
     * DragDropContext：拖拽上下文，用来包裹拖拽列表；Droppable和Draggable必须放在里面
     */
    return <DragDropContext onDragEnd={onDragEnd}>
        {
            data.columnOrder.map(columnId => {
                const column = data.columns[columnId]
                const tasks = column.taskIds.map(taskId => data.tasks[taskId])
                return <Column
                    column={column}
                    tasks={tasks}
                    key={column.id}
                />
            })
        }
    </DragDropContext>
}

export default Text