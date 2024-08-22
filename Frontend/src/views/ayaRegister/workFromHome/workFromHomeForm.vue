<script setup>
import {reactive, ref} from 'vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import {mdiMonitorCellphone} from "@mdi/js";

const form = reactive({
  hasContract: true
})


const messageIsVisible = ref(false)

const submit = () => {
  messageIsVisible.value = true
}

const employees = [
  {id: 1, label: "Adan"},
  {id: 2, label: "Floyd"},
  {id: 3, label: "Storm"},
  {id: 4, label: "Si"},
  {id: 5, label: "Lanny"},
  {id: 6, label: "Julian"},
  {id: 7, label: "Henry"},
  {id: 8, label: "Abbey"},
  {id: 9, label: "Elihu"},
  {id: 10, label: "Wallie"},
  {id: 11, label: "Abby"},
  {id: 12, label: "Meidl"},
  {id: 13, label: "Massimo"},
  {id: 14, label: "Bevan"},
  {id: 15, label: "Riva"},
  {id: 16, label: "Port"},
  {id: 17, label: "Yelena"},
  {id: 18, label: "Guthry"},
  {id: 19, label: "Cortie"},
  {id: 20, label: "Cortney"},
  {id: 21, label: "Gabie"},
  {id: 22, label: "Marinna"},
  {id: 23, label: "Chloris"},
  {id: 24, label: "Bellina"},
  {id: 25, label: "Elyn"},
  {id: 26, label: "Immanuel"},
  {id: 27, label: "Charity"},
  {id: 28, label: "Vivianne"},
  {id: 29, label: "Chiquita"},
  {id: 30, label: "Harriette"},
  {id: 31, label: "Dominga"},
  {id: 32, label: "Christabel"},
  {id: 33, label: "Sinclare"},
  {id: 34, label: "Shirleen"},
  {id: 35, label: "Kliment"},
]

const employeesForWorkFromHome =  [
    {id: 48, label: "Elset"},
    {id: 49, label: "Lamont"},
    {id: 50, label: "Rozanne"},
    {id: 51, label: "Corine"},
    {id: 52, label: "Theodoric"},
    {id: 53, label: "Barbey"},
    {id: 54, label: "Jesselyn"},
    {id: 55, label: "Alvin"},
    {id: 56, label: "Denise"},
    {id: 57, label: "Greggory"},
    {id: 58, label: "Conchita"},
    {id: 59, label: "Alene"},
    {id: 60, label: "Izak"},
    {id: 61, label: "Cheryl"},
    {id: 62, label: "Earlie"},
    {id: 63, label: "Layton"},
    {id: 64, label: "Felisha"},
    {id: 65, label: "Denyse"},
    {id: 66, label: "Konstanze"},
    {id: 67, label: "Niels"},
    {id: 68, label: "Rowan"},
    {id: 69, label: "Marijn"},
    {id: 70, label: "Brent"},
    {id: 71, label: "Harriot"},
    {id: 72, label: "Stanislaw"},
    {id: 73, label: "Laurene"},
    {id: 74, label: "Lilah"},
    {id: 75, label: "Milty"},
    {id: 76, label: "Rennie"},
    {id: 77, label: "Jason"},
    {id: 78, label: "Danette"},
    {id: 79, label: "Georgia"},
    {id: 80, label: "Paul"},
    {id: 81, label: "Isabelita"},
    {id: 82, label: "Renato"},
    {id: 83, label: "Abby"},
    {id: 84, label: "Fowler"},
    {id: 85, label: "Tori"},
    {id: 86, label: "Levey"},
    {id: 87, label: "Chic"},
    {id: 88, label: "Coriss"},
    {id: 89, label: "Bartel"},
    {id: 90, label: "Boniface"},
    {id: 91, label: "Kipp"},
    {id: 92, label: "Cloe"},
    {id: 93, label: "Aurore"},
    {id: 94, label: "Mady"},
    {id: 95, label: "Glenn"},
    {id: 96, label: "Sophronia"},
    {id: 97, label: "Welbie"},
    {id: 98, label: "Willey"},
    {id: 99, label: "Adler"},
    {id: 100, label: "Mariellen"}
  ]
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <NotificationBar color="info" :icon="mdiMonitorCellphone" v-if="messageIsVisible">
        <b>Agregado</b>
      </NotificationBar>
      <p style="font-size: 25px; text-align: center"><strong>Agregar Teletrabajo</strong></p><br/>
      <CardBox form @submit.prevent="submit">
        <FormField label="Fecha">
          <FormControl v-model="form.date"/>
        </FormField>
        <FormField label="Memorando">
          <FormControl v-model="form.memo"/>
        </FormField>
        <FormField label="Jefatura que remite">
          <FormControl v-model="form.remite" :options="employees"/>
        </FormField>
        <FormField label="Jefatura que firma">
          <FormControl v-model="form.firma" :options="employees"/>
        </FormField>
        <FormField label="Cantidad de horas">
          <FormControl v-model="form.hours"/>
        </FormField>
        <FormField label="Funcionario">
          <FormControl v-model="form.employee" :options="employeesForWorkFromHome" />
        </FormField>
        <FormField label="Cargo">
          <FormControl v-model="form.cargo"/>
        </FormField>
        <FormField label="Tiene contrato">
          <FormCheckRadioGroup
            v-model="form.hasContract"
            name="Contrato"
            :options="{ 'Tiene contrado': '' }"
          />
        </FormField>
        <FormField label="Observaciones">
          <FormControl v-model="form.comments"/>
        </FormField>
        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Agregar" @click="submit" />
            <BaseButton type="reset" color="info" outline label="Cancelar"/>
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
