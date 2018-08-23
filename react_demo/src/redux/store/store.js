import { createStore } from 'redux'
import reducer from '../reducer/reducer'
//写那么一行注释，测试一下
const store = createStore(reducer)
export default store
