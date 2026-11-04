import { renderToString } from 'react-dom/server';
import { Site } from './Site';

export function render(path = '/') {
  return renderToString(<Site path={path} />);
}
