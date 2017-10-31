/*

  SmartClient Ajax RIA system
  Version v11.1p_2017-10-10/EVAL Development Only (2017-10-10)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF
     ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  DEVELOPMENT ONLY - DO NOT DEPLOY
     This software is provided for evaluation, training, and development
     purposes only. It may include supplementary components that are not
     licensed for deployment. The separate DEPLOY package for this release
     contains SmartClient components that are licensed for deployment.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. You are expressly prohibited
     from attempting to reverse engineer this software or modify this
     software for human readability.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_RealtimeMessaging){isc.module_RealtimeMessaging=1;isc._moduleStart=isc._RealtimeMessaging_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log&&isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={message:'RealtimeMessaging load/parse time: '+(isc._moduleStart-isc._moduleEnd)+'ms',category:'loadTime'};if(isc.Log&&isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime');else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM;else isc._preLog=[isc._pTM]}isc.definingFramework=true;if(window.isc&&isc.version!="v11.1p_2017-10-10/EVAL Development Only"&&!isc.DevUtil){isc.$113h=function(){var _1=false;if(isc.version.toLowerCase().contains("pro")||isc.version.toLowerCase().contains("lgpl")){_1=true}else{var _2=isc.version;if(_2.indexOf("/")!=-1){_2=_2.substring(0,_2.indexOf("/"))}
var _3="v11.1p_2017-10-10/EVAL Development Only";if(_3.indexOf("/")!=-1){_3=_3.substring(0,_3.indexOf("/"))}
if(_2!=_3){_1=true}}
if(_1){isc.logWarn("SmartClient module version mismatch detected: This application is loading the core module from SmartClient version '"+isc.version+"' and additional modules from 'v11.1p_2017-10-10/EVAL Development Only'. Mixing resources from different SmartClient packages is not supported and may lead to unpredictable behavior. If you are deploying resources from a single package you may need to clear your browser cache, or restart your browser."+(isc.Browser.isSGWT?" SmartGWT developers may also need to clear the gwt-unitCache and run a GWT Compile.":""))}}
isc.$113h()}
isc.ClassFactory.defineClass("Messaging");isc.A=isc.Messaging;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.messagingURL="[ISOMORPHIC]/messaging";isc.A.websocketURL="[ISOMORPHIC]/websocket";isc.A.useEventSource=(!isc.Browser.isSafari||parseFloat(isc.Browser.rawSafariVersion)>=534.29)&&!!window.EventSource;isc.A.useWebSocket=false;isc.A.webSocketConnectTimeout=10000;isc.A.$zq=1;isc.A._channels={};isc.A.$zt=[];isc.A.$zu=250;isc.A.connectTimeout=4000;isc.A.legacyCommHTTPMethod="GET";isc.B.push(isc.A.useAJAX=function isc_c_Messaging_useAJAX(){return!this.useEventSource&&!this.useWebSocket&&((isc.Browser.isFirefox&&isc.Browser.minorVersion<4)||isc.Browser.isSafari)},isc.A.$1129=function isc_c_Messaging__sendDisconnectUponConnect(){return!this.useEventSource&&!this.useWebSocket&&isc.Browser.isSafari&&!this.$189a});isc.B._maxIndex=isc.C+2;isc.A=isc.Messaging;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$171c=[];isc.B.push(isc.A.$1123=function isc_c_Messaging__handleEventSourceError(_1){},isc.A.send=function isc_c_Messaging_send(_1,_2,_3,_4){if(!isc.hasOptionalModules("RealtimeMessaging")&&!this.isRemoteDebug){this.logWarn("RealtimeMessaging not licensed - refusing to send()");return}
if(!isc.isAn.Array(_1))_1=[_1];if(_4&&_4.sequenced){this.$171c.add({channels:_1,data:_2,callback:_3,requestProperties:_4});if(this.$171c.length>1)return}
this.$139v(_1,_2,_3,_4)},isc.A.$139v=function isc_c_Messaging__send(_1,_2,_3,_4){if(this.useWebSocket&&this.$zr&&window[this.$zr]){window[this.$zr].send(isc.Comm.serialize({command:"send",sendToChannels:_1,data:_2},false));this.fireCallback(_3)}else{isc.DMI.callBuiltin({methodName:"messagingSend",callback:"isc.Messaging.$zv(data, rpcRequest)",arguments:[{type:"send",sendToChannels:_1,subscribedChannels:this._channels,data:_2}],requestParams:isc.addProperties({showPrompt:false,callback:_3,willHandleError:_3!=null},_4)})}},isc.A.$zv=function isc_c_Messaging__sendCallback(_1,_2){if(_2&&_2.sequenced){this.$171c.removeAt(0);var _3=this.$171c[0];if(_3){this.$139v(_3.channels,_3.data,_3.callback,_3.requestProperties)}}},isc.A.getSubscribedChannels=function isc_c_Messaging_getSubscribedChannels(){return isc.getKeys(this._channels)},isc.A.subscribe=function isc_c_Messaging_subscribe(_1,_2,_3,_4,_5){if(!isc.hasOptionalModules("RealtimeMessaging")&&!this.isRemoteDebug){this.logWarn("RealtimeMessaging not licensed - refusing to subscribe()");return}
var _6=true;if(!this._channels[_1]){this._channels[_1]={};if(_5)this._channels[_1].data=_5;if(_4)this._channels[_1].selector=_4;this._channels[_1].subscriptionCallback=_3;this.$zw();_6=false}
this._channels[_1].callback=_2;if(_6){this.fireCallback(_3,null,null,null,true)}
return},isc.A.unsubscribe=function isc_c_Messaging_unsubscribe(_1){if(!this._channels[_1])return;delete this._channels[_1];this.$zw();if(isc.isAn.emptyObject(this._channels))this.disconnect()},isc.A.connected=function isc_c_Messaging_connected(){return this._channels&&isc.getKeys(this._channels).length>0&&this.$159v},isc.A.disconnect=function isc_c_Messaging_disconnect(){this._channels={};this.$74q();this.$zy=null;isc.Timer.clear(this.$zz);this.$zz=null;isc.Timer.clear(this.$z0);this.$z0=null},isc.A.$zw=function isc_c_Messaging__reconnect(){if(!isc.Page.isLoaded()){if(!this.$1124){isc.Page.setEvent("load","isc.Messaging.$zw()");this.$1124=true}
return}
if(!this.$zz){this.$zz=isc.Timer.setTimeout("isc.Messaging.$z1()",this.$zq,isc.Timer.MSEC)}},isc.A.$z2=function isc_c_Messaging__connectRetry(){if(this.$zs&&window[this.$zs]){if(window[this.$zs].destroy){window[this.$zs].destroy()}else if(window[this.$zs].close){try{window[this.$zs].close()}catch(e){}}}
this.$zs=null;this.logDebug("connect failed, retrying in: "+this.connectTimeout+"ms");this.$zw()},isc.A._serverConnTerminate=function isc_c_Messaging__serverConnTerminate(){this.$zw()},isc.A.$z1=function isc_c_Messaging__connect(){if(this.usingAJAX&&!isc.Page.isLoaded()){if(!this.$1124){isc.Page.setEvent("load","isc.Messaging.$zw()");this.$1124=true}
return}
isc.Timer.clear(this.$zz);this.$zz=null;if(this.$zs){this.$z3=true;this.logDebug("connect pending - deferring openConnection request.");return}
if(this.getSubscribedChannels().length==0)return;this.$1125();var _1=isc.HiddenFrame.create({useHtmlfile:isc.Browser.isIE});this.$zs=_1.getID();var _2={type:"connect",connectionID:this.$zs,subscribedChannels:isc.Comm.serialize(this._channels)};var _3=this.useWebSocket?isc.Page.getURL(this.websocketURL).replace(/^http(s)?/i,"ws$1"):isc.Page.getURL(this.messagingURL);var _4=isc.URIBuilder.create(_3);_4.setQueryParam("ts",isc.timestamp());_4.setQueryParam("isc_noLog","1");if(this.$1129()){_4.setQueryParam("disconnectUponConnect","true");this.$189a=true}
if(this.useWebSocket){var _5=this;_1.destroy();_1=null;if(this.$189v==null){this.$189v=0}else{this.$189v++}
_2.connectionID="websocket"+this.$189v;this.$zs=_2.connectionID;for(var _6 in _2){if(!_2.hasOwnProperty(_6))continue;_4.setQueryParam(_6,String(_2[_6]))}
var _7=window[this.$zs]=new WebSocket(_4.uri);this.$189w=isc.Timer.setTimeout(function(){_5.logDebug("websocket timed out to: "+_4.uri+" - downgrading to next available protocol");_5.useWebSocket=false;_5.$zs=window[_5.$zs]=null;_5.$189b();_5.$zw()},this.webSocketConnectTimeout,isc.Timer.MSEC);_7.onopen=function(_19){isc.Timer.clearTimeout(_5.$189w);delete _5.webSocketInitTimer;_5.logDebug("websocket connected to: "+_4.uri)};_7.onerror=function(_19){isc.Timer.clearTimeout(_5.$189w);delete _5.webSocketInitTimer;_5.logDebug("websocket error connecting to: "+_4.uri+": "+isc.echoFull(_19));if(_5.$189x){_5.logDebug("websocket known working - continuing to retry")}else{_5.logDebug("marking websocket protocol unavailable - downgrading to next available protocol");_5.useWebSocket=false;_5.$zs=window[_5.$zs]=null;_5.$189b();_5.$zw()}};_7.onmessage=function(_19){var _8=isc.eval("var message = "+_19.data+";message;");if(_8.command){if(_8.command=="connectCallback"){_5.$189x=true;_5._connectCallback(_8.connectionID,_8.config);_5.$1887()}else if(_8.command=="keepalive"){_5._keepalive(_8.connectionID)}else if(_8.command=="serverConnTerminate"){_5._serverConnTerminate(_8.connectionID)}}else{_5._message(_8)}};_7.onclose=function(_19){var _9=_19.code;var _10=_19.reason;_5.logDebug("Connection closed - code: "+_9+", reason: "+_10)}}else if(this.useEventSource){_1.$ic();for(var _6 in _2){if(!_2.hasOwnProperty(_6))continue;_4.setQueryParam(_6,String(_2[_6]))}
_4.setQueryParam("eventStream","true");var _11=this.$112x=new EventSource(_4.uri);_11.onerror=isc.Messaging.$1123;var _12=function createEventListener(_19){var _13=function eventListenerFun(_20){var _14=location.origin;if(_14==null){_14=location.protocol+"//"+location.host}
if(_20.origin==null||_20.origin!=_14){isc.Messaging.logWarn("'"+_19+"' event received with wrong origin: "+_20.origin+" (should be "+_14+")");return}
if(_1.$ie!=null){_1.$ie.document.write("<SCRIPT>"+_20.data+"</SCRIPT>")}else{_11.removeEventListener(_19,_13,false)}};return _13};_11.addEventListener("connectCallback",this.$112y=_12("connectCallback"),false);_11.addEventListener("establishAck",this.$112z=_12("establishAck"),false);_11.addEventListener("keepalive",this.$1120=_12("keepalive"),false);_11.addEventListener("message",this.$1121=_12("message"),false);_11.addEventListener("serverConnTerminate",this.$1122=_12("serverConnTerminate"),false)}else if(this.useAJAX()){_1.$ic();var _15=0;var _16=this.$1126=function(){if(_16!=isc.Messaging.$1126)return;var _17=isc.Messaging.$1127;if(!_17)return;if(_17.readyState==3||_17.readyState==4||(isc.Browser.isOpera&&_17.readyState==2))
{var _18=_17.responseText.substring(_15);_15=_17.responseText.length;_1.$ie.document.write(_18)}};this.$1127=isc.Comm.sendXmlHttpRequest({URL:_4.uri,fields:_2,httpMethod:this.legacyCommHTTPMethod,transaction:{changed:function(){},requestData:_2},onreadystatechange:_16})}else{isc.Comm.sendHiddenFrame({URL:_4.uri,fields:_2,httpMethod:this.legacyCommHTTPMethod,transaction:{changed:function(){},requestData:_2},frame:_1})}
this.$z4=isc.Timer.setTimeout("isc.Messaging.$z2()",this.connectTimeout,isc.Timer.MSEC)},isc.A._connectCallback=function isc_c_Messaging__connectCallback(_1,_2){if(_1!=this.$zs)return;this.$z5=_2.keepaliveInterval;this.$z6=_2.keepaliveReestablishDelay;this.$z7=this.$z5+this.$z6;this.$z8=_2.connectionTTL;this.connectTimeout=_2.connectTimeout;if(this.$zr&&window[this.$zr]){if(window[this.$zr].destroy){window[this.$zr].destroy()}else if(window[this.$zr].close){try{window[this.$zr].close()}catch(e){}}}
this.$zr=this.$zs;this.$zs=null;isc.Timer.clear(this.$z4);this.$z9();this.$0a();this.logDebug("persistent server connection open - ttl: "+this.$z8+"ms, keepaliveDelay: "+this.$z7+"ms, connectTimeout: "+this.connectTimeout+"ms.")
this.$189c();if(this.$z3){this.$z3=false;this.$zw();return}
if(this.useWebSocket){if(this.$z8!=-1){var _3=this;isc.Timer.setTimeout(function(){_3.$zw()},this.$z8,isc.Timer.MSEC)}else{this.logDebug("websocket: server specifies no connection timeout")}}
for(var _4 in this._channels){var _5=this._channels[_4];if(_5.subscriptionCallback){this.fireCallback(_5.subscriptionCallback,null,null,null,true);delete _5.subscriptionCallback}}},isc.A.$189c=function isc_c_Messaging__connectionUp(){this.$159v=true;this.connectionUp()},isc.A.connectionUp=function isc_c_Messaging_connectionUp(){},isc.A.$189b=function isc_c_Messaging__connectionDown(){this.$159v=false;this.connectionDown()},isc.A.connectionDown=function isc_c_Messaging_connectionDown(){},isc.A.$z9=function isc_c_Messaging__resetStatusBar(){var _1=isc.Browser.isIE?"Done":"Stopped";isc.Timer.setTimeout("window.status='"+_1+"'",0)},isc.A._establishAck=function isc_c_Messaging__establishAck(_1){if(_1&&window[_1])window[_1].destroy()},isc.A.$1887=function isc_c_Messaging__sendKeepalive(){if(this.useWebSocket&&this.$zr&&window[this.$zr]){window[this.$zr].send(isc.Comm.serialize({command:"keepalive"},false))}},isc.A._keepalive=function isc_c_Messaging__keepalive(_1){this.$z9();isc.Timer.clear(this.$1888);this.$1888=isc.Timer.setTimeout("isc.Messaging.$1887()",this.$z5-100,isc.Timer.MSEC);if(_1!=this.$zr)return;this.$0a();this.logDebug("keepalive on conn: "+_1)},isc.A.$0b=function isc_c_Messaging__keepaliveWatchdog(){this.logDebug("connection to server lost, re-establishing...");this.$zw();this.$189b()},isc.A.$0a=function isc_c_Messaging__resetKeepaliveTimer(){isc.Timer.clear(this.$z0);this.$z0=isc.Timer.setTimeout("isc.Messaging.$0b()",this.$z7,isc.Timer.MSEC)},isc.A._message=function(message){if(isc.isA.String(message))message=isc.eval("var message = "+message+";message;");var conn=message.conn,channels=message.channels,id=message.id,data=message.data;this.$z9();if(conn!=this.$zr)return;this.$0a();if(this.$zt.contains(id)){this.logDebug("ignoring duplicate messageID: "+id);return}
this.$zt.push(id);if(this.$zt.length>this.$zu)this.$zt.shift();for(var i=0;i<channels.length;i++){var channel=channels[i];if(!this._channels[channel])continue;var channel=this._channels[channel],callback=channel.callback
if(callback)this.fireCallback(callback,"data",[data],channel,true)}},isc.A.$1125=function isc_c_Messaging__cleanupAlt(){if(this.$112x!=null){var _1=this.$112x;_1.close();_1.removeEventListener("connectCallback",this.$112y,false);delete this.$112y;_1.removeEventListener("establishAck",this.$112z,false);delete this.$112z;_1.removeEventListener("keepalive",this.$1120,false);delete this.$1120;_1.removeEventListener("message",this.$1121,false);delete this.$1121;_1.removeEventListener("serverConnTerminate",this.$1122,false);delete this.$1122;_1=null;delete this.$112x}
if(this.$1127!=null){this.$1127.abort();delete this.$1127}},isc.A.$74q=function isc_c_Messaging__destroyConns(){if(this.$zs!=null&&window[this.$zs]){if(window[this.$zs].destroy){window[this.$zs].destroy()}else if(window[this.$zs].close){try{window[this.$zs].close()}catch(e){}}}
if(this.$zr!=null&&window[this.$zr]!=null&&this.$zr!=this.$zs){if(window[this.$zr].destroy){window[this.$zr].destroy()}else if(window[this.$zr].close){try{window[this.$zr].close()}catch(e){}}}
this.$1125();delete this.$zr;delete this.$zs;this.$189b()});isc.B._maxIndex=isc.C+27;isc.Page.setEvent("unload",function(){isc.Messaging.$74q()});isc.defineClass("MessagingDMIDiscoveryDS","DataSource");isc.A=isc.MessagingDMIDiscoveryDS.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.clientOnly=true;isc.A.fields=[{name:"GUID",primaryKey:true},{name:"userAgent",title:"User Agent"},{name:"lastContact",title:"Last Contact",type:"datetime"}];isc.B.push(isc.A.init=function isc_MessagingDMIDiscoveryDS_init(){this.Super("init",arguments);this.cacheData=[];this.discover()},isc.A.invalidateCache=function isc_MessagingDMIDiscoveryDS_invalidateCache(){var _1=this;var _2=this.getCacheData();while(_2.length)_1.removeData(_2[0]);this.delayCall("discover")},isc.A.discover=function isc_MessagingDMIDiscoveryDS_discover(){var _1=this;if(!this.client){this.client=isc.MessagingDMIClient.create({socketProperties:{doNotTrackRPC:true,isRemoteDebug:this.isRemoteDebug}})}
this.client.call({sendChannel:this.discoverOnChannel,methodName:"discover",timeout:this.discoveryTimeout,callback:function(_2){_1.updateServer(_2)}})},isc.A.updateServer=function isc_MessagingDMIDiscoveryDS_updateServer(_1){_1.lastContact=new Date();var _2=this;this.fetchData({GUID:_1.GUID},function(_3){if(_3.data&&_3.data.getLength()==0){_2.addData(_1)}else{_2.updateData(_1)}})});isc.B._maxIndex=isc.C+4;isc._nonDebugModules=(isc._nonDebugModules!=null?isc._nonDebugModules:[]);isc._nonDebugModules.push('RealtimeMessaging');isc.checkForDebugAndNonDebugModules();isc._moduleEnd=isc._RealtimeMessaging_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('RealtimeMessaging module init time: '+(isc._moduleEnd-isc._moduleStart)+'ms','loadTime');delete isc.definingFramework;if(isc.Page)isc.Page.handleEvent(null,"moduleLoaded",{moduleName:'RealtimeMessaging',loadTime:(isc._moduleEnd-isc._moduleStart)});}else{if(window.isc&&isc.Log&&isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'RealtimeMessaging'.");}/** RealtimeMessagingModule End **/
