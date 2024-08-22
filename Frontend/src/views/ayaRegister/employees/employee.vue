<script setup>
import { reactive, ref } from 'vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import {mdiMonitorCellphone} from "@mdi/js";
import NotificationBar from "@/components/NotificationBar.vue";

const form = reactive({})

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
      <p style="font-size: 25px; text-align: center"><strong>Agregar Funcionario</strong></p>
      <CardBox form @submit.prevent="submit">
        <FormField label="Nombre">
          <FormControl v-model="form.name"  />
        </FormField>
        <FormField label="Primer Apellido">
          <FormControl v-model="form.firstLastName"  />
        </FormField>
        <FormField label="Segundo Apellido">
          <FormControl v-model="form.secondtLastName"  />
        </FormField>
        <FormField label="Cedula">
          <FormControl v-model="form.legalId"  />
        </FormField>
        <FormField label="Genero">
          <FormControl v-model="form.gender"  />
        </FormField>
        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Agregar" @click="submit" />
            <BaseButton type="reset" color="info" outline label="Cancelar" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
