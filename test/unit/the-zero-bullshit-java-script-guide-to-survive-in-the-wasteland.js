import theZeroBullshitJavaScriptGuideToSurviveInTheWasteland from '../../src/the-zero-bullshit-java-script-guide-to-survive-in-the-wasteland';

describe('theZeroBullshitJavaScriptGuideToSurviveInTheWasteland', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(theZeroBullshitJavaScriptGuideToSurviveInTheWasteland, 'greet');
      theZeroBullshitJavaScriptGuideToSurviveInTheWasteland.greet();
    });

    it('should have been run once', () => {
      expect(theZeroBullshitJavaScriptGuideToSurviveInTheWasteland.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(theZeroBullshitJavaScriptGuideToSurviveInTheWasteland.greet).to.have.always.returned('hello');
    });
  });
});
