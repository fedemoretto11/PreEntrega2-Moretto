import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemList/ItemListContainer'
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer'
import Error404 from '../Mensajes/Error404'
import Cart from './Cart'


function Main() {


  return (
    <main id='main' className='min-h-screen'>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:id' element={<ItemListContainer/>}></Route>
        <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </main>
  )
}

export default Main