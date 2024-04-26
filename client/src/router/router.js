import '../App.css';
import '../index.css';
import '../css/index.css';

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import All from '../comps/canislupus/flujo/All';
import Detail from '../comps/canislupus/flujo/Detail';
import Crossings from '../comps/crossings/flujo/All';
import Home from '../comps/home/Home';
import Contact from '../comps/contact/Conctact';
import Help from '../comps/Help/Help';
import Login from '../comps/header/log/login';
import Logup from '../comps/header/log/logup';
// import Add from '../comps/canislupus/Add';
// import Admin from '../components/admin/Admin';
// import Login from '../components/log/Login';
// import Logup from '../components/log/Logup';
// import Contact from '../components/contact/Contact';
// import HowtoBuy from '../components/howtobuy/HowtoBuy';
// import Canis from '../components/dogs/Dogs';
// import Header from '../components/header/Header';
// import Gestion from '../newComps/main/Gestion';

// const arrayRoutes = [
//   {
//     path: '/',
//     element: <App/>
//   },
// ]; console.log(arrayRoutes[0].path)

export const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/inicio',
    element: <App inner={<Home/>}/>
  },
  {
    path: '/cruces',
    element: <App inner={<Crossings admin/>}/>
  },
  // {
  //   path: '/admin',
  //   element: <App inner={<Admin/>}/>
  // },
  {
    path: '/login-user',
    element: <App inner={<Login/>}/>
  },
  // {
  //   path: '/login-admin',
  //   element: <App inner={<Login as={'admin'}/>}/>
  // },
  {
    path: '/logup-user',
    element: <App inner={<Logup/>}/>
  },
  // {
  //   path: '/logup-admin',
  //   element: <App inner={<Logup as={'admin'}/>}/>,
  // },
  {
    path: '/contacto',
    element: <App inner={<Contact/>}/>,
  },
  {
    path: '/ayuda',
    element: <App inner={<Help/>}/>,
  },
  {
    path: '/ejemplares',
    element: <App inner={<All admin/>}/>,
  },
  {
    path: '/ejemplares/detail',
    element: <App inner={<Detail/>}/>,
  },
  // {
  //   path: '/gestion',
  //   element: <Gestion/>
  // },
]);