import React from 'react'

function Step(props) {
    return (
        <div className={"stepBlock" + (props.selected ? " selected" : '')}>
            <div className={"circleWrapper"}>
                <div className="circle">
                    {props.index + 1 }
                </div>
            </div>
            <div className="row step-label">
                <span className="step-label1"> {props.label[0]} </span>
                <span className="step-label2"> {props.label[1]} </span>
            </div>
        </div>
    )
}

export default Step
