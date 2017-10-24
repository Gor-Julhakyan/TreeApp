<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="/WEB-INF/iscTaglib.xml" prefix="isomorphic" %>
<HTML><HEAD><TITLE>geo.ui.xml</TITLE>
<isomorphic:loadISC skin="Enterprise" includeModules="Drawing,Analytics,DocViewer"/>
  <link rel="stylesheet" href="./styles/main.css">
 </HEAD>
  <BODY>
    <SCRIPT>
    isc.Page.setAppImgDir("./graphics/");

    console.log(localStorage.foo);


        ID="leftMenu"

        ID="countryTree"

    </SCRIPT>

    <script src="./vendor/jquery-3.2.1.min.js"></script>
    <script src="./skins/classes.js"></script>
    <script src="./countryTree.js"></script>
    <script src="./modules/menu.js"></script>
    <script src="./configurator/forms/fonts.js"></script>
    <script src="./configurator/forms/controls.js"></script>
    <script src="./configurator.js"></script>
  </BODY>
</HTML>
