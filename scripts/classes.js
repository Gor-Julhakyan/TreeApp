
//TreeGrid Default styles
isc.Label.create({
 ID: "GetTreeStyles",
 Height: '100%',
 Width: '100%',
 PosLeft: '0',
 PosTop: '0',
 HeaderShow: true,
 HeaderMenu: true,
 HeaderBg: '#003300',
 FolderIcon: 'icons/arrow-down-sign-to-navigate.png',
 NodeIcon: 'icons/arrow-down-sign-to-navigate.png',
 BodyBg: '#ffffff',
 BodyColor: '#e0e0e0',
});

window.treeStats = {
  header: true,
  connectors: false,
  sorting: true,
  headerMenu: true,
}


var userStyles = {
  'padding-top': '15px',
  'font-family': 'Roboto',
  'font-size': '16px',
  'color': '#212121',
  'text-decoration': 'none',
  'font-weight': 'normal',
  'font-style': 'normal'
}

function changeStyle(param, val) {
  userStyles[param] = val;

  this.keys = Object.keys(userStyles);
  window.treeStyles = '';

  this.keys.forEach(param => {
    window.treeStyles  += param + ':' + userStyles[param] + ';';
  });
  $(".countryTree").css(param, val);
}

changeStyle();

function changeDefaults(param, val) {
  treeStats[param] = 5;
  console.log(treeStats)
}



//Create New TreeGrid with className TreeAppTreeGrid
isc.defineClass("TreeAppTreeGrid", TreeGrid);

isc.TreeAppTreeGrid.addProperties({
 height:150,
 overflow:"visible",
 baseStyle:"bigButton",
 wrap:true,
 styleName:"countryTree",
 color: "#ffffff"
});


//Create New DynamicForm with className TreeAppForm
isc.defineClass("TreeAppForm", DynamicForm);

isc.TreeAppForm.addProperties({
 overflow:"visible",
 baseStyle:"treeAppForm",
 styleName:"Form",
 wrap:true,
 width: 490,
});

//Create Button for forms with className FormButton
isc.defineClass("FormButton", IButton);

isc.FormButton.addProperties({
 baseStyle:"FormButton",
});


//Menu Buttons
isc.defineClass("MenuButton", IButton).addProperties({
  iconOrientation: "left",
  iconSize: 15,
  height: 35,
  width: 150,
  canHover: false,
  showHover: false,
  showFocused: false,
  baseStyle: "leftMenuBtn",
  mouseOver: function () {
      // hide();
      // console.log('anim');
    }
});

//Switch Button
isc.defineClass("OnOffSwitch", Button).addProperties({
  baseStyle: "onn-off-switch",
  title: null,
  showFocused:false,
  showOver:false,
  width: 80,
  height: 32
})

//Form Image Button
isc.defineClass("FormImgBtn", ImgButton).addProperties({
  baseStyle: "form-icon-btn",
  width: 20,
  height: 20,
})
