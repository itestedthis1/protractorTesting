/**
 * Created by c.moore-hill on 06/05/2015.
 */


var Util = function(){

    this.getPage = function(uriRef) {return browser.get(uriRef);};
    this.getTitle = function() {return browser.getTitle();};

    this.winks1 = 1000;
    this.winks5 = 5000;
    this.winks10 = 10000;

    this.dayEnum = {
        mon: 1,
        tue: 2,
        wed: 3,
        thr: 4,
        fri: 5,
        sat: 6
    };

    this.genderEnum = {
        MALE: 'm',
        FEMALE: 'f'
    };
}
module.exports = new Util();