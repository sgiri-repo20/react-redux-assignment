const initialState = {
    modalType: null,
    isModalOpen: false
  }
  
export default function modal(state = initialState, action) {
    switch (action.type) {
      case 'SHOW_MODAL':
        return {
          modalType: action.modalType,
          isModalOpen: !action.isModalOpen
        }      
      default:
        return state
    }
  }