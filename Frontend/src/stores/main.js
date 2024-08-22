import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'


export const useMainStore = defineStore('main', () => {
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const history = ref([])
  const employees = ref([])
  const dependencies = ref([])
  const sites = ref([])
  const workFromHome = ref([])
  const workInSite = ref([])

  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

  function fetchSampleClients() {
    axios
      .get(`data-sources/clients.json?v=3`)
      .then((result) => {
        clients.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleEmployees() {
    axios
      .get(`data-sources/employees.json?v=3`)
      .then((result) => {
        employees.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleHistory() {
    axios
      .get(`data-sources/history.json`)
      .then((result) => {
        history.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleDependencies() {
    axios
      .get(`data-sources/dependencies.json?v=3`)
      .then((result) => {
        dependencies.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleSites() {
    axios
      .get(`data-sources/sites.json?v=3`)
      .then((result) => {
        sites.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleWorkFromHome() {
    axios
      .get(`data-sources/workFromHome.json?v=3`)
      .then((result) => {
        workFromHome.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleWorkInSite() {
    axios
      .get(`data-sources/workInSite.json?v=3`)
      .then((result) => {
        workInSite.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    employees,
    workFromHome,
    dependencies,
    workInSite,
    sites,
    history,
    setUser,
    fetchSampleClients,
    fetchSampleHistory,
    fetchSampleEmployees,
    fetchSampleDependencies,
    fetchSampleSites,
    fetchSampleWorkFromHome,
    fetchSampleWorkInSite
  }
})
