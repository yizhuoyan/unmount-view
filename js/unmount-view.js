(function(window,document){
	"use strict";
	/**
	 * how to user:
	 *
	 * url:/xx?unmout=admin,mod&...
	 *
	 * <button class="admin">add</button>
	 *
	 */
	var UNMOUNT_VIEW_CLASS_PATTERN=/[?&]unmount=([^&]+).*$/;


	var getUnmountViewClassArray=function(){
		var result=UNMOUNT_VIEW_CLASS_PATTERN.exec(window.location.href);
		if(result){
			return result[1].split(",");
		}
		return [];
	};
	var unmountViews=function(){
		var unmountViewClassArray=getUnmountViewClassArray();
		var unmountViews;
		for(var i=unmountViewClassArray.length;i-->0;){
			unmountViews=document.getElementsByClassName(unmountViewClassArray[i]);
			for(var j=unmountViews.length,v;j-->0;){
				//just delete it
				(v=unmountViews[j]).parentNode.removeChild(v);
			}
		}
	}
	window.addEventListener("load",function(evt){
		unmountViews();
	},false);






})(window,document);
