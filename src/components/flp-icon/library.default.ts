import { getBasePath } from '../../utils/base-path.js';
import type { IconLibrary } from './library.js';

const library: IconLibrary = {
  name: 'default',
  resolver: name => getBasePath(`src/assets/icons/${name}.svg`)
};

export default library;
