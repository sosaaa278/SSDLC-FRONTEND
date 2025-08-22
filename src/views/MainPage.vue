<template>
  <div class="main-container">
    <h1>Sistema SSDLC</h1>
    <div class="button-group">
      <button @click="goToIncidences">Ir a Incidencias</button>
      <button @click="goToStaff">Ir a Alta de Personal</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToIncidences = () => {
  router.push('/incidences')
}

const goToStaff = () => {
  router.push('/stateForm')
}
</script>

<style scoped>
.main-container {
  text-align: center;
  margin-top: 50px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: #3498db;
  color: white;
  transition: 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>
