import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import movixStore from './store/index.js'
import { Provider } from 'react-redux'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import {Home,Details,SearchResult,Explore,PageNotFound} from "./pages/Allpagecomponents.jsx"

const movixRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path=':mediaType/:id' element={<Details/>}/>
            <Route path='search/:query' element={<SearchResult/>}/>
            <Route path='explore/:mediaType' element={<Explore/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={movixStore}>
    <RouterProvider router={movixRouter}/>
    </Provider>
)
