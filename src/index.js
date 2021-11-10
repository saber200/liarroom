import { registerMicroApps, start } from 'qiankun';
import './index.css';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'reactApp2',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/app-react2',
  }
]);
// 启动 qiankun
start();