export default { //Se exporta un objeto como tal

    name: 'main',
    component: () => import(/* webpackChunkName: "main-layout" */ '@/modules/main/layouts/MainLayout.vue'),
    children: [
        {
            path: '',
            name: 'homeview',
            component: () => import(/* webpackChunkName: "homeview" */ '@/modules/main/views/HomeView.vue'),
        },
        // {
        //     path: ':id',
        //     name: 'entry',
        //     component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue'),
        //     props: (route) => { //Recibe la ruta. Y esto es solo cuando se crea la ruta. Retorna el id como una property en el componente EntryView
        //         return {
        //             id: route.params.id
        //         }
        //     }
        // }
    ]

}