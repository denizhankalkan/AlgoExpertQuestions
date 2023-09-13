class EventTarget {

   constuctor() {
    this.listeners = new Map();
   }

  addEventListener(name, callback) {
    
    if(!this.listeners.has(name)) this.listeners.get(name, new Set());
    this.listeners.get(name).add(callback);
  }

  removeEventListener(name, callback) {
    this.listeners.get(name)?.delete(callback);
  }

  dispatchEvent(name) {
   this.listeners.get(name)?.forEach(callback => callback());
  }
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
