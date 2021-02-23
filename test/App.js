var App = require("../App.js")
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });

  describe("helloworld", function() {
    it("should return helloworld as a string", function() {
      assert.strictEqual(App.helloworld(), "helloworld")
      assert.strictEqual(typeof(App.helloworld()), "string")
    });
  });
});

