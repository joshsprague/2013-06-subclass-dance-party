var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  this.$node.offset({top: this.top, left: this.left});
  Dancer.prototype.step.call(this);
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
  if (this.top > 800 || this.left > 1500 || this.top < 100 || this.left < 100){
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
  Dancer.prototype.step.call(this);
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

var AmberDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.amber = true;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('amberDancer');
  $(".amberDancer").on("click", function(event){
    $(this).css("background-image", "url(http://25.media.tumblr.com/8f2f3efcad2127a5b61ae682ce8c0132/tumblr_mf66d4IFpS1qjobs9o1_500.gif)");
  });
};

AmberDancer.prototype = Object.create(Dancer.prototype);
AmberDancer.prototype.constructor = AmberDancer;
AmberDancer.prototype.step = function(){
  var that = this;
  for (var i = 0; i < window.dancers.length; i++){
    if(that.top !== window.dancers[i].top){
      if(!(window.dancers[i] instanceof AmberDancer)){
        if (Math.sqrt(Math.pow((that.left - window.dancers[i].left), 2) + Math.pow((that.top - window.dancers[i].top), 2)) < 150) {
          that.$node.addClass("sweatPantsDancer");
          that.$node.removeClass("amberDancer");
        }
      }
    }
  }
  Dancer.prototype.step.call(this);
};
