import { combineReducers} from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler livro',
    list: [{
      _id: 1,
      description: 'Pagar fatura do cartao',
      done: true
    }, {
      _id: 2,
      description: 'Reuniao com a equipe',
      done: false
    },{
      _id: 3,
      description: 'Consulta medica',
      done: false
    }]
  })
})

export default rootReducer