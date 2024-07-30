import create from "zustand";
import { IEventDetail } from "../pages/EventDetailPage/EventDetailPage";

interface LanguageStoreState {
  event: IEventDetail;
  setEvent: (event: IEventDetail) => void;
}

export const useEventStore = create<LanguageStoreState>((set) => ({
  event: {
    id: "",
    title: "",
    full_description: "",
    date: "",
    backdrop_image: "",
  },
  setEvent: (event) => set({ event }),
}));
