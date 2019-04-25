import { GET_DATA,ADD_DATA,DELETE_DATA,ITEMS_LOADING,UPDATE } from '../actions/types';

const initialState = {
    data1 : [],
    loading: true
    // tittle: 'Mystery Room lol',
    // date: "2nd - 4th Feb 2019",
    // desc: "lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high life accusamus terry richardson ad squid. Nihilanim keffiyeh helvetica, craft beer labore wes anderson crednesciunt sapiente ea proident.",
    // cmoreAns: "see more",
    // collapse: false,
    // isOpen: false,
    // time: '14:00',
    // Venue: 'F-102',
    // pageCount: 15,
    // anmt: "sdksfcccpsfl ;slkd;sldk sldqkd;elqp;we ;c,asd lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high li lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high li",
    // anmt2: "sdksfcccpsfl ;slkd;sldk sldqkd;elqp;we ;c,asd lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high li lol bullshit fjwaenfweklnf Anim pariatur cliche reprehenderit ,enim eiusmod high li",
    // fc: 'Vardhan'
}

export default function(state = initialState,action) {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                data1 : [action.payload],
                loading: false
            }
        case ADD_DATA:
            return {
                ... state,
                data1 : [action.payload]
            }
        case UPDATE:
            return {
                ...state,
                data1 : [action.payload,...state.data1]
            }
        case DELETE_DATA:
            return {
                ...state 
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}