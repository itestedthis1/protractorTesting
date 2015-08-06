/**
 * Created by C.Moore-Hill on 06/08/2015.
 */


'use strict';
var loggingPage = require('../pgObjects/versionSelection.js');
var patientPage = require('../pgObjects/displayPatient.js');
var consultantPage = require('../pgObjects/displayConsultant.js');

describe('When I Log in as a Secretary ',function(){
    it('should log into UAT "The London Clinic - Consultant Information System"', function() {
        var role = 'testsecretary';
        loggingPage.logIn(role);
        var roleName = browser.driver.findElement(by.css('#logoutForm > ul > li:nth-child(2) > a')).getText();
        expect( roleName ).toEqual(role);
    });

    it('I select a patient from the listing I should see the patient details', function () {
        browser.waitForAngular();
        browser.findElement(loggingPage.firstPatient).click();
        browser.waitForAngular();
        var actURL = browser.getCurrentUrl();
        //expect(actURL).toEqual('https://portal.thelondonclinic.com/#/Patients');
        console.log(actURL + "Cosultant");
        var name = browser.findElement(consultantPage.name);
        expect(name.getText()).toContain("Law");
        console.log(name.getText()+" is the name");
    });


    //it('should then log out of UAT "The London Clinic - Consultant Information System"', function() {
    //    loggingPage.logout();
    //    var titleName = browser.driver.findElement(by.css('body > div.container.body-content > div.page-header')).getText();
    //    expect( titleName ).toEqual('Logout');
    //    browser.driver.findElement(by.css('body > div.container.body-content > div.row > div > form > fieldset > div > button')).click();
    //});
});
