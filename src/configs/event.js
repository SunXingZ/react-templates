import { EventEmitter } from 'events';

class Emitter extends EventEmitter{};

const AppEventEmitter = new Emitter();

export default AppEventEmitter;