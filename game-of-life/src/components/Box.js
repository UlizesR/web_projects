import React from 'react'
// import '/src/index.css'
function Box(props) {

    const selectBox = () => {props.selectBox(props.row, props.col)}
    return (
        <div
            className="{props.boxClass} inline-block border border-white bg-slate-400 w-4 h-4 ml-[-1px] mb-[-1px] hover:bg-[#00CCFF]"
            id={props.id}
            onClick={selectBox}
        />
    );
}

export default Box