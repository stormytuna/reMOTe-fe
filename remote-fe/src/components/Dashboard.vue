<template>
    <div>
        <h1>The Dashboard</h1>
    </div>
  </template>
  <script>
import { onMounted } from 'vue';

    export default  {
        name: "Dashboard",
        setUp() {
            onMounted( async () => {
                await fetch('http://localhost:8080/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                })
            })
        }
    }
    

  </script>
  <style scoped>
  </style>