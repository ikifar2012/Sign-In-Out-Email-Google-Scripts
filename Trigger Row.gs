function Submit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var last = sheet.getLastRow() + "";
  var last1 = last -1
  var column = sheet.getLastColumn();
  var range = sheet.getRange("A2:C40000");
  var cell = range.getCell(last1, 3);
  Logger.log(cell.getValue());
  var email = cell.getValue();
  var cell2 = range.getCell(last1, 2);
 Logger.log(cell2.getValue());
  var name = cell2.getValue();
  var timecell = range.getCell(last1, 1);
  var time = timecell.getValue();
  Logger.log(last1)
// uncomment the line below if you would like to CC the email
//  var emailcc = "email@example.com"
  var body = name + " " + "Has Signed into core \nTimestamp: " + time
  var subject = name + " " + "Has Signed into core"
  GmailApp.sendEmail(email, subject, body);
//  GmailApp.sendEmail(emailcc, subject, body);
}