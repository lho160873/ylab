const ADD_FILTR = 'ADD_FILTR';
const CHANGE_FAVORITE = 'CHANGE_FAVORITE';

const filtrReducer = (state, action) => {
    switch (action.type) {
        case ADD_FILTR:
            let filtr = state.filtrs.find(item => item.id == action.idFiltr);
            filtr.isActive = !filtr.isActive;
            return state;
        case CHANGE_FAVORITE:
            let service = state.services.find(item => item.id == action.idService);
            service.isFavorites = !service.isFavorites;
            localStorage.setItem("services", JSON.stringify(state.services));
            return state;
        default:
            return state;
    }
}

export const addFiltrActionCreator = (value) => ({ type: ADD_FILTR, idFiltr: value })
export const changeFavoriteActionCreator = (value) => ({ type: CHANGE_FAVORITE, idService: value })


export default filtrReducer;