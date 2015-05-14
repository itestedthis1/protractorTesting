/**
 * Created by c.moore-hill on 10/04/2015.
 */

var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
var today = day+"-"+month+"-"+year;
var time = currentDate.getTime();
var HtmlReporter = require('protractor-html-screenshot-reporter');
var reporter=new HtmlReporter({
  baseDirectory: './protractor-result/test_'+today+'/run@'+time+"", // a location to store screen shots.
  docTitle: 'The London Clinic - CIS Reporter',
  docName:  'TEST_CIS-Autotest-report.html'
});

exports.config = {
  allScriptsTimeout: 11000,

  params: require('./appt.json'),

  specs: [
    //'*_Pages.js'//,
    //'appointment_Pages.js'//,
    //'patient_Pages.js'
    //'consultant_Pages.js'
    'Booking_Pages.js'
    //'viewAppointment_Pages.js'
  ],

  seleniumArgs: ['-Dwebdriver.ie.driver=C:/Users/C.Moore-Hill/AppData/Roaming/npm/node_modules/protractor/selenium/IEDriverServer.exe'],

  multiCapabilities: [
    {
        'browserName': 'chrome'
    //},
    //{
    //    'browserName': 'firefox'
    //},
    //{
    //  'browserName': 'internet explorer',
    //  "ignoreZoomSetting": true
    }
  ],

  baseUrl: 'http://lcdevapp01:81',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 11000
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  }
};
