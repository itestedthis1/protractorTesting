/**
 * Created by c.moore-hill on 30/07/2015.
 */

/**
 * Created by c.moore-hill on 29/07/2015.
 */

'use strict';
var loggingPage = require('../pgObjects/versionSelection.js');
var SecretaryDashboard = require('../pgObjects/dashSec.js');

describe('When I Log in as a Secretary ',function(){
    it('should log into UAT "The London Clinic - Consultant Information System"', function() {
        var role = 'testsecretary';
        loggingPage.logIn(role);
        var roleName = browser.driver.findElement(by.css('#logoutForm > ul > li:nth-child(2) > a')).getText();
       // expect( roleName ).toEqual(role);
    });

    it('Should verify the Dashboard titles', function () {

        //expect(browser.driver.findElement(by.css('body > div > div > div > div > ng-view > div > tlc-grid:nth-child(9) > div > div > div.panel-heading > div.panel-title.ng-binding')).getText()).toEqual("MY CONSULTANTS");
        //expect(SecretaryDashboard.myConsApps.getText()).toEqual("UPCOMING APPOINTMENTS");

    });

    it('Should verify the links in the page', function () {
       // expect(1).toEqual(1)
    });

    it('should then log out of UAT "The London Clinic - Consultant Information System"', function() {
        loggingPage.logout();
        var titleName = browser.driver.findElement(by.css('body > div.container.body-content > div.page-header')).getText();
       // expect( titleName ).toEqual('Logout');
        browser.driver.findElement(by.css('body > div.container.body-content > div.row > div > form > fieldset > div > button')).click();
    });

});


