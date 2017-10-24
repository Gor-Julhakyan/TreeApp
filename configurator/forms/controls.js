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
  ID: "connectors",
  members: [
    isc.HTMLFlow.create({
      styleName: "formTitle",
      contents: "Tree Connectors"
    }),

    isc.OnOffSwitch.create({
      icon: getIcon(treeStats.connrctors),
      click: function() {
        treeStats.connrctors = !treeStats.connrctors;
        this.setIcon(getIcon(treeStats.connrctors));
        // countryTree.setShowConnectors(treeStats.connectors);
        countryTree.fetchData;
        countryTree.click;
        countryTree.setStyleName("switch-info");

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
  ID: "sorting",
  members: [
    isc.HTMLFlow.create({
      styleName: "switch-label",
      contents: "Sorting"
    }),

    isc.OnOffSwitch.create({
      icon: getIcon(treeStats.sorting),
      click: function() {
        treeStats.sorting = !treeStats.sorting;
        this.setIcon(getIcon(treeStats.sorting));
        countryTree.setCanSort(treeStats.sorting);
      },
    }),

    isc.HTMLFlow.create({
      styleName: "switch-info",
      contents: "Enable/Disables Tree Sorting"
    })

  ],
})
