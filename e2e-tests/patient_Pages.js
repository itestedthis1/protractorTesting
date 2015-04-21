'use strict';

 describe('Patient details Page', function() {

    beforeEach(function() {
      browser.get('#/Patients/Details/74');
    });

    it('should show title of My ASP.NET Application', function() {
      expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });
});


describe('Patient listing Page', function() {
  beforeEach(function() {
    browser.get('#/Patients');
  });

  it('should show title of My ASP.NET Application', function() {
    expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
  });

  it('should have a listing of 10 patients per page', function(){
    var NumConsultants =  element.all(by.repeater('patient in viewModel.list'));
      expect( NumConsultants.count()).toEqual(10);
  });
});


describe('Patient listing Page - Search by Attribute', function() {

    beforeEach(function() {
        browser.get('#/Patients');
    });

    it('should filter by the Search field - ab', function () {
        var searchField = element(by.model('viewModel.query.query'));
        searchField.sendKeys('ab');

        var NumConsultants =  element.all(by.repeater('patient in viewModel.list'));
        expect( NumConsultants.count()).toEqual(9);
    });

    it('should filter by the Search field - abb', function () {
        var searchField = element(by.model('viewModel.query.query'));
        searchField.sendKeys('abb');

        var NumConsultants =  element.all(by.repeater('patient in viewModel.list'));
        expect( NumConsultants.count()).toEqual(2);
    });

});
