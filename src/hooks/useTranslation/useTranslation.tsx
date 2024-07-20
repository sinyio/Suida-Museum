import { useEffect, useState } from 'react'
import translations from '../../static/texts.json'
import { useLanguageStore } from './model';

export type Languages = Exclude<keyof typeof translations, 'structure'>
export type Sections = keyof typeof translations.structure

type TranslationByLanguageAndSection<L extends Languages, S extends Sections> = typeof translations[L][S];

interface useTranslationProps {
  (
    section?: Sections,
    language?: Languages,
  ): {
    language: Languages;
    text?: TranslationByLanguageAndSection<Languages, Sections>;
  }
}

export const useTranslation: useTranslationProps = function(section, language) {
  const [result, setResult] = useState<TranslationByLanguageAndSection<Languages, Sections>>()
  const { language: importedLanguage } = useLanguageStore((state) => state)

  const usableLanguage = language ? language : importedLanguage

  console.log(usableLanguage)

  useEffect(() => {
    if (section) {
      setResult(translations[usableLanguage][section])
    }
  }, [section, language, usableLanguage])

  return {
    language: usableLanguage,
    text: result,
  }
}