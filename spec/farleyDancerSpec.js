describe("salsaDancer", function() {
  var farley;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    farley = MakeSalsaDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(farley.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(farley.$node, 'toggle');
    farley.step();
    expect(farley.$node.toggle).toHaveBeenCalled();
  });

  /*describe("dance", function(){

    it("should call step periodically", function(){
      spyOn(blinkyDancer, "step").andCallThrough();
      // for crazy reasons, we need to let some time pass
      // specifically, the spied-upon step function will not be called the first time around
      jasmine.Clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).toBe(2);
    });

  });*/
});
