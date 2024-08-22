<script setup>
import SectionMain from "@/components/SectionMain.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import {computed, ref} from 'vue'
import {useMainStore} from '@/stores/main'
import {mdiEye, mdiMonitorCellphone, mdiTrashCan} from '@mdi/js'
import CardBoxModal from '@/components/CardBoxModal.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import {useRouter} from "vue-router";
import NotificationBar from "@/components/NotificationBar.vue";
import {onMounted} from "vue";
defineProps({
  checkable: Boolean
})


const mainStore = useMainStore()
const items = computed(() => mainStore.employees)
const isModalActive = ref(false)
const isModalDangerActive = ref(false)
const perPage = ref(5)
const currentPage = ref(0)
const router = useRouter()


onMounted(()=>{
  let res = localStorage.getItem('IsLogged')
  console.log(res)
  if (res === '0' || res === null)
    router.push('/login')
})

const itemsPaginated = computed(() =>
  items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(items.value.length / perPage.value))
const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const selectedEmployee = ref({})
const deletedEmployee = ref({})
const showModal = (val) => {
  selectedEmployee.value = val
  isModalActive.value = true;
}

const showDeleteModal = (val) => {
  deletedEmployee.value = val
  isModalDangerActive.value = true
}

//todo fix
const addNewEmployee = () => {
  router.push({ path: '/employees/employee' })
}


</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <CardBoxModal v-model="isModalActive" :title="selectedEmployee.name">
        <p>Primer apellido: {{ selectedEmployee.firstLastName }}</p>
        <p>Segundo apellido: {{ selectedEmployee.secondLastName }}</p>
        <p>Cedula: {{ selectedEmployee.legalId }}</p>
        <p>Genero: {{ selectedEmployee.gender }}</p>
        <p>Id: {{ selectedEmployee.id }}</p>
      </CardBoxModal>

      <CardBoxModal v-model="isModalDangerActive" title="Eliminar" button="danger" has-cancel>
        <p>Id: {{ deletedEmployee.id }}</p>
        <p>Nombre: {{ deletedEmployee.name }} {{ deletedEmployee.firstLastName }}
          {{ deletedEmployee.secondLastName }}</p>
      </CardBoxModal>


      <BaseButtons type="justify-start lg:justify-end" no-wrap>
        <BaseButton color="info" label="Agregar funcionario" @click="addNewEmployee" />
      </BaseButtons>
      <br/>
      <table>
        <thead>
        <tr>
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Apellido</th>
          <th>Genero</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        <tr v-for="client in itemsPaginated" :key="client.id">
          <td data-label="legalId">
            {{ client.legalId }}
          </td>
          <td data-label="name">
            {{ client.name }}
          </td>
          <td data-label="firstLastName">
            {{ client.firstLastName }}
          </td>
          <td data-label="secondLastName">
            {{ client.secondLastName }}
          </td>
          <td data-label="gender">
            {{ client.gender }}
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButtons type="justify-start lg:justify-end" no-wrap>
              <BaseButton color="info" :icon="mdiEye" small @click="showModal(client)"/>
              <BaseButton
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="showDeleteModal(client)"
              />
            </BaseButtons>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <BaseLevel>
          <BaseButtons>
            <BaseButton
              v-for="page in pagesList"
              :key="page"
              :active="page === currentPage"
              :label="page + 1"
              :color="page === currentPage ? 'lightDark' : 'whiteDark'"
              small
              @click="currentPage = page"
            />
          </BaseButtons>
          <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </BaseLevel>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
