import rootReducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
export const withProvider = Component = (props) => {
    return <Provider {...props} store={store}/>
}
export default createStore(rootReducer)
