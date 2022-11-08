import React from "react";
import "./modal.css";

function modal(Props) {
  const { show, handleClose, handleInputTodo, handleAddTodo, data, handleCancel, btnChange, handleUpdatetodo } = Props ?? {}
  const { title, content } = data.todo ?? ''
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div class={showHideClassName}>
      <div class="modal-content" show={show}>
        <div class="modal-header">
          <button class="close" onClick={handleClose}>&times;</button>
          {btnChange ? (<h4>Add Todo</h4>) : <h4>Edit Todo</h4>}
        </div>
        <div class="modal-body">
          <label>Title</label>
          <input class="topicTitle" type="text" name="title" value={title ?? ""} onChange={(e) => handleInputTodo(e)} />
          <label>Content</label>
          <textarea class="topicContent" name="content" value={content ?? ""} onChange={(e) => handleInputTodo(e)}></textarea>
        </div>
        <div class="modal-footer">
          <div></div>
          <button class="cancelbtn" onClick={handleCancel}>Cancel</button>
          {btnChange ? (
            <button class="savebtn" onClick={handleAddTodo}>Create</button>
          ) : (
            <button class="savebtn" onClick={handleUpdatetodo}>Update</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default modal;
