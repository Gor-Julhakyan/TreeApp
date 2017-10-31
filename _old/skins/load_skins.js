/**
 * @Author: Gor Julhakyan
 * @Date:   2017-10-14T01:12:14+04:00
 * @Email:  gorjulhakyan90@gmail.com
 * @Project: Limb Framework
 * @Filename: load_skins.js
 * @Last modified by:   Gor Julhakyan
 * @Last modified time: 2017-10-14T02:03:46+04:00
 * @License: ISC
 * @Copyright: 2017 Gor Julhakyan
 */


isc.Page.setSkinDir("./skins/");

isc.Page.loadStyleSheet("[SKIN]/skin_styles.css", theWindow)

isc.Page.checkBrowserAndRedirect("[SKIN]/unsupported_browser.html");

isc.Class.modifyFrameworkStart();
