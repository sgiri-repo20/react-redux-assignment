export const SHOW_MODAL = 'SHOW_MODAL';
export function editCart(){
    //console.log('A book has been selected')
    return {
        type: 'SHOW_MODAL',
        isModalOpen: false ,
        modalType: 'EDIT_CART'     
    }
}