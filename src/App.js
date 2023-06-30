import React from "react"
import Overview from './components/Overview';
import uniqid from 'uniqid';
import './App.css';

function App() {
  const [itemArray, setItemArray] = React.useState([]);
    // Item schema:
    // {
    //   task:"",
    //   id: uniqid(),
    //   isEditable: false
    // }
  const [itemContent,setItemContent] = React.useState("");
  const [resubmitContent, setResubmitContent] = React.useState("")
 

  console.log(resubmitContent)

  function handleChange(e) {
    setItemContent(e.target.value)
  }
  function handleResubmitChange(e) {
    setResubmitContent(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setItemArray(prevItemArray => {
      return [
        ...prevItemArray,
        {
          task: itemContent,
          id: uniqid(),
          isEditable: false
        }
      ]
    })
    setItemContent("")
  }

  function handleDelete(e) {
    console.log(e.target.id)
    setItemArray(prevItemArray => {
      return prevItemArray.filter(item => item.id !== e.target.id)
    })
  }

  function handleEdit(e) {
    console.log('edit')
    setItemArray(prevItemArray => {
      return prevItemArray.map(item => {
        if(item.id === e.target.id) {
          setResubmitContent(item.task)
          return {
            ...item,
            isEditable: true
          }
        } else {
          return {
            ...item,
            isEditable: false
          }
        }
      })
    })
  }

  function handleReSubmit(e) {
    console.log('resubmit')
    setItemArray(prevItemArray => {
      return prevItemArray.map(item => {
        if(item.id === e.target.id) {
          return {
            ...item,
            task: resubmitContent,
            isEditable: false
          }
        }
        return item
      })
    })
    setResubmitContent("")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="task"
          value={itemContent}
        />
        <button>Add task</button>
      </form>
      <Overview
       items={itemArray}
       handleDelete={handleDelete}
       handleEdit={handleEdit}
       handleReSubmit={handleReSubmit}
       handleResubmitChange={handleResubmitChange}
       resubmitContent={resubmitContent}
       />
    </div>
  );
}

export default App;
