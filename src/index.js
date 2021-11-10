import { registerMicroApps, start } from 'qiankun';
import './index.css';

registerMicroApps([
  // 遗产游戏
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/heritagegame',
  }
]);
// 启动 qiankun
start();