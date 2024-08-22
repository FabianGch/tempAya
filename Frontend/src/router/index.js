import { createRouter, createWebHashHistory } from 'vue-router'
import Style from '@/views/StyleView.vue'
import Home from '@/views/HomeView.vue'

const routes = [
  // {
  //   meta: {
  //     title: 'Select style'
  //   },
  //   path: '/',
  //   name: 'style',
  //   component: Style
  // },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/ayaRegister/employees/employeesList.vue')
  },
  {
    meta: {
      title: 'Empleados'
    },
    path: '/employees/employeesList',
    name: 'employees',
    component: () => import('@/views/ayaRegister/employees/employeesList.vue')
  },
  {
    meta: {
      title: 'Dependencias'
    },
    path: '/dependencies/dependenciesList',
    name: 'dependencies',
    component: () => import('@/views/ayaRegister/dependencies/dependenciesList.vue')
  },
  {
    meta: {
      title: 'Sedes'
    },
    path: '/sites/sitesList',
    name: 'sites',
    component: () => import('@/views/ayaRegister/sites/sitesList.vue')
  },
  {
    meta: {
      title: 'Teletrabajo'
    },
    path: '/workFromHome/workFromHomeList',
    name: 'workFromHome',
    component: () => import('@/views/ayaRegister/workFromHome/workFromHomeList.vue')
  },
  {
    meta: {
      title: 'Presencial'
    },
    path: '/workInSite/workInSiteList',
    name: 'workInSite',
    component: () => import('@/views/ayaRegister/workInSite/workInSiteList.vue')
  },
  {
    meta: {
      title: 'Agregar Empleado'
    },
    path: '/employees/employee',
    name: 'employee',
    component: () => import('@/views/ayaRegister/employees/employee.vue')
  },
  {
    meta: {
      title: 'Agregar Dependencia'
    },
    path: '/dependencies/dependencieForm',
    name: 'dependencieForm',
    component: () => import('@/views/ayaRegister/dependencies/dependencieForm.vue')
  },
  {
    meta: {
      title: 'Agregar Sede'
    },
    path: '/sites/site',
    name: 'siteForm',
    component: () => import('@/views/ayaRegister/sites/site.vue')
  },
  {
    meta: {
      title: 'Asignar Teletrabajo'
    },
    path: '/workFromHome/workFromHomeForm',
    name: 'workFromHomeForm',
    component: () => import('@/views/ayaRegister/workFromHome/workFromHomeForm.vue')
  },
  {
    meta: {
      title: 'Asignar Trabajo Presencial'
    },
    path: '/workInSite/workInSiteForm',
    name: 'workInSiteForm',
    component: () => import('@/views/ayaRegister/workInSite/workInSIteForm.vue')
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
