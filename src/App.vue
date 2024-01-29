<!-- App.vue -->
<template>
  <div id="app">
    <NoteList :notes="notes" @select-note="selectNote" @add-note="addNote"/>
    <NoteEditor :note="selectedNote" @update-note="SaveNote" @delete-note="removeNote"/>
  </div>
</template>

<script>
import NoteList from "./components/NoteList.vue";
import NoteEditor from "./components/NoteEditor.vue";

import axios from "axios"

export default {
  name: "App",
  components: {
    NoteList,
    NoteEditor
  },
  data() {
    return {
      notes: [],
      selectedNote: null
    };
  },
  //挂载
  mounted(){
    this.selectAllNotes()
  },
  methods: {
    selectNote(note) {
      axios.get(`/api/`+note.id).then(response =>{
        this.selectedNote = response.data.data
      }).catch(error =>{
        console.log(error)
      })
    },
    SaveNote(updateNote){
      if (updateNote.id){
        axios.put("/api", updateNote).then(response =>{
          this.$message({
              message: response.data.message,
              type: response.data.success? 'success': 'error'
            })
            this.selectAllNotes()
        }).catch(error =>{
          console.log(error)
        })
      }else{
        axios.post("/api", updateNote).then(response =>{
            this.$message({
              message: response.data.message,
              type: response.data.success? 'success': 'error'
            })
            this.selectAllNotes()
        }).catch(error=>{
              console.log(error)
            })  
      }
    },
    selectAllNotes(){
      axios.get("/api").then(response =>{
        this.notes=response.data.data
      }).catch(error =>{
        console.log(error)
      })
    },
    addNote(){
      this.selectedNote={
        title: "",
        content: ""
      }
    },
    removeNote(note){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.delete(`/api/`+note.id).then(response =>{
            this.$message({
              message: response.data.message,
              type: response.data.success? 'success': 'error'
            })
            this.selectAllNotes()
            this.selectedNote=null
          }).catch(error =>{
            console.log(error)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>

<style>
#app {
  display: flex;
  height: 100vh;
}
</style>
