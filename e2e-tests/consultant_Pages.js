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


  it('should show title of "The London Clinic - Consultant Information System"', function() {
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

  it('should filter by male consultants with paediatric privileges', function () {
    var paediatricField = element(by.model('viewModel.query.gender'));
    paediatricField.sendKeys('m');
    var paediatric = element(by.model('viewModel.query.paediatricPrivileges'));
    paediatric.click();

    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
    expect( NumConsultants.count()).toEqual(1);
  });


  it('should filter by male consultants with Monday clinic', function () {
    var paediatricField = element(by.model('viewModel.query.gender'));
    paediatricField.sendKeys('m');

    var clinicDays = element(by.css('body > div > div > div > div > ng-view > div > div > div:nth-child(2) > form > div.col-md-4.col-sm-4 > div > div > div:nth-child(1) > div.btn.btn-success'));
    clinicDays.click();

    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
    expect( NumConsultants.count()).toEqual(4);
  });

  it('should filter by female consultants with Thursday clinic', function () {
    var paediatricField = element(by.model('viewModel.query.gender'));
    paediatricField.sendKeys('f');

    var clinicDays = element(by.css('body > div > div > div > div > ng-view > div > div > div:nth-child(2) > form > div.col-md-4.col-sm-4 > div > div > div:nth-child(4) > div.btn.btn-success'));
    clinicDays.click();

    var NumConsultants =  element.all(by.repeater('consultant in viewModel.list'));
    expect( NumConsultants.count()).toEqual(0);
  });

});
