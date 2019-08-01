import tv4 from 'tv4';
//import stateChecker from 'middlewares/stateChecker';
import stateSchema from './stateSchemal';


export default ({dispatch, getState }) => (next) => (action) => {
    next(action);

    if(!tv4.validate(getState(), stateSchema) ){
        console.warn('Invalid state schema detected');
    }
}



