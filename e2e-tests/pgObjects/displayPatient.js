/**
 * Created by C.Moore-Hill on 06/08/2015.
 */

var patientPage = function(){
//Details
    this.name = element(by.css('body > div > div > div > div > div > div > ng-view > div > div:nth-child(1) > div.ng-scope > div > div:nth-child(1) > div > span'));
    this.DoB = element(by.xpath('/html/body/div/div/div/div/div/div/ng-view/div/div[1]/div[1]/div/div[2]/div[1]/div/div[2]/p[2]/text()[1]'));
    this.gender = element(by.xpath('/html/body/div/div/div/div/div/div/ng-view/div/div[1]/div[1]/div/div[2]/div[1]/div/div[2]/p[2]/text()[2]'));
    this.address1 = element(by.xpath('/html/body/div/div/div/div/div/div/ng-view/div/div[1]/div[1]/div/div[2]/div[2]/div/div[2]/p/text()[1]'));

//Listings
    this.appointments = element.all(by.repeater('item in collection'));

//ListingElement


};
module.exports = new patientPage();
