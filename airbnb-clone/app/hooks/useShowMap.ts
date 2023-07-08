import {create } from 'zustand'; 

interface ShowMapStore {
    isOpen: boolean, 
    onOpen: () => void, 
    onClose: () => void, 
}


const useShowMap = create<ShowMapStore>((set) => ({
    isOpen: false, 
    onOpen: () => set({isOpen: true}), 
    onClose: () => set({isOpen:false})
})); 

export default useShowMap; 