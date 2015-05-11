/**
 * Created by c.moore-hill on 06/05/2015.
 */


var viewAppt = require('./PageObjects/AppointmentPage.js');
var util = require('./PageObjects/Util.js');


describe('To view an Appointment', function() {

    it('should show title of "The London Clinic - Consultant Information System"', function() {
        viewAppt.getPage('#/Appointments/Details/1');
        browser.driver.manage().window().maximize();
        expect(viewAppt.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    //it('should have a valid appointment type. [New, Follow Up]', function() {
    //    expect(viewAppt.ValidAppointmentTypeList ).toEqual(viewAppt.AppointmentType.getText());
    //});
    //
    //it('should have a valid appointment date. [Wednesday, 30 April 2014]', function() {
    //    expect("Wednesday, 30 April 2014").toEqual(viewAppt.AppointmentDate.getText());
    //});
    //
    //it('should have a valid appointment time. [13:00 - 13:15]', function() {
    //    expect("13:00 - 13:15").toEqual(viewAppt.AppointmentTime.getText());
    //});
});


describe('To Edit an Appointment', function() {
    //
    it('should show title of "The London Clinic - Consultant Information System"', function() {
        viewAppt.getPage('#/Appointments/Details/16302');
        browser.driver.manage().window().maximize();
        expect(viewAppt.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    it('should have the 5 User action points visible', function(){
        console.log('Verifying the 5 User action points visible');
        var info = viewAppt.fundingTitle;
        expect(viewAppt.EditTitle.isDisplayed()).toBe(true);
        expect(viewAppt.ChangeFunding.isDisplayed()).toBe(true);
        expect(viewAppt.Reschedule.isDisplayed()).toBe(true);
        expect("687.732.0470 x1087").toEqual("687.732.0470 x1087");
        //Buttons
        //expect(viewAppt.ChangeRoom.isDisplayed()).toBe(true);
        //expect(viewAppt.ChangeConsultant.isDisplayed()).toBe(true);
    });

    it('should allow the editing of the appointment Title',function(){
        console.log('Start editing of the appointment Title');

        viewAppt.EditTitle.click();
        browser.sleep(5000);
        viewAppt.AppointmentTitle.clear();
        viewAppt.AppointmentTitle.sendKeys('The Appointment Title');
        viewAppt.TitleSave.click();
        expect(viewAppt.AppointmentTitleText.getText()).toBe('The Appointment Title');
    });

    it('should allow cancelling of the appointment Title while editing',function(){
        viewAppt.EditTitle.click();
        browser.sleep(5000);
        viewAppt.AppointmentTitle.sendKeys('The Appointment Title');
        viewAppt.TitleCancel.click();
        expect(viewAppt.AppointmentTitleText.getText()).toBe('The Appointment Title');
    });


    it('should allow the adding of a note',function(){
        console.log('Start adding note and save');
        var EC = protractor.ExpectedConditions;
        viewAppt.AddNote.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.NoteHeader), 5000);
        viewAppt.NoteTitle.sendKeys('The Title');
        viewAppt.NoteText.sendKeys('This is the message !!');
        viewAppt.NoteOk.click();
    });

    it('should allow the cancelling of note editing without saving',function(){
        console.log('Start editing note to cancel');
        var EC = protractor.ExpectedConditions;
        viewAppt.AddNote.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.NoteHeader), 5000);
        viewAppt.NoteTitle.sendKeys('The Title');
        viewAppt.NoteText.sendKeys('This is the message !!');
        viewAppt.NoteCancel.click();
    });


    it('should allow the cancelling of funding editing without saving',function(){
        console.log('Start editing funding to cancel');
        var EC = protractor.ExpectedConditions;
        viewAppt.EditFunding.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.FundingHeader), 5000);
        browser.sleep(1000);
        viewAppt.FundingCancel.click();
        console.log("Note to self!");
    });

    it('should allow the saving of funding editing without changes',function(){
        console.log('Start  editing funding to saving without change');
        var EC = protractor.ExpectedConditions;
        viewAppt.EditFunding.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.FundingHeader), 5000);
        browser.sleep(1000);
        viewAppt.FundingOk.click();
    });

    it('should allow the saving of funding changes - Self funding',function(){
        console.log('Start  editing funding Self');
        var EC = protractor.ExpectedConditions;
        viewAppt.EditFunding.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.FundingHeader), 5000);
        viewAppt.SelectSelfFunding();
        browser.sleep(1000);
        viewAppt.FundingOk.click();
    });

    it('should allow the saving of funding changes - Embassy funding',function(){
        console.log('Start  editing funding Embassy');
        var EC = protractor.ExpectedConditions;
        viewAppt.EditFunding.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.FundingHeader), 5000);
        viewAppt.SelectEmbFunding();
        browser.sleep(1000);
        viewAppt.FundingOk.click();
    });

    it('should allow the saving of funding changes - Insurance funding',function(){
        console.log('Start  editing funding Insurance');
        var EC = protractor.ExpectedConditions;
        viewAppt.EditFunding.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.FundingHeader), 5000);
        viewAppt.SelectInsFunding();
        browser.sleep(5000);
        viewAppt.FundingOk.click();
    });

});




