function copy() {
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getActiveSheet();
    var tz = ss.getSpreadsheetTimeZone();
 var form = FormApp.openById('XXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  form.removeDestination();
//  var last = sheet1.getLastRow() + "";
//  var lastvar = last-1
//  Logger.log(lastvar);
//    var range = sheet1.getRange("A2:A40000");
  var date = Utilities.formatDate(new Date(), tz, 'MM-yyyy');
  form.deleteAllResponses();
 Utilities.sleep(10000);
 form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
 Utilities.sleep(10000);
var sheetnew = ss.getSheets()[0];
 sheetnew.setName(date);  // Rename to date
}