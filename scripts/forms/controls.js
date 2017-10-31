function getIcon(stt){
  return stt ? "icons/on.png" : "icons/off.png";
}

isc.HStack.create({
  styleName: "switch-row",
  height: 48,
  ID: "header",
  members: [
    isc.HTMLFlow.create({
      styleName: "formTitle",
      contents: "Show Header"
    }),

    isc.OnOffSwitch.create({
      icon: getIcon(treeStats.header),
      click: function() {
        treeStats.header = !treeStats.header;
        this.setIcon(getIcon(treeStats.header));
        countryTree.setShowHeader(treeStats.header);
      },
    }),

    isc.HTMLFlow.create({
      styleName: "switch-info",
      contents: "Enable/Disables Tree Header"
    })

  ],
})

isc.HStack.create({
  styleName: "switch-row",
  height: 48,
  ID: "connectors",
  members: [
    isc.HTMLFlow.create({
      styleName: "formTitle",
      contents: "Tree Connectors"
    }),

    isc.OnOffSwitch.create({
      icon: getIcon(treeStats.connectors),
      click: function() {
        treeStats.connectors = !treeStats.connectors;
        this.setIcon(getIcon(treeStats.connectors));
        countryTree.showConnectors = treeStats.connectors;
      },
    }),

    isc.HTMLFlow.create({
      styleName: "switch-info",
      contents: "Enable/Disables tree connectors"
    })

  ],
})

isc.HStack.create({
  styleName: "switch-row",
  height: 48,
  ID: "sorting",
  members: [
    isc.HTMLFlow.create({
      styleName: "formTitle",
      contents: "Sorting"
    }),

    isc.OnOffSwitch.create({
      icon: getIcon(treeStats.sorting),
      click: function() {
        treeStats.sorting = !treeStats.sorting;
        this.setIcon(getIcon(treeStats.sorting));
        countryTree.OnClient(treeStats.sorting);
      },
    }),

    isc.HTMLFlow.create({
      styleName: "switch-info",
      contents: "Enable/Disables Tree Sorting"
    })

  ],
})

isc.HStack.create({
  styleName: "switch-row",
  height: 48,
  ID: "headerContextMenu",
  members: [
    isc.HTMLFlow.create({
      styleName: "formTitle",
      contents: "Header context Menu"
    }),

    isc.OnOffSwitch.create({
      icon: getIcon(treeStats.headerMenu),
      click: function() {
        treeStats.headerMenu = !treeStats.headerMenu;
        this.setIcon(getIcon(treeStats.headerMenu));
        countryTree.showHeaderContextMenu = treeStats.headerMenu;
      },
    }),

    isc.HTMLFlow.create({
      styleName: "switch-info",
      contents: "Enable/Disables Header Context Menu"
    })

  ],
})
