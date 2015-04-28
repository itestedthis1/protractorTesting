'use strict';

var params = browser.params;

describe('To Book an Appointment for a female Consultant with surname of Das', function() {

    it('should show title of My ASP.NET Application', function() {
        browser.get('#/Consultants');
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    it('should navigate to the consultant "Female" "Das" appoints page', function(){
        var searchFieldGender = element(by.model('viewModel.query.gender'));
        searchFieldGender.sendKeys('f');
        var searchFieldName = element(by.model('viewModel.query.name'));
        searchFieldName.sendKeys('Das');
        element(by.css('a[href*="#/ViewSessions?consultants=13&date=2015-04-28"]')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('[ng-show="appointment.available"]')).click();

        var title = element(by.css('.windows h3'));
        var consultant = element(by.xpath('/html/body/div/div/div/div/ng-view/div/div/div[1]/div/div[2]/div/a/div/h3'));
        expect(title.getText()).toEqual('Create New Appointment');
        expect(consultant.getText()).toEqual('Das, Lisa');
    })

    it('should accept Patient Name details', function () {
        var patientTitle = element(by.model('patient.title'));
        var patientFname = element(by.model('patient.firstName'));
        var patientLname = element(by.model('patient.lastName'));
        var patientLnumber = element(by.model('patient.patientUnitNumber'));
        var patientGender = element(by.model('modelState.patient_Gender'));
        var patientDoB = element(by.model('patient.dateOfBirth'));

        patientTitle.sendKeys(params.patient.title);
        patientFname.sendKeys(params.patient.first);
        patientLname.sendKeys(params.patient.last);
        patientLnumber.sendKeys(params.patient.L_number);
        browser.sleep(6000);

        element.all(by.model('color.name')).get(0).click();
        browser.sleep(6000);

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
        browser.sleep(60000);
        //expect(element(by.property(modelState.patient_Gender)).text()).toEqual('Is Required');
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

        element(by.css('a[href*="#/ViewSessions?consultants=16&date=2015-04-28"]')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('.fa-chevron-right')).click();
        element(by.css('[ng-show="appointment.available"]')).click();

        var title = element(by.css('.windows h3'));
        var consultant = element(by.xpath('/html/body/div/div/div/div/ng-view/div/div/div[1]/div/div[2]/div/a/div/h3'));
        expect(title.getText()).toEqual('Create New Appointment');
        expect(consultant.getText()).toEqual('Bashir, Saqib');
    })

    it('should accept Patient Name details', function () {
        var patientTitle = element(by.model('patient.title'));
        var patientFname = element(by.model('patient.firstName'));
        var patientLname = element(by.model('patient.lastName'));
        var patientLnumber = element(by.model('patient.patientUnitNumber'));
        var patientGender = element(by.xpath('//*[@id="male"]'));
        var patientDoB = element(by.model('patient.dateOfBirth'));

        patientTitle.sendKeys(params.patient.title);
        patientFname.sendKeys(params.patient.first);
        patientLname.sendKeys(params.patient.last);
        patientLnumber.sendKeys(params.patient.L_number);
        //patientDoB.sendKeys(params.patient.DoB);
        patientGender.click();
        browser.sleep(6000);

        //element.all(by.class('radio-complete')).get(0).click();
        //browser.sleep(6000);

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

        browser.sleep(60000);
    });
});
