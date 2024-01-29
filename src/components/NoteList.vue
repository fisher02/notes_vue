<!-- NoteList.vue -->
<template>
<div>
        <button class="green-button" @click="addNote(note)">Create</button>
    <div class="note-list">
      <div v-for="note in notes" :key="note.id" class="note-item" v-on:click="selectNote(note)">
        <h4>{{ note.title }}</h4>
        <p class="note-date">Last modified: {{ note.updatedAt }}</p>
      </div>
    </div>
</div>
    
  </template>
  
  <script>
  export default {
    name: "NoteList",
    props: {
      notes: Array
    },
    methods:{
        selectNote(note){
            this.$emit("select-note", note)
        },
        addNote(note){
            this.$emit("add-note", note)
        }
    }
  };
  </script>
  
  <style>
  .note-list {
    width: 300px;
    background-color: #f2f2f2;
    overflow-y: auto;
  }
  .note-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
  }
  .note-item:hover {
    background-color: #eaeaea;
  }
  .note-date {
    font-size: 0.8em;
    color: #888;
  }
.green-button {
  background-color: #4CAF50; /* 绿色背景颜色 */
  color: white; /* 字体颜色 */
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 去除边框 */
  cursor: pointer; /* 鼠标指针样式 */
  border-radius: 5px; /* 圆角 */
  margin-left: 30%;
  margin-bottom: 5px;
}
  </style>
  