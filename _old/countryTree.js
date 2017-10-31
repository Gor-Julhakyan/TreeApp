isc.DataSource.create({
    dataURL:"./shared/ds/countryData.json",
    dataFormat: "json",
    allowAdvancedCriteria:true,
    ID:"countryDS",
})

isc.TreeAppTreeGrid.create({
    ID: "countryTree",
    autoDraw: false,
    autoFetchData: true,
    canReparentNodes: false,
    modelType: "parent",
    nameProperty: "countryName",
    idField: "id",
    parentIdField: "parentId",
    dataSource:"countryDS",
    showHeader:false,
    bodyStyleName:"countryTreeBody",
    baseStyle:"countryTree",
    dataProperties: {openProperty: "isOpen"},
    fields:[
        {
            name: "countryName",
            title: "Country",
            type: "text",
        },
        {
            name: "continent",
            title: "Continent",
            type: "text"
        },
        {
            name: "countryCode",
            title: "Country Code",
            type: "text"
        },
        {
            name: "capital",
            title: "Capital",
            type: "text"
        },
        {
            name: "area",
            title: "Area",
            type: "text"
        },
        {
            name: '<img src="icon" alt="{countryName}">',
            title: "Flag",
            type: "img"
        },
        {
            name: "article",
            title: "Wiki",
            type: "link"
        },
    ],

    // customize appearance
    colorRendering:true,
    width: GetTreeStyles.Width,
    height: GetTreeStyles.Height,
    left: GetTreeStyles.PosLeft,
    top: GetTreeStyles.PosTop,
    nodeIcon: GetTreeStyles.NodeIcon,
    folderIcon: GetTreeStyles.FolderIcon,
    // folderbackground: "#212121",
    showOpenIcons:false,
    showDropIcons:false,
    closedIconSuffix:"",
    // selectionAppearance:"checkbox",
    showSelectedStyle:false,
    showPartialSelection:false,
    cascadeSelection:false,
    bodyBackgroundColor: null,
    background: GetTreeStyles.BodyBg,
    showHeader: GetTreeStyles.HeaderShow,
    // showHeaderContextMenu: GetTreeStyles.HeaderMenu,
    // headerBackgroundColor: GetTreeStyles.HeaderBg,
    animateFolders: true,
    animateFolderSpeed: 100,
    getCellCSSText : function (record, rowNum, colNum) {
        return window.treeStyles;
    },
    nodeClick: function (countryTree, node, recordNum) {
      console.log(node);
    }
});
