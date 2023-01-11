import React, { useState, useEffect } from "react";
import Modal from "./modal";
import Accordion from "./Accordion";
import api from "../helper/api";
import { FaPlus } from "react-icons/fa";
import "./dashboard.css";
function Dashboard() {
  const initialState = {
    todo: {
      title: "",
      content: "",
    },
  };
  const [modalShow, setModalShow] = useState(false);
  const [btnChange, setBtnChange] = useState(false);
  const [data, setData] = useState(initialState);
  const [todoList, setTodoList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const handleShow = () => {
    setModalShow(true);
    setBtnChange(true);
  };
  const handleClose = () => setModalShow(false);
  const isEmpty = Object.values(data.todo).some((x) => x === null || x === "");
  const handleInputTodo = (e) => {
    const { name, value } = e.target;
    setData({ todo: { ...data.todo, [name]: value } });
  };
  const handleGetTodoList = async () => {
    let result = await api.getAllTodo();
    if (isEmpty && todoList.length === 0 && result.data.msg === "No Content") {
      setTodoList([]);
    } else {
      setTodoList(result.data ?? []);
      setDefaultList(result.data ?? []);
    }
  };

  const handleAddTodo = async () => {
    const { title, content } = data.todo ?? {};
    if (!title || !content) {
      alert("All fields are required");
    } else {
      let res = await api.addTodo(data.todo);
      setTodoList([...todoList, res.data]);
      handleClose();
      setData({
        ...data,
        todo: {
          title: "",
          content: "",
        },
      });
    }
  };
  const handleCancel = () => {
    handleClose();
    setData({
      ...data,
      todo: {
        id: "",
        title: "",
        content: "",
      },
    });
  };
  const handleRemoveList = async (id) => {
    console.log(
      "%c ❤️: handleRemoveList -> id ",
      "font-size:16px;background-color:#819576;color:white;",
      id
    );
    try {
      if (!id) {
        alert("no id");
      } else {
        const res = await api.deleteTodo(id);
        let txt = "";
        if (window.confirm("Are you sure you want to delete this todo?")) {
          txt = "Successfully deleted!";
          const newData = todoList.filter((card) => card._id !== id);
          setTodoList(newData);
        } else {
          txt = "You pressed Cancel!";
        }
        return res;
      }
    } catch (error) {
      alert("Internal Server Error");
    }
  };
  const handleOpenUpdateTodo = async (id) => {
    if (!id) {
      alert("Not found");
    } else {
      const res = await api.getById(id);
      const { data } = res.data;
      setBtnChange(false);
      setData({ todo: { ...data } });
      setModalShow(true);
    }
  };
  const handleUpdatetodo = async () => {
    const { title, content } = data.todo ?? {};
    if (title || content) {
      const res = await api.updateTodo(data.todo);
     

      handleGetTodoList();
      // setTodoList([...todoList, res.data])
      handleClose();
      setData({
        ...data,
        todo: {
          title: "",
          content: "",
        },
      });
    } else {
      alert("No content to be update!");
    }
  };

  useEffect(() => {
    handleGetTodoList();
  }, []);
  return (
    <div className="container">
      <h1 data-testid="header">TODO LIST</h1>
      <div className="btnContainer">
        <button className="btnAdd" onClick={handleShow}>
          {" "}
          <FaPlus /> Add
        </button>
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
        {todoList.length === 0 ? (
          <h1 class="noData">No Available Data!!!</h1>
        ) : (
          <div>
            {todoList.map(({ title, content, _id }) => (
              <Accordion
                id={_id}
                title={title}
                content={content}
                handleRemoveList={handleRemoveList}
                handleOpenUpdateTodo={handleOpenUpdateTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
