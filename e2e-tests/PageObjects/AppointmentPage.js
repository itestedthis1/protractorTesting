/**
 * Created by c.moore-hill on 06/05/2015.
 */

var AppointmentSearch = function(){

    this.getPage = function(uriRef) {return browser.get(uriRef);};
    this.getTitle = function() {return browser.getTitle();};

    this.ValidAppointmentTypeList = ['New','Follow Up'];

    this.CreateNewPatient = element(by.css('body > div > div > div > div > ng-view > div > div.panel > form > div:nth-child(1) > div > div.ng-scope > div:nth-child(2) > div:nth-child(4) > div > date-of-birth > div > input'));
    this.PatientDoB = element(by.css('body > div > div > div > div > ng-view > div > div.panel > form > div:nth-child(1) > div > div.ng-scope > div:nth-child(2) > div:nth-child(4) > div > date-of-birth > div > input'));

    this.AppointmentType =  element(by.css('body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.row > div > div.pull-right.text-right > h4:nth-child(2)'));
    this.AppointmentDate =  element(by.css('body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.row > div > div.pull-right.text-right > h4:nth-child(3)'));
    this.AppointmentTime =  element(by.css('body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.row > div > div.pull-right.text-right > h5'));
    this.AppointmentPhone =  element(by.css('body > div.page-container > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.row > div > div.pull-left.col-md-8 > div:nth-child(2) > div:nth-child(2) > div > div > div > div > div > div:nth-child(3) > div:nth-child(1)'));

// ACTIONS //
    this.Reschedule = element(by.css('[ng-click="viewModel.onReschedule"]'));
    this.ChangeConsultant = element(by.css('body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.panel.panel-default > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div > div > div > div > div > div.col-md-3 > div > a'));
    this.ChangeRoom = element(by.css('body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.panel.panel-default > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div > div.col-md-3 > div > a'));
    this.EditTitle = element(by.css('[ng-click="viewModel.onEditTitle()"]'));
    this.ChangeFunding = element(by.css('body > div.page-container > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.panel.panel-default > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div > a > i'));

//To Edit the basic header  body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.row > div > div.pull-left.col-md-8 > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > h4
    this.AppointmentTitleText = element(by.css('body > div > div > div > div > ng-view > div > tlc-item > div > div:nth-child(2) > div > div.row > div > div.pull-left.col-md-8 > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > h4'));
    this.AppointmentTitle = element(by.model('appointment.title'));
    this.TitleSave = element(by.css('[ng-click="viewModel.onSaveTitle()"]'));
    this.TitleCancel = element(by.css('[ng-click="viewModel.onCancelTitle()"]'));

//To add a note to an appointment..
    this.AddNote = element(by.css('[ng-click="clickedy()"]'));
    this.NoteHeader = element(by.css('body > div.modal.fade.ng-isolate-scope.slide-up.disable-scroll.in > div > div > div.modal-header.ng-scope > h4'));
    this.NoteTitle = element(by.model('viewModel.title'));
    this.NoteText = element(by.model('viewModel.text'));
    this.NoteOk = element(by.css('[ng-click="save()"]'));
    this.NoteCancel = element(by.css('[ng-click="cancel()"]'));


//To edit the funding of an appointment..
    this.fundingTitle = element(by.xpath('body/div/div/div/div/ng-view/div/tlc-item/div/div[2]/div/div[2]/div[1]/div[2]/div/div/div/div/div/div/div/text()'));
    this.EditFunding = element(by.css('[ng-click="viewModel.onChangeFunding()"]'));
    this.FundingHeader = element(by.css('body > div.modal.fade.ng-isolate-scope.slide-up.disable-scroll.in > div > div > div.modal-header.ng-scope > h4'));

    this.SelectSelfFunding = element(by.css('body > div.modal.fade.ng-isolate-scope.slide-up.disable-scroll.in > div > div > div.modal-body.ng-scope > div > div.form-group.form-group-default > div:nth-child(4) > input'));
    this.SelectEmbFunding = function(){element.all(by.name('fundingType')).get(1).click();};
    this.SelectInsFunding = function(){element.all(by.name('fundingType')).get(0).click();};
    this.FundingOk = element(by.css('[ng-click="save()"]'));
    this.FundingCancel = element(by.css('[ng-click="cancel()"]'));

    this.SendFailed = element(by.css('#modalSlideUpSmall > div > div > div > div > h4')).text() == "Send Failed";
    element(by.css('#modalSlideUpSmall > div > div > div > div > button'));

};

module.exports = new AppointmentSearch();
