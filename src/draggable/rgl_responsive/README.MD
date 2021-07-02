基础属性：

| 属性  |说明|类型|默认值|
|:---:|:---:|:---:|:---:|
| width | 宽度；必须的，除非使用HOC <WidthProvider> | number | - |
| autoSize | 如果为true，容器的高度将适应内容进行放大缩小 | boolean | true |
| cols | 这个布局的列数 | number | 12 |
| draggableCancel | 禁止拖拽，参数是类名 | string | - |
| draggableHandle | 允许拖拽，参数是类名 | string | - |
| compactType | 紧密排列的方向 | ('vertical' &#124; 'horizontal') | ‘vertical’ |
| layout | layout的格式是一个数组，每一项为一个对象，如下：{x: number, y: number, w: number, h: number};layout里的索引值i（index）需要和每个具体拖拽组件的key属性保持一致；如果使用了自定义的key值，可以把这个值定义到layout当中；{i: string, x: number, y: number, w: number, h: number} | array | null |
| margin | 拖拽项和其他的间距 | [number, number] | [10,10] |
| containerPadding | 容器的内边距 | [number, number] | margin |
| rowHeight | 每行的固定高度 | number | 150 |
| droppingItem |  | { i: string, w: number, h: number } |  |

标记：

| 属性  |说明|类型|默认值|
|:---:|:---:|:---:|:---:|
| isDraggable |  | boolean  | true |
| isResizable |  | boolean  | true |
| useCSSTransforms | 使用css3的translate() 代替 position top/left，带来快6倍的性能 | boolean  | true |
| transformScale | 如果ResponsiveReactGridLayout或ReactGridLayout的父DOM节点具有“transform:scale（n）”css属性，我们应该设置比例系数，以避免在拖动时渲染伪影。 | number | 1 |
| preventCollision | 如果设置true，在拖拽过程当中，具体拖拽组件不会改变位置 | boolean | false |
| isDroppable |  | boolean | false |
| resizeHandles | | number | - |
| resizeHandle | | number | - |

回调：

| 属性  |说明|类型|默认值|
|:---:|:---:|:---:|:---:|
| onLayoutChange |  |  | - |
| onDragStart |  |  | - |
| onDrag |  |  | - |
| onDragStop |  |  | - |
| onResizeStart |  |  | - |
| onResize |  |  | - |
| onResizeStop |  |  | - |

响应式布局参数：支持以上所有参数，除了layout，新的属性如下：

| 属性  |说明|类型|默认值|
|:---:|:---:|:---:|:---:|
| breakpoints | 断点的名称可以是任意的，但是需要和layouts和cols对象保持一致 | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |
| cols |  | Object   | {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2} |
| margin |  | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |
| containerPadding |  | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |
| layouts |  | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |

回调：

| 属性  |说明|类型|默认值|
|:---:|:---:|:---:|:---:|
| onBreakpointChange | 页面大小从一个断点区间过渡到另一个区间的时候触发 | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |
| onLayoutChange |  | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |
| onWidthChange | 页面尺寸变化的回调 | Object   | {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0} |
