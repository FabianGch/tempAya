<script setup>
import SectionMain from "@/components/SectionMain.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import {computed, ref} from 'vue'
import {useMainStore} from '@/stores/main'
import CardBoxModal from '@/components/CardBoxModal.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import {useRouter} from "vue-router";

defineProps({
  checkable: Boolean
})

const mainStore = useMainStore()
const items = computed(() => mainStore.dependencies)
const isModalActive = ref(false)
const isModalDangerActive = ref(false)
const perPage = ref(5)
const currentPage = ref(0)

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
const router = useRouter()
const addNewDependencies = () => {
  router.push({ path: '/dependencies/dependencieForm' })
}

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <CardBoxModal v-model="isModalActive" title="Sample modal">
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
      </CardBoxModal>

      <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <p>This is sample modal</p>
      </CardBoxModal>
      <BaseButtons type="justify-start lg:justify-end" no-wrap>
        <BaseButton color="info" label="Agregar dependencia" @click="addNewDependencies" />
      </BaseButtons>
      <br/>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        <tr v-for="client in itemsPaginated" :key="client.id">
          <td data-label="legalId">
            {{ client.id }}
          </td>
          <td data-label="legalId">
            {{ client.name }}
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

<style scoped>

</style>
