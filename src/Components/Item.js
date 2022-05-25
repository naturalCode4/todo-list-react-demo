import React, { useState } from "react";
import '../App.css'

const Item = ({ item, id, setList, list}) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleDelete = (id) => {
        list.splice(id, 1)
        setList([...list])
    }

    return (
        <div>
            <h3 onClick={setIsChecked(!isChecked)} className={isChecked ? 'completed': null}>{item.task}</h3>
            <h5>{item.category}</h5>
            <h3 onClick={() => handleDelete(id)}>x</h3>
        </div>
    )
}

export default Item