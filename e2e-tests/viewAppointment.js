/**
 * Created by c.moore-hill on 06/05/2015.
 */


var viewAppt = require('./PageObjects/AppointmentPage.js');
var util = require('./PageObjects/Util.js');

describe('To view an Appointment', function() {

    it('should show title of "The London Clinic - Consultant Information System"', function() {
        viewAppt.getPage('#/Appointments/Details/16302');
        browser.driver.manage().window().maximize();
        expect(viewAppt.getTitle()).toEqual("The London Clinic - Consultant Information System");
    });

    it('should have the 5 User action points visible', function(){
        expect(viewAppt.EditTitle.isDisplayed()).toBe(true);
        expect(viewAppt.ChangeFunding.isDisplayed()).toBe(true);
        expect(viewAppt.Reschedule.isDisplayed()).toBe(true);
        //Buttons
        //expect(viewAppt.ChangeRoom.isDisplayed()).toBe(true);
        //expect(viewAppt.ChangeConsultant.isDisplayed()).toBe(true);
    });

    it('should allow the editing of the appointment Title',function(){
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
        var EC = protractor.ExpectedConditions;
        viewAppt.AddNote.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.NoteHeader), 5000);
        viewAppt.NoteTitle.sendKeys('The Title');
        viewAppt.NoteText.sendKeys('This is the message !!');
        viewAppt.NoteOk.click();
    });

    it('should allow the cancelling of a note without saving',function(){
        var EC = protractor.ExpectedConditions;
        viewAppt.AddNote.click();
        browser.waitForAngular();
        browser.wait( EC.visibilityOf(viewAppt.NoteHeader), 5000);
        viewAppt.NoteTitle.sendKeys('The Title');
        viewAppt.NoteText.sendKeys('This is the message !!');
        viewAppt.NoteCancel.click();
    });

});




