import {I18nManager, I18nContext} from "@shopify/react-i18n";
import {I18nText} from "./I18nText";

export const I18nMain = () => {
  const locale = navigator.language

  const i18nManager = new I18nManager({
    locale
  })

  return (
    <>
      <I18nContext.Provider value={i18nManager}>
        <I18nText />
      </I18nContext.Provider>
    </>
  )
}