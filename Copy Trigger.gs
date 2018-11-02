function triggercopy() {
   ScriptApp.newTrigger("copy")
   .timeBased()
   .onMonthDay(1)
   .create();
}