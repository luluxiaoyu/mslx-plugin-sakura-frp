import './style.css';
import SakuraFrp from './views/SakuraFrp/index.vue';

export const pluginConfig = {
    name: 'mslx-plugin-sakura-frp',
    version: '1.0.0',

    routes: [],
    extensions: [
        {
            slot: 'frp-create-provider',
            component: SakuraFrp,
            label: 'SakuraFrp 官版Frpc',
        }
    ]
};