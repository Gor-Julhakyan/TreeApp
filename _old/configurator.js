isc.HTMLFlow.create({
  ID:"configName",
  top:40,
  width:280,
  styleName:"configHeader",
  contents: "STYLES"
});

isc.ImgButton.create({
  ID: "closeStyles",
  width:22,
  height:22,
  left: null,
  src: "icons/close.png",
  baseStyle: "closeBtn",
  click: function() {
    controlLayout.hideMember(configBody);
    leftMenu.hideMember(submenu);
  }
})

//Forms
isc.VStack.create({
    ID: "Forms",
    membersMargin: 20,
    width: "50%",
    members: [
      fontsForm,
      controlsForm,
      btn,
      showHeader,
    ]
});

isc.VLayout.create({
  ID: "configBody",
  width: 550,
  top: -500,
  styleName: "configBody",
  //backgroundImage: "backgrounds/configurator_body.jpg",
  members: [
    configName,
    closeStyles,
    Forms,
  ],
  animateTime: 200
});

// configBody.hide();

isc.HLayout.create({
  ID:	"controlLayout",
  membersMargin: 0,
  animateMembers:true,
  height: "100%", width: "100%",
  styleName: "cntrLyout",
  members: [
    leftMenu,
    configBody,
    countryTree,
  ]
});
