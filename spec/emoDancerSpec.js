describe("emoDancer", function() {
  var emoDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    emoDancer = MakeEmoDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(emoDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(emoDancer.$node, 'toggle');
    emoDancer.step();
    expect(emoDancer.$node.toggle).toHaveBeenCalled();
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
