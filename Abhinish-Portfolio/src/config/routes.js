import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import Contact from '@/pages/Contact'

const routes = [
  {
    path: '',
    redirect: true,
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    label: 'Home'
  },
  {
    path: '/about',
    component: About,
    label: 'About'
  },
  {
    path: '/projects',
    component: Projects,
    label: 'Projects'
  },
  {
    path: '/skills',
    component: Skills,
    label: 'Skills'
  },
  {
    path: '/contact',
    component: Contact,
    label: 'Contact'
  },
  {
    path: '*',
    component: Home,
    label: null

  }
];


export default routes