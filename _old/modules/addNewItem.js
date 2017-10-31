
isc.TreeAppForm.create({
  ID: "AddNewItemForm",
  dataSource:"continentSQL",

})

isc.FormButton.create({
  ID: "AddNew",
  title: "ADD NEW ITEM",
  click: "countryTree.startEditingNew({quantity:1})"
  // function() {
  //       startTracking();
  //       isc.RPCManager.startQueue();
  //       AddNewItemForm.saveData();
  //       countryTree.saveAllEdits();
  //       isc.RPCManager.sendQueue(function() {
  //           AddNewItemForm.editNewRecord();
  //           countryTree.setData([]);
  //       });
  //       stopTracking();
  //   }
})

isc.VStack.create({
    ID: "AddNewItem",
    membersMargin: 20,
    width: "50%",
    members: [
      AddNewItemForm,
      AddNew,
    ]
});


console.log(continentSQL);
