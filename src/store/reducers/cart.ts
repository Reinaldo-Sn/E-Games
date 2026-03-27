import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  //initialState é um objeto que recebe um array de game que está tipado para receber todos os dados da api
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      //para acessar esse add temos o nosso cartSlice.actions.<add> sendo o add qualquer reducer que criarmos
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
