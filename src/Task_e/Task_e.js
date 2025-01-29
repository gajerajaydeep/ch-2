import React from 'react'

export default function Task_e() {

    const NameList = ['rohan', 'manan', 'mahes', 'monil'];

    const NameItem = NameList.map((item , index) => {
        return <li key={index}>Person name : {item}</li>;
    });

    return (
        <>
            <ul>
                {NameItem}
            </ul>

        </>
    )
}
