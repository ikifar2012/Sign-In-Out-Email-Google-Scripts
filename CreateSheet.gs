function triggerrow() {
   var sheet = SpreadsheetApp.getActive();
   ScriptApp.newTrigger("Submit")
   .forSpreadsheet(sheet)
   .onFormSubmit()
   .create();
}