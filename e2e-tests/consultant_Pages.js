'use strict';

  describe('Consultant Details Page', function() {

    beforeEach(function() {
      browser.get('#/Consultants/Details/1');
    });

    it('should show title', function() {
      expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });
});


describe('Consultant listing Page', function() {

  beforeEach(function() {
    browser.get('#/Consultants');
  });


  it('should show title of My ASP.NET Application', function() {
    expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
  });

  it('should have a listing of 10 consultants', function(){
    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
      expect( NumConsultants.count()).toEqual(10);
  });

});

describe('Consultant listing Page - Filter by Attributes', function() {

  beforeEach(function() {
    browser.get('#/Consultants');
  });

  it('should filter by the Consultant Specialism', function () {
    var searchField = element(by.model('viewModel.query.specialism'));
    searchField.sendKeys('ur');

    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
    expect( NumConsultants.count()).toEqual(5);
  });

  it('should filter by the consultant name search field', function () {
    var searchField = element(by.model('viewModel.query.name'));
    searchField.sendKeys('n');

    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
    expect( NumConsultants.count()).toEqual(9);
  });

  it('should filter by the consultant gender search field', function () {
    var searchField = element(by.model('viewModel.query.gender'));
    searchField.sendKeys('f');

    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
    expect( NumConsultants.count()).toEqual(7);
  });



});
