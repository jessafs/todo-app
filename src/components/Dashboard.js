import React, { useState, useEffect } from "react";
import Modal from "./modal"
import Accordion from "./Accordion";
import { v4 as uuid } from 'uuid';
import { FaTrashAlt, FaPenAlt, FaPlus } from "react-icons/fa";
import "./dashboard.css";
function Dashboard() {
  const initialState = {
    todo: {
      id: '',
      title: '',
      content: ''
    }
  }
  const [modalShow, setModalShow] = useState(false);
  const [btnChange, setBtnChange] = useState(false);
  const [data, setData] = useState(initialState);
  const [todoList, setTodoList] = useState([]);
  const handleShow = () => {
    setModalShow(true)
    setBtnChange(true)
  }
  const handleClose = () => setModalShow(false)
  const isEmpty = Object.values(data.todo).some(x => x === null || x === '');


  const handleInputTodo = (e) => {
    const { name, value } = e.target
    setData({ todo: { ...data.todo, [name]: value } })//id: uuid() 
  }
  const handleGetTodoList = () => {
    if (isEmpty && todoList.length === 0) {
      setTodoList([])
    } else {
      setTodoList([...todoList, data.todo])
    }
  }

  const handleAddTodo = () => {
    const { title, content } = data.todo ?? {}
    const id = uuid()
    if (!title || !content) {
      alert("All fields are required")
    } else {
      const newData = {
        id,
        title,
        content
      }
      setTodoList([...todoList, newData])
      handleClose()
      setData({
        ...data,
        todo: {
          id: "",
          title: "",
          content: ""
        }
      })
    }
  }

  const handleCancel = () => {
    handleClose()
    setData({
      ...data,
      todo: {
        id: "",
        title: "",
        content: ""
      }
    })
  }
  const handleRemoveList = (id) => {
    if (!id) {
      alert("no id")
    } else {
      let txt = ''
      if (window.confirm("Are you sure you want to delete this todo?")) {
        txt = "Successfully deleted!";
        const newData = todoList.filter((card) => card.id !== id)
        setTodoList(newData)
      } else {
        txt = "You pressed Cancel!";
      }

    }

  }
  const handleOpenUpdateTodo = (id) => {
    if (!id) {
      alert("Not found")
    } else {
      const dataToUpdate = todoList.filter((data) => {
        if (data.id === id) {
          return data
        }
      })
      setBtnChange(false)
      setData({ todo: { ...dataToUpdate[0] } })
      setModalShow(true)
    }
  }
  const handleUpdatetodo = () => {
    const { title, content, id } = data.todo ?? {}
    if (!title || !content) {
      alert("All fields are required")
    } else {
      const newData = todoList.map((item) => {
        if (item.id === id) {
          return data.todo
        } else {
          return item
        }
      })
      setTodoList(newData)
      handleClose()
      setData({
        ...data,
        todo: {
          id: "",
          title: "",
          content: ""
        }
      })
    }
  }

  useEffect(() => {
    handleGetTodoList()
  }, []);
  return (
    <div className="container">
      <h1 data-testid="header">TODO LIST</h1>
      <div className="btnContainer">
        <button className="btnAdd" onClick={handleShow}>  <FaPlus /> Add</button>
      </div>
      <Modal
        show={modalShow}
        btnChange={btnChange}
        handleClose={handleClose}
        handleInputTodo={handleInputTodo}
        handleAddTodo={handleAddTodo}
        handleCancel={handleCancel}
        handleUpdatetodo={handleUpdatetodo}
        data={data}
      />
      {/* <div class="contentList">
        {todoList.length === 0 ? <h1 class="noData">No Available Data!!!</h1> :
          <div class="parent">
            {
              todoList.map((todo, i) => {
                const { title, content, id } = todo
                const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
                return (
                  < div class="row" key={i} >
                    <div class="column">
                      <small className="cardTitle">{formattedTitle}</small>
                      <div class="card-content" >
                        <p>{content}</p>
                        <div class="card-footer">
                          <FaTrashAlt class="deleteIcon" onClick={() => handleRemoveList(id)} />&nbsp;&nbsp;
                          <FaPenAlt class="editIcon" onClick={() => handleOpenUpdateTodo(id)} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div> */}
      {/* accordion */}
      <div className="contentList">
        {todoList.length === 0 ? <h1 class="noData">No Available Data!!!</h1> :
          <div>
            {todoList.map(({ title, content, id }) => (
              <Accordion
                id={id}
                title={title}
                content={content}
                handleRemoveList={handleRemoveList}
                handleOpenUpdateTodo={handleOpenUpdateTodo}
              />
            ))}
          </div>
        }
      </div>

    </div >
  );
}

export default Dashboard;
