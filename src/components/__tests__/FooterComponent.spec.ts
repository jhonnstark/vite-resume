import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import FooterComponent from '../FooterComponent.vue'

const mockI18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    en: { footer: { select: 'Select language' } },
    es: { footer: { select: 'Seleccionar idioma' } }
  }
})

describe('FooterComponent', () => {
  it('renders footer with language switcher', () => {
    const wrapper = mount(FooterComponent, {
      global: {
        plugins: [mockI18n],
        mocks: {
          $i18n: { locale: 'en' }
        }
      }
    })

    expect(wrapper.find('.footer').exists()).toBe(true)
    expect(wrapper.find('.footer-flag').exists()).toBe(true)
  })

  it('displays language switch elements', () => {
    const wrapper = mount(FooterComponent, {
      global: {
        plugins: [mockI18n],
        mocks: {
          $i18n: { locale: 'en' }
        }
      }
    })

    expect(wrapper.find('.footer-lc').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('is clickable', async () => {
    const wrapper = mount(FooterComponent, {
      global: {
        plugins: [mockI18n],
        mocks: {
          $i18n: { locale: 'en' }
        }
      }
    })

    const flag = wrapper.find('.footer-flag')
    expect(flag.exists()).toBe(true)

    // Test that click event can be triggered without error
    await flag.trigger('click')
    expect(flag.exists()).toBe(true)
  })
})
