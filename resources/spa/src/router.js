import * as VueRouter from 'vue-router';

import MainPage from '@/pages/Main'
import TextPage from '@/pages/Text'
import VideoPage from '@/pages/Video'
import AudioPage from '@/pages/Audio'
import ResultPage from '@/pages/Result'
import CardPreview from '@/pages/CardPreview'

const routes = [
  {
    name: 'main',
    path: '/',
    component: MainPage,
    meta: {
      title: 'Add Virtual Gift Message'
    },
  },
  {
    name: 'text',
    path: '/text/:cardId?',
    component: TextPage,
    props: (route) => {
      return route.params
    }
  },
  {
    name: 'video',
    path: '/video/:cardId?',
    component: VideoPage,
    props: (route) => {
      return route.params
    }
  },
  {
    name: 'audio',
    path: '/audio/:cardId?',
    component: AudioPage,
    props: (route) => {
      return route.params
    }
  },
  {
    name: 'card-preview',
    path: '/card/preview/:cardId',
    component: CardPreview,
    meta: {
      title: 'Add Virtual Gift Message'
    },
    props: (route) => {
      return route.params
    }
  },
  {
    name: 'result',
    path: '/result/:cardId?',
    component: ResultPage,
    meta: {
      title: 'Confirm Message'
    },
    props: (route) => {
      return route.params
    }
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.NODE_ENV == 'production' ? process.env.VUE_APP_PROXY_PATH : null),
  routes,
});

export default router
