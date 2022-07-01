import { Store } from 'vuex'
import movie from './modules/movie'

const createStore = () => {
  return new Store({
    modules: {
      movie,
    },
  })
}

export default createStore
