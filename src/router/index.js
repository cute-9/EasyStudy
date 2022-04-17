import VueRouter from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: '/layout/home',
    component: () => import('@/views/Layout/Layout')
  },
  {
    path: "/login",
    component: () => import('@/views//Login/Login')
  },
  {
    path: "/layout",
    redirect: "/layout/home",
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: "profile",
        component: () => import("@/views/Profile/Myinfo")
      },
      {
        path: "home",
        component: () => import('@/views/Home/Home'),
      },
    ]
  },
  {path:'/createExam',
  redirect:'/createExam/ExamPage',
  component: () => import('@/views/CreateExam/CreateExam'),
  children:[{
    path:'dataManagement',
    component: () => import('@/views/DataManagement/DataManagement'),
  },
  {
    path:'examPage',
    name:'examPage',
    component: () => import('@/views/ExamPage/ExamPage'),
  },
  {
    path:'addStudent',
    component: () => import('@/views/AddStudent/AddStudent'),
  },
  {
    path: "lookRemark",
    component: () => import('@/views/LookRemark/LookRemark')
  }

]
  },
  {
    path: "*",
    component: () => import('@/views/NoMatch')
  },
  {
    path: "/createQuestion",
    component: () => import('@/views/CreateQuestion/CreateQuestion')
  },
  {
    path:"/automaticQuestion",
    component: () => import('@/views/AutomaticQuestion/AutomaticQuestion')
  },
  {
    path:"/issueStting",
    component: () => import('@/views/IssueSetting/IssueSetting')
  },
  {
    path:'/RecycleBin',
    component: () => import('@/views/RecycleBin/RecycleBin'),
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router