const { SyncHook, AsyncParallelHook } = require('../lib');

const hook = new SyncHook(["arg1", "arg2", "arg3"]);

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(["newSpeed"]),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
    };
  }

  /* ... */
}

const myCar = new Car();

// Use the tap method to add a consument
myCar.hooks.brake.tap("WarningLampPlugin", () => (console.log('WarningLampPlugin start')));

myCar.hooks.brake.call();
myCar.hooks.brake.call();