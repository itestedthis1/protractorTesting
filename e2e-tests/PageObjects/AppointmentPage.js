/**
 * Created by c.moore-hill on 06/05/2015.
 */

var AppointmentSearch = function(){

    this.getPage = function(uriRef) {return browser.get(uriRef);};
    this.getTitle = function() {return browser.getTitle();};

    this.Reschedule = element(by.css('[ng-click="viewModel.onReschedule"]'));
    this.ChangeConsultant = element(by.css('[ng-click="viewModel.changeConsultant"]'));
    this.ChangeRoom = element(by.css('[ng-click="viewModel.changeRoom"]'));

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
};

module.exports = new AppointmentSearch();