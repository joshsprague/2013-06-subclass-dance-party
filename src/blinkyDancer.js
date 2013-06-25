
var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  //debugger;
  return new BlinkyDancer(top, left, timeBetweenSteps);
};

var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  //Dancer.prototype.setPosition.call(this.top, this.left);
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
  this.$node.offset({top: this.top, left: this.left});
  Dancer.prototype.step.call(this);
};

//New Dancer
var MakeFarleyDancer = function(top, left, timeBetweenSteps){
  //debugger;
  return new FarleyDancer(top, left, timeBetweenSteps);
};

var FarleyDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.direction = true;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('farleyDancer');

};
FarleyDancer.prototype = Object.create(Dancer.prototype);
FarleyDancer.prototype.constructor = FarleyDancer;
FarleyDancer.prototype.step = function(){
  // this.$node.slideUp(100);
  // this.$node.slideDown(100);

  if (this.top > 800 || this.left > 1000 || this.top < 100 || this.left < 100){
    this.direction = !this.direction;
  }
  if (this.direction){
    this.top = this.top + 10;
    this.left = this.left + 10;
  } else {
    this.top = this.top - 10;
    this.left = this.left -10;
  }
  this.$node.offset({top: this.top, left: this.left});
  // debugger;
  // var left = this.left + 10;
  // var top = this.top + 10;
  // Dancer.prototype.setPosition.call(this, top, left);
  Dancer.prototype.step.call(this);
  //Dancer.prototype.move.call(this);
};

var MakeEmoDancer = function(top, left, timeBetweenSteps){
  return new EmoDancer(top, left, timeBetweenSteps);
};

var EmoDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('emoDancer');

};

EmoDancer.prototype = Object.create(Dancer.prototype);
EmoDancer.prototype.constructor = EmoDancer;
EmoDancer.prototype.step = function(){
  this.$node.fadeIn(3000);
  this.$node.fadeOut(3000);
  this.$node.offset({top: this.top, left: this.left});
  Dancer.prototype.step.call(this);
};

var MakeAmberDancer = function(top, left, timeBetweenSteps){
  return new AmberDancer(top, left, timeBetweenSteps);
};  

var AmberDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('amberDancer');
  $(".amberDancer").on("click", function(event){
          $(this).css("background-image", "url(http://25.media.tumblr.com/8f2f3efcad2127a5b61ae682ce8c0132/tumblr_mf66d4IFpS1qjobs9o1_500.gif)");
        });

};

AmberDancer.prototype = Object.create(Dancer.prototype);
AmberDancer.prototype.constructor = AmberDancer;
AmberDancer.prototype.step = function(){
  this.$node.offset({top: this.top, left: this.left});
  Dancer.prototype.step.call(this);
};

// var lineUpButton = function(){
//   for (var i = 0; i < window.dancers.length; i++)
//   window.dancers[i].lineUp();
// };
