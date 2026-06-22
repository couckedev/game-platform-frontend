import './styles.css';
import { createApp } from 'vue';
import App from './app/App.vue';
import { bootstrapApp } from './bootstrap/bootstrap';
import router from './router';

const app = createApp(App);
await bootstrapApp(app);
app.use(router);
app.mount('#root');
