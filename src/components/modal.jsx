import React from "react";
import "./modal.css";

function modal(Props) {
  const { show, handleClose, handleInputTodo, handleAddTodo, data, handleCancel, btnChange, handleUpdatetodo } = Props ?? {}
  const { title, content } = data.todo ?? ''
  // const showHideclassNameName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" onClick={handleClose}>&times;</button>
          {btnChange ? (<h4>Add Todo</h4>) : <h4>Edit Todo</h4>}
        </div>
        <div className="modal-body">
          <label>Title</label>
          <input className="topicTitle" type="text" name="title" value={title ?? ""} onChange={(e) => handleInputTodo(e)} />
          <label>Content</label>
          <textarea className="topicContent" name="content" value={content ?? ""} onChange={(e) => handleInputTodo(e)}></textarea>
        </div>
        <div className="modal-footer">
          <div></div>
          <button className="cancelbtn" onClick={handleCancel}>Cancel</button>
          {btnChange ? (
            <button className="savebtn" onClick={handleAddTodo}>Create</button>
          ) : (
            <button className="savebtn" onClick={handleUpdatetodo}>Update</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default modal;
