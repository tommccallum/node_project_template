var App = require("../App.js");
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

describe("Array semantics", function() {
  it('should wrap when the index gets to length + 1', () => {
    const newLocation = App.move(3)

    assert.strictEqual( newLocation, 0)
  })

  it('if index is a string, throw an error, unusual but effective', () => {
    try {
      const newLocation = App.move("try a string")
      assert.fail("failed to throw exception error when string")
    } catch( error ) {
      assert.ok("exception was thrown")
    }
  })

  it('if index is a string, throw an error, the mocha way', () => {
    assert.throws(() => {
      const newLocation = App.move("try a string")
    })
  })
})
