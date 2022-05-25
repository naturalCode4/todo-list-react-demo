import React, {useState} from "react";
import Item from './Item'

const ListDisplay = (props) => {

    const { list, setList } = props
    const [selected, setSelected] = useState('')

    const listMapped = list.filter((item, index) => {
        if(selected) return item.category === selected
        return item}).map((item, index) => {
            return (
                <Item key={index} item={item} index={index} setList={setList} list={list}/>
            )
        })

    console.log(props)

    return (
        <div>
            list should go under here
            <select onChange={(e) => setSelected(e.target.ariaValueText)}>
                <option defaultValue selected></option>
                <option value='Chores'>Chores</option>
                <option value='Wellness-Practices'>Wellness</option>
                <option value='Work'>Work</option>
            </select>
            {listMapped}
        </div>
    )
}

export default ListDisplay