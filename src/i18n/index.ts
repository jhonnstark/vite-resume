import en from './en'
import es from './es'
import { createI18n } from 'vue-i18n'

const messages = {
  en,
  es
}

const i18n = createI18n({
  locale: 'en-US',
  legacy: false,
  messages
})

export default i18n
