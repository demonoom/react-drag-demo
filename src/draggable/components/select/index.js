import React from "react";
import {Select} from "antd"

const SelectComponent = (props) => {
    const {label, style} = props
    return <>
        <span style={{color: '#000'}}>{label}：</span>
        <Select disabled defaultValue="lucy" style={style}>

        </Select>
    </>
}

export default SelectComponent