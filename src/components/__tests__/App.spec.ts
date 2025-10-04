import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../../App.vue'

// Mock components to avoid dependency issues
const MockMenuHeader = { template: '<header data-testid="menu-header">Menu Header</header>' }
const MockFooterComponent = { template: '<footer data-testid="footer-component">Footer</footer>' }
const MockHome = { template: '<div>Home</div>' }

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: MockHome }]
})

describe('App', () => {
  it('renders the main layout structure', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          MenuHeader: MockMenuHeader,
          FooterComponent: MockFooterComponent,
          RouterView: {
            template: `<transition name="fade" mode="out-in">
              <div class="main">
                <div>Router View Content</div>
              </div>
            </transition>`
          }
        }
      }
    })

    expect(wrapper.find('[data-testid="menu-header"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="footer-component"]').exists()).toBe(true)
    expect(wrapper.find('.main').exists()).toBe(true)
  })

  it('has proper component structure', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          MenuHeader: MockMenuHeader,
          FooterComponent: MockFooterComponent,
          RouterView: { template: '<div class="router-content">Content</div>' }
        }
      }
    })

    // Test that components are rendered by checking their content
    expect(wrapper.find('[data-testid="menu-header"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="footer-component"]').exists()).toBe(true)
  })
})
