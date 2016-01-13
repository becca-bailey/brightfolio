describe("Folio page layout", function() {

  it("changes the width of the container when 'add element' is clicked", function() {
    $('#add-element').trigger('click');
    expect( $('#container')).toHaveClass("m9");
  });
  it("hides the page sidebar on load", function() {
    expect( $("#sidebar")).toBeHidden();
  });

});
