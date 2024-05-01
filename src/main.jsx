import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import FormWithHook from './02-useEffect/FormWithHook'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
// import Memorize from './06-memos/Memorize'
// import MemoHook from './06-memos/MemoHook'
// import Layout from './05-useLayout-Effect/Layout'
// import CallbackHook from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-reducer/intro-reducer'
// import TodoApp from './08-reducer/TodoApp'
import MainApp from './09-useContext/MainApp';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
      <MultipleCustomHooks/>  
    </BrowserRouter>
    // </React.StrictMode>
)
