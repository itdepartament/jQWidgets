/*
jQWidgets v4.5.1 (2017-Feb)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){var b=0;a.jqx.jqxWidget("jqxTouch","",{}),a.extend(a.jqx._jqxTouch.prototype,{defineInstance:function(){this.swipeMin=50,this.swipeMax=500,this.swipeDelay=1e3,this.tapHoldDelay=750,this.swipeMaxVerticalDisance=100,this.swipeMaxHorizontalDisance=100,this.orientationChangeEnabled=!0,this._eventsMap={mousedown:a.jqx.mobile.getTouchEventName("touchstart"),mouseup:a.jqx.mobile.getTouchEventName("touchend"),mousemove:a.jqx.mobile.getTouchEventName("touchmove")},this._swipeLocked=!1,this._rotationInterval=200,this._events=["tap","taphold","swipe","swipeleft","swiperight","swipetop","swipebottom","orientationchange"],this._instanceId=-1},createInstance:function(){b+=1,this._instanceId=b,this._isTouchDevice=a.jqx.mobile.isTouchDevice(),this._defineRotateHandler()},refresh:function(){this._removeEventListeners(),this._addEventListeners()},_defineRotateHandler:function(){var a=this;this._rotateHandler||(this._rotateHandler=function(){a._checkOrientation()})},_getEvent:function(a){return this._isTouchDevice&&(a=this._eventsMap[a]),a+this._getEventNamespace()},_getEventNamespace:function(){return".swipe"+this._instanceId},_removeEventListeners:function(){clearInterval(this._rotateInterval),this.removeHandler(a(document),this._getEvent("mouseup")),this.removeHandler(this.host,this._getEvent("mousedown")),this.removeHandler(this.host,this._getEvent("mousemove")),window.removeEventListener&&(window.removeEventListener("resize",this._rotateHandler),window.removeEventListener("orientationchange",this._rotateHandler))},_addEventListeners:function(){var a=this;this.addHandler(this.host,this._getEvent("mouseup"),function(b){a._resetSwipe(),a._resetTap()}),this.addHandler(this.host,this._getEvent("mousedown"),function(b){a._initSwipe(b),a._initTap(b)}),this.addHandler(this.host,this._getEvent("mousemove"),function(b){return a._maxSwipeVerticalDistance=Math.max(a._maxSwipeVerticalDistance,Math.abs(a._startY-a._getCoordinates(b).y)),a._maxSwipeHorizontalDistance=Math.max(a._maxSwipeHorizontalDistance,Math.abs(a._startX-a._getCoordinates(b).x)),a._mouseMoved=!0,a._handleSwipeEvents(b)}),this._rotationListeners()},_handleSwipeEvents:function(a){var b=!0;return this._mouseDown&&!this._tapHoldFired&&(b=this._handleVerticalSwipeEvents(a),b=this._handleHorizontalSwipeEvents(a)),this._lastPosition=this._getCoordinates(a),b},_handleVerticalSwipeEvents:function(a){var b,c;return b=this._getCoordinates(a).y,c=b-this._startY,!(this._maxSwipeHorizontalDistance<this.swipeMaxHorizontalDisance)||this._swiped(a,c,2)},_handleHorizontalSwipeEvents:function(a){var b,c;return b=this._getCoordinates(a).x,c=b-this._startX,!(this._maxSwipeVerticalDistance<this.swipeMaxVerticalDisance)||this._swiped(a,c)},_swiped:function(a,b,c){return c=c||0,Math.abs(b)>=this.swipeMin&&!this._swipeEvent&&!this._swipeLocked&&(this._swipeEvent=this._getSwipeEvent(b,c)),!(Math.abs(b)<=this.swipeMax)||(a.stopImmediatePropagation(),!1)},_getSwipeEvent:function(a,b){var c;return c=a<0?{eventId:3+b,data:{target:this.host}}:{eventId:4+b,data:{target:this.host}}},_resetSwipe:function(){this._swipeEvent&&!this._swipeLocked&&(this._raiseEvent(2,this._swipeEvent.data),this._raiseEvent(this._swipeEvent.eventId,this._swipeEvent.data)),clearTimeout(this._swipeTimeout),this._mouseDown=!1},_resetTap:function(){clearTimeout(this._tapHoldTimeout),this._tapHoldFired||this._mouseMoved||this._raiseEvent(0,{target:this.host})},_initTap:function(a){var b=this;this._mouseMoved=!1,this._tapHoldFired=!1,this._tapHoldTimeout=setTimeout(function(){b._mouseMoved||(b._raiseEvent(1,{target:this.host}),b._tapHoldFired=!0)},this.tapHoldDelay)},_initSwipe:function(a){var b=this;this._mouseDown=!0,this._maxSwipeVerticalDistance=0,this._maxSwipeHorizontalDistance=0,this._startX=this._getCoordinates(a).x,this._startY=this._getCoordinates(a).y,this._swipeLocked=!1,this._swipeEvent=null,this._swipeTimeout=setTimeout(function(){b._swipeLocked=!0},this.swipeDelay)},_rotationListeners:function(){var a=this;this._previousOrientation=window.orientation,this._previousWidth=screen.width,this.orientationChangeEnabled&&(window.addEventListener&&(window.addEventListener("resize",this._rotateHandler,!1),window.addEventListener("orientationchange",this._rotateHandler,!1)),this._rotateInterval=setInterval(function(){a._checkOrientation()},this._rotationInterval))},_checkOrientation:function(){var a="vertical";window.orientation===this._previousOrientation&&this._previousWidth===screen.width||((90===window.orientation||screen.width>screen.height)&&(a="horizontal"),this._raiseEvent(7,{orientation:a})),this._previousOrientation=window.orientation,this._previousWidth=screen.width},_raiseEvent:function(b,c){var d=a.Event(this._events[b]);return d.args=c,this.host.trigger(d)},_getCoordinates:function(b){var c=a.jqx.position(b);return c.x=c.left,c.y=c.top,c},propertyChangedHandler:function(a,b,c,d){"orientationChangeEnabled"===b&&this.refresh()},isTouchDevice:function(){return this._isTouchDevice}})}(jqxBaseFramework);

