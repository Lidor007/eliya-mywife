import { App } from './App';
import { Guide2 } from './Guide2';

export function Site({ path }: { path: string }) {
  return path.replace(/\/+$/, '') === '/guide2' ? <Guide2 /> : <App />;
}
