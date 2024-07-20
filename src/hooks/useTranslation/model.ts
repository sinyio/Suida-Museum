import { create } from "zustand"
import { Languages } from "./useTranslation"

interface LanguageStoreState {
    language: Languages;
    setLanguage: (language: Languages) => void;
}

export const useLanguageStore = create<LanguageStoreState>()((set) => ({
    language: (localStorage.getItem('language_storage') as Languages) || 'ru',
    setLanguage: (language) => {
        localStorage.setItem('language_storage', language)
        set(() => ({ language }))
    }
}))