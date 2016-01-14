describe("Folio page layout", function() {

  it("changes the width of the container when 'add element' is clicked", function() {
    var spyEvent = spyOnEvent('#add-element', 'click');
    $("#add-element").click();
    expect('click').toHaveBeenTriggeredOn('#add-element');
    expect( $('#container')).toHaveClass("m9");
  });
  it("hides the page sidebar on load", function() {
    expect( $("#sidebar")).toBeHidden();
  });

});
//
// describe("Element layout", function() {
//   it("shows the 'delete' and 'done editing' buttons on double click", function() {
//     // var spyEvent = spyOnEvent('.element', 'dblclick');
//     // $(".element").dblclick();
//     // expect('dblclick').toHaveBeenTriggeredOn('.element');
//     // expect( $(".delete")).toBeVisible();
//     // expect( $(".hide")).toBeVisible();
//     expect($('.element')).toBeInDOM();
//   });
// });
