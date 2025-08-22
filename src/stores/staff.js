import { defineStore } from 'pinia'
import axios from '@/api/axios'

export const useStaffStore = defineStore('staff', {
    state: () => ({
        staffList: []
    }),

    actions: {
        async fetchAll() {
            const res = await axios.get('/api/staff')
            this.staffList = res.data
        },

        async register(staffData) {
            const res = await axios.post('/api/staff', staffData)
            this.staffList.push(res.data)
        }
    }
})
