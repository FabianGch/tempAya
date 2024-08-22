<script setup>
import {reactive, ref} from 'vue'
import {mdiAccount} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'

import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import NotificationBarInCard from '@/components/NotificationBarInCard.vue'
import NotificationBar from "@/components/NotificationBar.vue";



const form = reactive({
  name: '',
})


const formStatusWithHeader = ref(true)

const formStatusCurrent = ref(0)

const formStatusOptions = ['info', 'success', 'danger', 'warning']

const formStatusSubmit = () => {
  formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
    ? formStatusCurrent.value + 1
    : 0
}

const messageIsVisible = ref(false)

const submit = () => {
  messageIsVisible.value = true
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <NotificationBar color="info" :icon="mdiMonitorCellphone" v-if="messageIsVisible">
        <b>Agregado</b>
      </NotificationBar>
      <p style="font-size: 25px; text-align: center"><strong>Agregar Dependencia</strong></p><br/>
      <CardBox
        class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"
        is-form
        is-hoverable
        @submit.prevent="formStatusSubmit"
      >
        <NotificationBarInCard
          :color="formStatusOptions[0]"
          :is-placed-with-header="formStatusWithHeader"
        >
        </NotificationBarInCard>
        <FormField label="Nombre Dependencia">
          <FormControl
            v-model="form.name"
            :icon-left="mdiAccount"
          />
        </FormField>

        <template #footer>
          <BaseButton label="Agregar" type="submit" color="info" @click="submit"/>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
