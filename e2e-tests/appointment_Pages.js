'use strict';

var params = browser.params;

describe('To Book an Appointment for a female Consultant with the name of Fiona', function() {

    it('should show title of My ASP.NET Application', function() {
        browser.get('#/Consultants');
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    it('should navigate to the consultant "Female" "Fiona" appoints page', function(){
        var searchFieldGender = element(by.model('viewModel.query.gender'));
        searchFieldGender.sendKeys('f');
        var searchFieldName = element(by.model('viewModel.query.name'));
        searchFieldName.sendKeys('Fiona');
        element(by.css('a[href*="#/ViewSessions?consultants=12&date=2015-05-06"]')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('[ng-show="appointment.available"]')).click();
        browser.sleep(6000);

        var title = element(by.css('.windows h3'));
        var consultant = element(by.xpath('/html/body/div/div/div/div/ng-view/div/div/div[1]/div/div[2]/div/a/div/h3'));
        expect(title.getText()).toEqual('Create New Appointment');
        expect(consultant.getText()).toEqual('Arnold, Fiona');
    })

    it('should accept Patient Name details', function () {
        var patientTitle = element(by.model('patient.title'));
        var patientFname = element(by.model('patient.firstName'));
        var patientLname = element(by.model('patient.lastName'));
        var patientLnumber = element(by.model('patient.patientUnitNumber'));
        var patientGender = element(by.css('body > div > div > div > div > ng-view > div > div > div.panel-body > form > div:nth-child(2) > div:nth-child(3) > div.col-md-6 > div > div.radio.radio-complete > div.inline > label'));
        var patientDoB = element(by.css('body > div > div > div > div > ng-view > div > div > div.panel-body > form > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div > date-of-birth > div > input'));

        patientTitle.sendKeys(params.patient.title);
        patientFname.sendKeys(params.patient.first);
        patientLname.sendKeys(params.patient.last);
        patientLnumber.sendKeys(params.patient.L_number);
        patientDoB.sendKeys(params.patient.DoB);
        patientGender.click();
        browser.sleep(1000);

        var patientAddr1 = element(by.model('address.address1'));
        var patientAddr2 = element(by.model('address.address2'));
        var patientAddr3 = element(by.model('address.address3'));
        var patientAddr4 = element(by.model('address.address4'));
        var patientPcode = element(by.model('address.postcode'));
        patientAddr1.sendKeys(params.patient.Addr1);
        patientAddr2.sendKeys(params.patient.Addr2);
        patientAddr3.sendKeys(params.patient.Addr3);
        patientAddr4.sendKeys(params.patient.Addr4);
        patientPcode.sendKeys(params.patient.Postcode);

        var patientPhone = element(by.model('contact.phone1'));
        var patientMobile = element(by.model('contact.phone2'));
        var patientEmail = element(by.model('contact.email'));
        var patientContPref = element(by.model('contact.prefContact'));
        var patientSMSnotif = element(by.model('contact.allowSms'));
        patientPhone.sendKeys(params.patient.Phone);
        patientMobile.sendKeys("0"+params.patient.Mobile);
        patientEmail.sendKeys(params.patient.Email);
        patientContPref.sendKeys(params.patient.Pref);
        patientSMSnotif.click();
        browser.sleep(1000);

       //OTHER DETAILS
        var referringDoctor = element(by.model('other.referringDoctor'));
        referringDoctor.sendKeys(params.patient.refDoc);

        var additionalInstruction = element(by.name('AdditionalInstructions'));
        additionalInstruction.sendKeys(params.patient.additionalInstruction);

        var funding = params.patient.Funding;
        var embChoice = element(by.name('EmbassyOther'));
        var insChoice = element(by.name('InsurerOther'));
        var indMemNum = element(by.name('MembershipNumber'));
        var indAuthNum = element(by.name('AuthorisationCode'));

        element.all(by.model('other.fundingType')).get(funding).click();

        element.all(by.model('other.fundingType')).get(funding).click();

        if(funding == 2){
            //Self Funded
            expect(embChoice.isDisplayed()).toBe(false);
            expect(insChoice.isDisplayed()).toBe(false);
            expect(indMemNum.isDisplayed()).toBe(false);
            expect(indAuthNum.isDisplayed()).toBe(false);
        }

        if(funding == 1){
            //Embassy Funded
            expect(embChoice.isDisplayed()).toBe(true);
            expect(insChoice.isDisplayed()).toBe(false);
            expect(indMemNum.isDisplayed()).toBe(false);
            expect(indAuthNum.isDisplayed()).toBe(false);
            embChoice.sendKeys(params.patient.embassyChoice);
        }

        if(funding == 0){
            //Insurance Funded
            expect(embChoice.isDisplayed()).toBe(false);
            expect(insChoice.isDisplayed()).toBe(true);
            expect(indMemNum.isDisplayed()).toBe(true);
            expect(indAuthNum.isDisplayed()).toBe(true);
            insChoice.sendKeys(params.patient.insurer);
            indMemNum.sendKeys(params.patient.memNo);
            indAuthNum.sendKeys(params.patient.authNo);
        }

        element(by.css('.btn-success')).click();
        //
        browser.sleep(10000);
        //var successPopup = element(by.id('modalSlideUpSmall'));
        //
        ////var successMsg = element(by.css('#modalSlideUpSmall > div > div > div > div > h4'));
        ////var successBtn =
        //successPopup(by.css('div > div > div > div > button')).click();
        //
        //
        ////expect(successMsg.text()).toEqual('Success');
        //successBtn.click();
    });
});


describe('To book an Appointment for a Male Consultant with Paediatric Privileges', function() {

    it('should show title of My ASP.NET Application', function() {
        browser.get('#/Consultants');
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    it('should navigate to the Male Consultant with Paediatric Privileges appointments page', function(){
        var paediatricField = element(by.model('viewModel.query.gender'));
        paediatricField.sendKeys('m');
        var paediatric = element(by.model('viewModel.query.paediatricPrivileges'));
        paediatric.click();

        element(by.css('a[href*="#/ViewSessions?consultants=16&date=2015-05-06"]')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('[ng-show="appointment.available"]')).click();
        browser.sleep(6000);

        var title = element(by.css('.windows h3'));
        var consultant = element(by.xpath('/html/body/div/div/div/div/ng-view/div/div/div[1]/div/div[2]/div/a/div/h3'));
        expect(title.getText()).toEqual('Create New Appointment');
        expect(consultant.getText()).toEqual('Bashir, Saqib');
        browser.sleep(6000);
    })

    it('should accept Patient Name details', function () {
        var patientTitle = element(by.model('patient.title'));
        var patientFname = element(by.model('patient.firstName'));
        var patientLname = element(by.model('patient.lastName'));
        var patientLnumber = element(by.model('patient.patientUnitNumber'));
        var patientGender = element(by.css('body > div > div > div > div > ng-view > div > div > div.panel-body > form > div:nth-child(2) > div:nth-child(3) > div.col-md-6 > div > div.radio.radio-complete > div.inline > label'));
        var patientDoB = element(by.css('body > div > div > div > div > ng-view > div > div > div.panel-body > form > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div > date-of-birth > div > input'));

        patientTitle.sendKeys(params.patient.title);
        patientFname.sendKeys(params.patient.first);
        patientLname.sendKeys(params.patient.last);
        patientLnumber.sendKeys(params.patient.L_number);
        patientDoB.sendKeys(params.patient.DoB);
        patientGender.click();
        browser.sleep(1000);

        //element.all(by.class('radio-complete')).get(0).click();

        var patientAddr1 = element(by.model('address.address1'));
        var patientAddr2 = element(by.model('address.address2'));
        var patientAddr3 = element(by.model('address.address3'));
        var patientAddr4 = element(by.model('address.address4'));
        var patientPcode = element(by.model('address.postcode'));
        patientAddr1.sendKeys(params.patient.Addr1);
        patientAddr2.sendKeys(params.patient.Addr2);
        patientAddr3.sendKeys(params.patient.Addr3);
        patientAddr4.sendKeys(params.patient.Addr4);
        patientPcode.sendKeys(params.patient.Postcode);

        var patientPhone = element(by.model('contact.phone1'));
        var patientMobile = element(by.model('contact.phone2'));
        var patientEmail = element(by.model('contact.email'));
        var patientContPref = element(by.model('contact.prefContact'));
        var patientSMSnotif = element(by.model('contact.allowSms'));
        patientPhone.sendKeys(params.patient.Phone);
        patientMobile.sendKeys("0"+params.patient.Mobile);
        patientEmail.sendKeys(params.patient.Email);
        patientContPref.sendKeys(params.patient.Pref);
        patientSMSnotif.click();
        browser.sleep(1000);

        //OTHER DETAILS
        var referringDoctor = element(by.model('other.referringDoctor'));
        referringDoctor.sendKeys(params.patient.refDoc);

        var additionalInstruction = element(by.name('AdditionalInstructions'));
        additionalInstruction.sendKeys(params.patient.additionalInstruction);

        var funding = params.patient.Funding;
        var embChoice = element(by.name('EmbassyOther'));
        var insChoice = element(by.name('InsurerOther'));
        var indMemNum = element(by.name('MembershipNumber'));
        var indAuthNum = element(by.name('AuthorisationCode'));

        browser.sleep(6000);
        element.all(by.model('other.fundingType')).get(funding).click();
        element.all(by.model('other.fundingType')).get(funding).click();

        if(funding == 2){
            //Self Funded
            expect(embChoice.isDisplayed()).toBe(false);
            expect(insChoice.isDisplayed()).toBe(false);
            expect(indMemNum.isDisplayed()).toBe(false);
            expect(indAuthNum.isDisplayed()).toBe(false);
        }

        if(funding == 1){
            //Embassy Funded
            expect(embChoice.isDisplayed()).toBe(true);
            expect(insChoice.isDisplayed()).toBe(false);
            expect(indMemNum.isDisplayed()).toBe(false);
            expect(indAuthNum.isDisplayed()).toBe(false);
            embChoice.sendKeys(params.patient.embassyChoice);
        }

        if(funding == 0){
            //Insurance Funded
            expect(embChoice.isDisplayed()).toBe(false);
            expect(insChoice.isDisplayed()).toBe(true);
            expect(indMemNum.isDisplayed()).toBe(true);
            expect(indAuthNum.isDisplayed()).toBe(true);
            insChoice.sendKeys(params.patient.insurer);
            indMemNum.sendKeys(params.patient.memNo);
            indAuthNum.sendKeys(params.patient.authNo);
        }

        element(by.css('.btn-success')).click();
        //
        browser.sleep(10000);
        //if( element(by.css('#modalSlideUpSmall > div > div > div > div').isDisplayed())){
        //    var successMsg = element(by.css('#modalSlideUpSmall > div > div > div > div > h4'));
        //    var successBtn = element(by.css('#modalSlideUpSmall > div > div > div > div > button'));
        //
        //    expect(successMsg.text()).toEqual('Success');
        //    //successBtn.click();
        //}

    });

});
