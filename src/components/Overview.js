import React from 'react'


export default function Overview({items, handleDelete, handleEdit, handleReSubmit, handleResubmitChange, resubmitContent}) {
    const numOfItems = items.length
    let id = 0
   
    const taskElements = items.map((item, i) => {
        id++
        return (
            <div key={item.id}>
                <span>{i+1} - {item.task} (of {numOfItems})</span>    
                {!item.isEditable && 
                <>
                <button id={item.id} onClick={handleDelete}>Delete</button>
                <button id={item.id} onClick={handleEdit}>Edit</button>
                </>
                }
                {item.isEditable && 
                <>
                    <input onChange={handleResubmitChange} value={resubmitContent}/>
                    <button id={item.id} onClick={handleReSubmit}>Resubmit</button>
                </>
                }
            </div>
        ) 
        
    })

    

    return (
        <div className="overview">
            {taskElements}
            
        </div>
        
    )
}