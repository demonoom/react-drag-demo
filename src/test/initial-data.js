const initialData = {
    //任务
    tasks: {
        'task-1': {id: 'task-1', content: 'Take out the garbage'},
        'task-2': {id: 'task-2', content: 'Watch my favorite show'},
        'task-3': {id: 'task-3', content: 'Charge my phone'},
        'task-4': {id: 'task-4', content: 'Cook dinner'},
    },
    //列
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],//1.标志task-1在column-1  2.维护顺序
        },
    },
    // 记录列的顺序
    columnOrder: ['column-1'],
};

export default initialData;

