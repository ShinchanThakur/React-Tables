import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce((value) => {  //This will make sure that the filtering begins after 1000 ms (this number is custom) after user stops typing
                                                    //Earlier, the filter was being applied after every letter
        setFilter(value || undefined)
    }, 1000)    //Ideally it should be 300-400 millisecond
                //But we have taken 1000 ms to show the difference in demo
    return (
        <span>
            Search: {' '}
            <input 
            value={value || ''}    
            onChange={(e) => {      //This is the onChange provided by html
                setValue(e.target.value)
                onChange(e.target.value)    //This is the onChange function that we created
            }}
            />
        </span>
    )
}
