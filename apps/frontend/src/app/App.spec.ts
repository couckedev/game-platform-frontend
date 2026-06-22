import { mount } from '@vue/test-utils';
import router from '../router';
import App from './App.vue';

describe('App', () => {
  it('renders properly', async () => {
    const wrapper = mount(App, { global: { plugins: [router] } });
    await router.isReady();
    expect(wrapper.text()).toContain('Welcome frontend 👋');
  });
});
