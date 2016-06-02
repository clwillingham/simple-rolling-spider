var RollingSpider = require("rolling-spider");
var deasync = require("deasync");

var SpiderController = function(options){
  this.rollingSpider = new RollingSpider(options);
  this.control = function(cmd, speed, steps) {
    var cmd = deasync(this.rollingSpider[cmd]);
    return cmd({speed: speed, steps: steps});
  }
}

SpiderController.prototype.up = function (speed, steps) {
  return this.control('up', speed, steps)
}

SpiderController.prototype.down = function (speed, steps) {
  return this.control('up', speed, steps)
}

SpiderController.prototype.leftFlip = function () {
  return this.control('leftFlip')
}

SpiderController.prototype.rightFlip = function () {
  return this.control('rightFlip')
}

SpiderController.prototype.backFlip = function () {
  return this.control('backFlip')
}

SpiderController.prototype.frontFlip = function () {
  return this.control('frontFlip')
}

SpiderController.prototype.turnRight = function (speed, steps) {
  return this.control('turnRight', speed, steps)
}

SpiderController.prototype.turnLeft = function (speed, steps) {
  return this.control('turnLeft', speed, steps)
}

SpiderController.prototype.forward = function (speed, steps) {
  return this.control('forward', speed, steps)
}

SpiderController.prototype.backward = function (speed, steps) {
  return this.control('backward', speed, steps)
}

SpiderController.prototype.takeOff = function (speed, steps) {
  return this.control('takeOff', speed, steps)
}

SpiderController.prototype.land = function (speed, steps) {
  return this.control('land', speed, steps)
}

module.exports = SpiderController;