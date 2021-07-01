import React, {useState} from "react";
import GridLayout from "react-grid-layout"
import Select from "../components/select"

const Rgl = () => {
    const [layout,] = useState([
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2},
        {i: 'd', x: 5, y: 0, w: 7, h: 2}
    ])

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            style={{border: '1px solid #ccc'}}
        >
            <div style={{backgroundColor: 'red'}} key='a'>a</div>
            <div style={{backgroundColor: 'blue'}} key='b'>b</div>
            <div style={{backgroundColor: 'yellow'}} key='c'>c</div>
            <div key='d'>
                <Select style={{margin: 6, width: 120}} label='年级7'/>
            </div>
        </GridLayout>
    )
}

export default Rgl