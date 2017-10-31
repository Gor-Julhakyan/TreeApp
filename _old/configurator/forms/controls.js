isc.TreeAppForm.create({
  ID: 'controlsForm',
  fields:[
    {
      type:"header",
      defaultValue:"Controls"
    },
    {
      name: "showHeader",
      title: "Show Header",
      type: "radioGroup",
      defaultValue: '',
      valueMap: {
        true: "Show",
        false: "Hide",
      },
      changed: function (form, item, value) {
        value = (value == 'true') ? true : false;
        countryTree.setShowHeader(value);
        console.log(value);
        console.log(typeof(value));
      }
    },
    {
      name: "showConnectors",
      title: "Enable Connectors",
      type: "radioGroup",
      defaultValue: '',
      valueMap: {
        terue: "Enable",
        false: "Disable",
      },
      changed: function(){

      }
    }
  ]
})

function getIcon(stt){
  return stt ? "icons/on.png" : "icons/off.png";
}

var a = true;

isc.OnOffSwitch.create({
  ID: "showHeader",
  src: getIcon(a),
  click: function() {
    this.setSrc(getIcon(false));
  },
  over: null
})


isc.HTMLFlow.create({
  ID: "btn",
  width: "100%",
  contents: '<button><img src="graphics/icons/on.png' + '"></button>',
  click: function(stt) {
    alert(this.contents);
    countryTree.setShowHeader(false)
  }
})