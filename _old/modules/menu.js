/**
 * @Author: Gor Julhakyan
 * @Date:   2017-10-13T00:16:38+04:00
 * @Email:  gorjulhakyan90@gmail.com
 * @Project: Limb Framework
 * @Filename: menu.js
 * @Last modified by:   Gor Julhakyan
 * @Last modified time: 2017-10-17T22:52:12+04:00
 * @License: ISC
 * @Copyright: 2017 Gor Julhakyan
 */


var submenu = [
  {id: 'cfgFont', title: 'Fonts', icon: 'icons/font.png'},
  {id: 'cfgBg', title: 'Backgrounds', icon: 'icons/bg.png'},
  {id: 'cfgPos', title: 'Positions', icon: 'icons/pos.png'},
];

//Left Menu Buttons
isc.MenuButton.create({
  ID: "styles",
  title: "Settings",
  icon: "icons/settings.png",
  click: function() {
    controlLayout.showMember(configBody);
    leftMenu.showMember(submenu);
  }
});

isc.MenuButton.create({
  ID: "addNewItem",
  title: "Add",
  icon: "icons/add_new_item.png",
  click: "countryTree.startEditingNew({quantity:1})"
});

isc.MenuButton.create({
  ID: "deleteItem",
  title: "Delete",
  icon: "icons/delete.png",
  click: "countryTree.removeSelectedData()"
});

isc.MenuButton.create({
  ID: "modifyItem",
  title: "Edit",
  icon: "icons/edit_item.png",
  click: "countryTree.startEditing()"
});

//Sub Menu
var submenuItems = [];

submenu.forEach(elem => {
  isc.MenuButton.create({
    ID: elem.id,
    title: elem.title,
    icon: elem.icon,
    iconSize: 14,
    baseStyle: "submenu",
    click: "",
  });
  submenuItems.push(elem.id);
});

//Sub Menu Stack
isc.VStack.create({
  ID: "submenu",
  animateTime: 200,
  members: submenuItems
});

submenu.hide();

//left Sudebar Menu Stack
isc.VStack.create({
    ID: "leftMenu",
    styleName: "leftmenu",
    left: 250,
    animateMembers: true,
    members: [
      styles,
      submenu,
      addNewItem,
      deleteItem,
      modifyItem,
    ],
});
