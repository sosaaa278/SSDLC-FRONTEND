<template>
  <div class="staff-container">
    <h2>Alta de Personal</h2>
    <form @submit.prevent="handleStaffRegister">
      <input v-model="name" type="text" placeholder="Nombre completo" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="position" type="text" placeholder="Puesto" required />
      <input v-model="department" type="text" placeholder="Departamento" required />
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/api/axios'

const name = ref('')
const email = ref('')
const position = ref('')
const department = ref('')

const handleStaffRegister = async () => {
  try {
    const res = await axios.post('http://127.0.0.1:8000/api/staff', {

      name: name.value,
      email: email.value,
      position: position.value,
      department: department.value
    }, { withCredentials: true })

    alert('Personal registrado con éxito ✅')

    // Limpiar formulario
    name.value = ''
    email.value = ''
    position.value = ''
    department.value = ''
  } catch (error) {
    console.error('Error al registrar personal:', error.response || error)
    alert('Error al registrar. Revisa la consola para más detalles.')
  }
}
</script>


<style scoped>
.staff-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
input, button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
</style>
