const expect = require("chai").expect;

const Parser = require("../lib/parser").Parser;

describe("Parser", () => {
  it("should instantiate odata parser", () => {
    var parser = new Parser();
    var ast = parser.filter("Categories/all(d:d/Title eq 'alma')");
    expect(
      ast.value.value.value.value.next.value.value.predicate.value.value.right
        .value
    ).to.equal("Edm.String");
  });

  it("should parse expand V2", () => {
    var parser = new Parser();
    var ast = parser.query("$expand=Customer,Items/Product");
    expect(
      ast.value.value.value.value.next.value.value.predicate.value.value.right
        .value
    ).to.equal("Edm.String");
  });

  it("should parse expand", () => {
    var parser = new Parser();
    var ast = parser.query("$expand=Customer,Items($expand=Product)");
    expect(
      ast.value.value.value.value.next.value.value.predicate.value.value.right
        .value
    ).to.equal("Edm.String");
  });

});
