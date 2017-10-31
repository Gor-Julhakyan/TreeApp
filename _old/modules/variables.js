/**
 * @Author: Gor Julhakyan
 * @Date:   2017-10-12T23:12:43+04:00
 * @Email:  gorjulhakyan90@gmail.com
 * @Project: Limb Framework
 * @Filename: variables.js
 * @Last modified by:   Gor Julhakyan
 * @Last modified time: 2017-10-15T15:21:19+04:00
 * @License: ISC
 * @Copyright: 2017 Gor Julhakyan
 */


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
 BodyBg: '#212121',
 BodyColor: '#e0e0e0',
});
GetTreeStyles.BodyBg = "#888888";
isc.Label.create({
 ID: "menu",
 styles: "EditStyles"
});
