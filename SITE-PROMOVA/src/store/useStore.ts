import { create } from 'zustand';

interface AppState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isContactModalOpen: boolean;
  setContactModalOpen: (isOpen: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: 'home',
  setActiveSection: (activeSection) => set({ activeSection }),
  isContactModalOpen: false,
  setContactModalOpen: (isContactModalOpen) => set({ isContactModalOpen }),
}));
