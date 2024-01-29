<!-- NoteEditor.vue -->
<template>
    <div v-if="localNote" class="note-editor">
      <input v-model="localNote.title" type="text" class="note-title"/>
      <div class="note-info">
        <span>Created: {{ localNote.createdAt }}</span>
        <span>Last modified: {{ localNote.updatedAt }}</span>
        <div class="buttons">
             <button @click="saveNote" class="save-button">Save</button>
            <button @click="deleteNote" class="delete-button">Delete</button>
        </div>
      </div>
      <textarea v-model="localNote.content" class="note-content"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: "NoteEditor",
    props: {
      note: Object
    },
    data(){
        return {
            localNote:JSON.parse(JSON.stringify(this.note))
        }
    },
    watch:{
        note(nVal){
            this.localNote = JSON.parse(JSON.stringify(nVal))
        }
    },
    methods:{
        saveNote(){
         this.$emit("update-note", this.localNote)
        },
        deleteNote(){
            this.$emit("delete-note",this.localNote)
        }
    }
    
  };
  </script>
  
  <style scoped>
  .note-editor {
    flex: 1;
    padding: 20px;
  }
  .note-title {
    font-size: 1.4em;
    margin-bottom: 10px;
    width: 100%;
  }
  .note-info {
    font-size: 0.8em;
    color: #888;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

.note-info span {
  margin-right: 5px; /* 添加间距 */
}

.buttons {
  display: flex;
  gap: 5px; /* 按钮之间的间距 */
}
.note-content {
    width: 100%;
    height: 70%;
    border: 1px solid #ddd;
  }

.delete-button {
  background-color: red; /* 红色背景 */
  color: white; /* 白色文本 */
  border: none; /* 无边框 */
  padding: 10px 15px; /* 内填充 */
  border-radius: 5px; /* 圆角边框 */
  cursor: pointer; /* 鼠标悬停时的手形图标 */
  transition: background-color 0.3s; /* 过渡动画 */
}

.delete-button:hover {
  background-color: darkred; /* 鼠标悬停时更深的红色 */
}

.save-button{
    background-color: skyblue;
    color: white; /* 白色文本 */
  border: none; /* 无边框 */
  padding: 10px 15px; /* 内填充 */
  border-radius: 5px; /* 圆角边框 */
  cursor: pointer; /* 鼠标悬停时的手形图标 */
  transition: background-color 0.3s; /* 过渡动画 */
}
  </style>
  