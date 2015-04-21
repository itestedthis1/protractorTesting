'use strict';

var params = browser.params;
//
// describe('Make an Appointment - Minimum detail', function() {
//
//    beforeEach(function() {
//      browser.get('#/BookAppointment?consultants=2&date=2015-04-17');
//    });
//
//    it('should show title of My ASP.NET Application', function() {
//      expect(browser.getTitle()).toEqual("- My ASP.NET Application");
//    });
//});
//
//describe('Make an Appointment - Maximum detail', function() {
//
//    beforeEach(function() {
//        browser.get('#/BookAppointment?consultants=2&date=2015-04-17');
//    });
//
//    it('should show title of My ASP.NET Application', function() {
//        expect(browser.getTitle()).toEqual("- My ASP.NET Application");
//    });
//
//});
//
//describe('Make an Appointment -Trigger SMS', function() {
//
//    beforeEach(function() {
//        browser.get('#/BookAppointment?consultants=2&date=2015-04-17');
//    });
//
//    it('should show title of My ASP.NET Application', function() {
//        expect(browser.getTitle()).toEqual("- My ASP.NET Application");
//    });
//
//});


describe('Make an Appointment Trigger Email', function() {

    it('should show title of My ASP.NET Application', function() {
        browser.get('#/Consultants');
        expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    it('should navigate to the consultant "Female" "Das" appoints page', function(){
        var searchFieldGender = element(by.model('viewModel.query.gender'));
        searchFieldGender.sendKeys('f');
        var searchFieldName = element(by.model('viewModel.query.name'));
        searchFieldName.sendKeys('Das');
        element(by.css('a[href*="#/ViewSessions?consultants=13&date=2015-04-21"]')).click();

        element(by.css('.fa-chevron-right')).click();

        element(by.css('.fa-chevron-right')).click();


    })

    //
    //it('should accept Patient Name details', function () {
    //
    //    var patientTitle = element(by.model('patient.title'));
    //    var patientFname = element(by.model('patient.firstName'));
    //    var patientLname = element(by.model('patient.lastName'));
    //    var patientLnumber = element(by.model('patient.patientUnitNumber'));
    //
    //    patientTitle.sendKeys(params.patient.title);
    //    patientFname.sendKeys(params.patient.first);
    //    patientLname.sendKeys(params.patient.last);
    //    patientLnumber.sendKeys(params.patient.L_number);
    //    //patientDoB.sendKeys(params.patient.DoB);
    //
    //    //element.all(by.model('patient.gender')).first().click();
    //
    //
    //    var patientAddr1 = element(by.model('address.address1'));
    //    var patientAddr2 = element(by.model('address.address2'));
    //    var patientAddr3 = element(by.model('address.address3'));
    //    var patientAddr4 = element(by.model('address.address4'));
    //    var patientPcode = element(by.model('address.postcode'));
    //    patientAddr1.sendKeys(params.patient.Addr1);
    //    patientAddr2.sendKeys(params.patient.Addr2);
    //    patientAddr3.sendKeys(params.patient.Addr3);
    //    patientAddr4.sendKeys(params.patient.Addr4);
    //    patientPcode.sendKeys(params.patient.Postcode);
    //
    //    var patientPhone = element(by.model('contact.phone1'));
    //    var patientMobile = element(by.model('contact.phone2'));
    //    var patientEmail = element(by.model('contact.email'));
    //    var patientContPref = element(by.model('contact.prefContact'));
    //    var patientSMSnotif = element(by.model('contact.allowSms'));
    //    patientPhone.sendKeys(params.patient.Phone);
    //    patientMobile.sendKeys(params.patient.Mobile);
    //    patientEmail.sendKeys(params.patient.Email);
    //    patientContPref.sendKeys(params.patient.Pref);
    //    patientSMSnotif.sendKeys(params.patient.SMSnotif);
    //
    //   //OTHER DETAILS
    //    var referringDoctor = element(by.model('other.referringDoctor'));
    //    referringDoctor.sendKeys(params.patient.refDoc);
    //
    //    var additionalInstruction = element(by.name('AdditionalInstructions'));
    //    additionalInstruction.sendKeys(params.patient.additionalInstruction);
    //
    //    var funding = params.patient.Funding;
    //    var embChoice = element(by.name('EmbassyOther'));
    //    var insChoice = element(by.name('InsurerOther'));
    //    var indMemNum = element(by.name('MembershipNumber'));
    //    var indAuthNum = element(by.name('AuthorisationCode'));
    //
    //    element.all(by.model('other.fundingType')).get(funding).click();
    //
    //    if(funding == 2){
    //        //Self Funded
    //        expect(embChoice.isDisplayed()).toBe(false);
    //        expect(insChoice.isDisplayed()).toBe(false);
    //        expect(indMemNum.isDisplayed()).toBe(false);
    //        expect(indAuthNum.isDisplayed()).toBe(false);
    //    }
    //
    //    if(funding == 1){
    //        //Embassy Funded
    //        expect(embChoice.isDisplayed()).toBe(true);
    //        expect(insChoice.isDisplayed()).toBe(false);
    //        expect(indMemNum.isDisplayed()).toBe(false);
    //        expect(indAuthNum.isDisplayed()).toBe(false);
    //        embChoice.sendKeys(params.patient.embassyChoice);
    //    }
    //
    //    if(funding == 0){
    //        //Insurance Funded
    //        expect(embChoice.isDisplayed()).toBe(false);
    //        expect(insChoice.isDisplayed()).toBe(true);
    //        expect(indMemNum.isDisplayed()).toBe(true);
    //        expect(indAuthNum.isDisplayed()).toBe(true);
    //        insChoice.sendKeys(params.patient.insurer);
    //        indMemNum.sendKeys(params.patient.memNo);
    //        indAuthNum.sendKeys(params.patient.authNo);
    //    }
    //
    //    element(by.css('.btn-success')).click();
    //});
});