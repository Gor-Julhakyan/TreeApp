isc.TreeAppForm.create({
  ID: "fontsForm",
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
      type: "slider",
      hint: "Select Font Size",
      wrapHintText: false,
      defaultValue: 16,
      minValue: 9,
      maxValue: 56,

      controlStyle: "form-slider",
      changed: function(form, item, value) {
        changeStyle('font-size', value);
      }
    },
    {
        name: "FontColor",
        title: "Color",
        hint: "Select Body Text Color",
        type: "color",
        defaultValue: userStyles['color'],
        width: 100,
        keyPressFilter: "[0-9a-fA-F#]",
        changed : function (form, item, value) {
          changeStyle('color', value);
        }
      }

  ]
});

isc.Slider.create({
    ID: "fontSize",
    vertical: false,
    minValue: 9,
    maxValue: 100,
    numValues: 91,
    title: "Size:",
    valueChanged : function (value) {
      changeStyle('font-size', value);
    }
});

isc.FormImgBtn.create({
  ID: "fontWeight",
  src: "icons/bold.png",
  click: function() {
    (userStyles['font-weight'] == 'normal') ? this.param  = 'bold' : this.param  = 'normal';
    changeStyle('font-weight', this.param);
  }
})

isc.FormImgBtn.create({
  ID: "fontStyle",
  src: "icons/italic.png",
  click: function() {
    (userStyles['font-style'] == 'normal') ? this.param  = 'italic' : this.param  = 'normal';
    changeStyle('font-style', this.param);
  }
})

isc.FormImgBtn.create({
  ID: "textDecoration",
  src: "icons/underline.png",
  click: function() {
    (userStyles['text-decoration'] == 'none') ? this.param  = 'underline' : this.param  = 'none';
    changeStyle('text-decoration', this.param);
  }
})

isc.Label.create({
  ID: "fontStyleTitle",
  styleName: "formTitle",
  height: 24,
  left: 50,
  contents: "Style",
})

isc.HStack.create({
  ID: "fontStyles",
  membersMargin: 10,
  members: [
    fontStyleTitle,
    fontWeight,
    fontStyle,
    textDecoration,
  ]
})

isc.VStack.create({
  ID: "fonts",
  members: [
    fontsForm,
    // fontSize,
    fontStyles
  ]
})
