import {useI18n} from "@shopify/react-i18n";

const ja = {
  "Apple": {
    "text": 'シナノゴールド'
  }
}

const en: typeof ja = {
  "Apple": {
    "text": 'shinano gold'
  }
}

export const I18nText = () => {
  const [i18n] = useI18n({
    id: 'Apple',
    translations(locale) {
      if (locale === 'ja') {
        return ja
      }
      return en
    }
  })

  return (
    <p id="result">{i18n.translate('Apple.text')}</p>
  )
}