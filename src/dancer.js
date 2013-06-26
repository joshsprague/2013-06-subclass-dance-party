// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  return new Dancer(top, left, timeBetweenSteps);
};

var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  window.dancers.push(this);
};

Dancer.prototype.step = function(){
  var that = this;
  this.$node.offset({top: this.top, left: this.left});
  setTimeout(function(){
    that.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.left = 20;
};
