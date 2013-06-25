
var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  //debugger;
  return new BlinkyDancer(top, left, timeBetweenSteps);
};

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //setTimeout(this.step, this.timeBetweenSteps);
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};

//New Dancer
var MakeSalsaDancer = function(top, left, timeBetweenSteps){
  //debugger;
  return new SalsaDancer(top, left, timeBetweenSteps);
};

var SalsaDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);

};
SalsaDancer.prototype = Object.create(Dancer.prototype);
SalsaDancer.prototype.constructor = SalsaDancer;
SalsaDancer.prototype.step = function(){
  this.$node.toggle();
  debugger;
  var left = this.left + 10;
  var top = this.top + 10;
  Dancer.prototype.setPosition.call(this, top, left);
  Dancer.prototype.step.call(this);
  //Dancer.prototype.move.call(this);
};
