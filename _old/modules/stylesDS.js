/**
 * @Author: Gor Julhakyan
 * @Date:   2017-10-13T22:17:28+04:00
 * @Email:  gorjulhakyan90@gmail.com
 * @Project: Limb Framework
 * @Filename: stylesDS.js
 * @Last modified by:   Gor Julhakyan
 * @Last modified time: 2017-10-13T22:21:10+04:00
 * @License: ISC
 * @Copyright: 2017 Gor Julhakyan
 */

 isc.DataSource.create({
     ID:"STYLES",
     dataFormat:"json",
     dataURL:"/stylesData.json",
     fields:[
         {title:"treeGridBodyBg", name:"treeGridBodyBg"},
         {title:"Population", name:"population"},
         {title:"Total Area", name:"total_area"},
         {title:"Government", name:"government"}
     ]
 });
