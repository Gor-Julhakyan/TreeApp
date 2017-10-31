
isc.TreeAppForm.create({
  ID: "styleizationForm",
  wrapItemTitles: true,
  fields: [
    {
      type:"header",
      defaultValue:"FONTS"
    },
    {
      name: "Family",
      title: "Family",
      type: "select",
      hint: "Select Font Family",
      controlStyle: "form-select",
      wrapHintText: false,
      defaultValue: userStyles['font-family'],
      valueMap: {
        "Roboto" : "<span style=" + '"font-family: Roboto"' + ">Roboto</span>",
        "arial" : "<span style=" + '"font-family: arial"' + ">Arial</span>",
        "cursiv" : "<span style=" + '"font-family: cursiv"' + ">Cursiv</span>",
        "fantasy" : "<span style=" + '"font-family: fantasy"' + ">Fantasy</span>",
        "monospase" : "<span style=" + '"font-family: monospase"' + ">Monospase</span>",
        "sans-serif" : "<span style=" + '"font-family: sans-serif"' + ">Sans-Serif</span>",
        "serif" : "<span style=" + '"font-family: serif"' + ">Serif</span>",
      },
      changed: function(form, item, value) {
        changeStyle('font-family', value);
      }
    },
    {
      name: "Size",
      title: "Size",
      type: "select",
      hint: "Select Font Size",
      controlStyle: "form-select",
      wrapHintText: false,
      defaultValue: userStyles['font-size'],
      valueMap: {
        "10": "<span style=" + '"font-size:' + 10 + 'px">' + 10 + "px</span>",
        "12": "<span style=" + '"font-size:' + 12 + 'px">' + 12 + "px</span>",
        "14": "<span style=" + '"font-size:' + 14 + 'px">' + 14 + "px</span>",
        "16": "<span style=" + '"font-size:' + 16 + 'px">' + 16 + "px</span>",
        "18": "<span style=" + '"font-size:' + 18 + 'px">' + 18 + "px</span>",
        "22": "<span style=" + '"font-size:' + 22 + 'px">' + 22 + "px</span>",
        "24": "<span style=" + '"font-size:' + 24 + 'px">' + 24 + "px</span>",
      },
      changed: function(form, item, value) {
        changeStyle('font-size', value);
      }
    },
    {
        name: "FontColor",
        title: "Text Color",
        hint: "Select Body Text Color",
        type: "color",
        defaultValue: userStyles['color'],
        width: 100,
        keyPressFilter: "[0-9a-fA-F#]",
        changed : function (form, item, value) {
          changeStyle('color', value);
        }
      },
      {
        type:"header",
        defaultValue:"BACKGROUNDS"
      },
      {
        name: "BodyBg",
        title: "Body Background",
        hint: "Select Body Background Color",
        type: "color",
        defaultValue: GetTreeStyles.BodyBg,
        width: 100,
        keyPressFilter: "[0-9a-fA-F#]",
        changed : function (form, item, value) {
          countryTree.setBackgroundColor(value);
        }
      },
      {
        name: "HeadBg",
        title: "Header Background",
        hint: "Select Body Background Color",
        type: "color",
        defaultValue: GetTreeStyles.BodyBg,
        width: 100,
        keyPressFilter: "[0-9a-fA-F#]",
        changed : function (form, item, value) {

        }
      },

  ]
});

// isc.FormButton.create({
//     ID: "saveStyle",
//     title: "SAVE",
//     click: countryTree.setStyleName(countryTreeTwo)
// });
isc.FormButton.create({
    ID: "saveStyle",
    title: "SAVE",
    click: function() {
      countryTree.setShowHeader(false)
    }
});



isc.VStack.create({
    ID: "EditStyles",
    membersMargin: 20,
    width: "50%",
    members: [
      styleizationForm,
      saveStyle,
      controls,
    ]
});
