import Toast from './Toast'
import { createApp } from 'vue';

export default {
  install: (app) => {
    const instance = createApp(Toast).mount(
      document.createElement('div')
    );
    document.body.appendChild(instance.$el);
    app.config.globalProperties.$toast = instance
  }
};
