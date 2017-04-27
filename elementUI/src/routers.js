export default [{
        path: '/',
        component: resolve => require(['./pages/home.vue'], resolve)
    },
    {
        path: '/table',
        component: resolve => require(['./pages/table.vue'], resolve)
    },
    {
        path: '/dialog',
        component: resolve => require(['./pages/dialog.vue'], resolve)
    },
    {
        path: '/steps',
        component: resolve => require(['./pages/steps.vue'], resolve)
    },
    {
        path: '/form',
        component: resolve => require(['./pages/form.vue'], resolve)
    }
]