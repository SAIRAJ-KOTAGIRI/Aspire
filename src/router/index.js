import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Aspire",
    component: () => import('@/components/MainMenu'),
    force: true,
    children: [
      { path: '/home', name: 'home', component: () => import('@/components/HomeComp') },
      { path: '/', name: 'card', component: () => import('@/components/CardComp') },
      { path: '/payments', name: 'payment', component: () => import('@/components/PaymentComp') },
      { path: '/credits', name: 'credit', component: () => import('@/components/CreditComp') },
      { path: '/settings', name: 'setting', component: () => import('@/components/SettingComp') }
    ]
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;