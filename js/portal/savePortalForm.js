define(['../views/Container', '../Util','./parsePortalJson'],function(Container, Util, parsePortalJson){
    "use strict";
    var _ = require('underscore');
    var $ = require('jquery');
    var viewer;
    var sceneModel;
    var appsRoot;
    var isPCBroswer;
    var htmlStr = [
        '<main style="position : absolute;margin:auto;right: 0;left: 0; bottom:0; top : 0;width: 600px;height: 400px">',
        '<button style="top: 10px;position: absolute;left: 90%;background-color: rgba(38, 38, 38, 0.75);" aria-label="Close" id="closeScene" class="myModal-close" title="关闭"><span aria-hidden="true">×</span></button>',
        '<input id="portalTab1" type="radio" name="portalTab" checked>',
        '<label for="portalTab1" id="portalTab1Lab" style="font-size: 13px;">' + "场景保存" + '</label>',
        '<section id="portalTabContent1">',
        '<h1 class="title"></h1>',
            '<div id="sceneImage" style="width:300px;height:300px; float: left ;">',
               '<canvas id="sceneCanvas" style="width: 290px;height: 150px"/>',
               '<label  id = "saveDateLabel" style="font-style:italic;">'+"存储日期:" +'</label>',
               '<label id="saveDate" style="font-style:italic;margin-left: 20px"></label>',
               '<div class="ui large star rating"></div>',
            '</div>',
            '<div id="sceneMessage" style="width: 270px;height:200px;float: left; padding: 15px">',
                '<label>'+"场景名称" +'</label>',
                '<input  id="scenePortalName" class="input">',
                '<label>'+"场景标签" +'</label>',
                '<input  id="scenePortalTages" class="input" >',
                '<label>'+"作者" +'</label>',
                '<input  id="scenePortalUser" class="input" >',
                '<label>'+"描述" +'</label>',
                '<textarea id="scenePortalDescription" style="width:220px;height:50px;"></textarea>',
                '<input type="button" id="updateUser" class="btn btn-info" value="更新当前场景" style="float: right">',
                '<input type="button" id="saveUser" class="btn btn-info" value="保存" style="float: right">',
            '</div>',
        '</section>',
   '</main>',
    ].join('');
    var savePortalForm = Container.extend({
        tagName: 'div',
        id: 'sceneAttribute',
        events : {
            'click #closeScene'  : 'onCloseSceneClk',
            'click #saveUser'  : 'onSaveUserClk',
            'click #updateUser'  : 'onUpdateUserClk',
        },
        template : _.template(htmlStr),
        initialize : function(options){
            viewer = options.sceneModel.viewer;
            sceneModel = options.sceneModel;
            isPCBroswer = options.isPCBroswer
            this.render();
            this.on('componentAdded',function(parent){
                // $('main').each(function(index){
                //     $(this).myDrag({
                //         parent:'body',
                //         randomPosition:false,
                //         direction:'all',
                //         handler:false,
                //         dragStart:function(x,y){},
                //         dragEnd:function(x,y){},
                //         dragMove:function(x,y){}
                //     });
                // });



                var that = viewer.scene;
                document.getElementById("saveDate").innerText = getNowFormatDate();
                appsRoot =Window.iportalAppsRoot;
                var pattern = "/apps";
                appsRoot = appsRoot.replace(new RegExp(pattern), "");
                that.postRender.addEventListener(function(){
                        var buffer = that.context.readPixels({
                            frameBuffer:that.fxaa._fbo
                        });
                        var canvas = document.getElementById("sceneCanvas");
                        canvas.height = that.context.drawingBufferHeight;
                        canvas.width = that.context.drawingBufferWidth;
                        var ctx = canvas.getContext("2d");
                        var imgData = ctx.createImageData(canvas.width,canvas.height);
                        imgData.data.set(buffer);
                        ctx.putImageData(imgData,0,0);
                        var imagedata = ctx.getImageData(0,0,canvas.width,canvas.height);
                        var W = imagedata.width;
                        var H = imagedata.height;
                        for(var i = 0;i < imagedata.height/2;++i){
                            for(var j = 0;j < imagedata.width;++j){
                                var x = i*4*imagedata.width + 4*j;
                                var y = (imagedata.height-i)*4*imagedata.width + 4*j;
                                var r = imagedata.data[x];
                                var g = imagedata.data[x+1];
                                var b = imagedata.data[x+2];
                                var a = imagedata.data[x+3];
                                imagedata.data[x] = imagedata.data[y];
                                imagedata.data[x+1] = imagedata.data[y+1];
                                imagedata.data[x+2] = imagedata.data[y+2];
                                imagedata.data[x+3] = imagedata.data[y+3];
                                imagedata.data[y] = r;
                                imagedata.data[y+1] = g;
                                imagedata.data[y+2] = b;
                                imagedata.data[y+3] = a;
                            }
                        }
                        ctx.clearRect(0,0,W,H);
                        ctx.putImageData(imagedata,0,0);
                    });
                //that.postRender.removeEventListener();

                if(Window.iportalAppsRoot && Window.iportalAppsRoot != "${resource.rootPath}"){
                    var sceneViewerUrl = window.location.href;
                    if (sceneViewerUrl.indexOf("?action=") == -1) {
                        var appsRoot =Window.iportalAppsRoot;
                        var pattern = "/apps";
                        appsRoot = appsRoot.replace(new RegExp(pattern), "");
                        sceneViewerUrl = sceneViewerUrl.match(/earth(\S*)/)[1];
                        if(sceneViewerUrl != '/'){
                            var regexp = new RegExp("/");
                            var sceneViewerUrl = sceneViewerUrl.replace(regexp,"");
                            $.ajax({
                                    type: "GET",
                                    url: appsRoot + "/web/scenes/" + sceneViewerUrl + ".json",
                                    contentType: "application/json;charset=utf-8",
                                    dataType: "json",
                                    async: false,
                                    success : function (json) {
                                        $('#scenePortalName').val(json.name);
                                        $('#scenePortalTages').val(json.tags);
                                        $('#scenePortalUser').val(json.nickname);
                                        $('#scenePortalDescription').val(json.description);
                                        $('#saveUser').val("另存为");
                                    }
                                }
                            )
                        }
                    }
                }
            });
        },
        render : function(){
            this.$el.html(this.template());
            return this;
        },
        onCloseSceneClk : function(evt){
        	if(evt && evt.preventDefault){
        		evt.preventDefault();
            }
        	else{
                window.event.returnValue = false;
            }
            this.$el.hide();
            return false;
        },

        onSaveUserClk : function(evt){
            appsRoot =Window.iportalAppsRoot;
            var pattern = "/apps";
            appsRoot = appsRoot.replace(new RegExp(pattern), "");
            var me = this;
            if($('#scenePortalName').val() == ""){
                Util.showErrorMsg("保存场景名称不能为空！");
                return;
            }
            var canvas = document.getElementById("sceneCanvas");
            var base64 =  canvas.toDataURL("image/jpeg",0.1);
            base64 = base64.split(",")[1];
            var data = {};
            data.layers = [];
            for(var i = 0,j = sceneModel.layers.length;i < j;i++){
                var layerModel = sceneModel.layers.at(i);
                if(layerModel.get("type") !== "KML"){
                    var obj = layerModel.toJSON();
                    data.layers.push(obj);
                }
            }
            var camera = sceneModel.viewer.scene.camera;
            data.camera = {
                position : {
                    x : camera.position.x,
                    y : camera.position.y,
                    z : camera.position.z
                },
                heading : camera.heading,
                pitch : camera.pitch,
                roll : camera.roll
            };
            data.environmentState = {
                enableLighting : sceneModel.viewer.scene.globe.enableLighting,
                skyAtmosphereShow : sceneModel.viewer.scene.skyAtmosphere.show,
                enableFog : sceneModel.viewer.scene.fog.enabled
            };
            data.isSTKTerrain = sceneModel.isSTKTerrain;
            if(sceneModel.baseLayer && 'IMAGE' != sceneModel.baseLayer.get('type')){
                data.baseLayer = sceneModel.baseLayer.toJSON();
            }
            data.analysisObjects = sceneModel.analysisObjects;
            data.terrainObjects = sceneModel.terrainObjects;
            var saveData = {
                "name":$('#scenePortalName').val(),
                "tags":$('#scenePortalTages').val(),
                "userName":$('#scenePortalUser').val(),
                "description":$('#scenePortalDescription').val(),
                "content": JSON.stringify(data)
            };
            saveData =  JSON.stringify(saveData);
            $.ajax({
                type: "POST",
                url: appsRoot + "/web/scenes.json",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                data: saveData,
                success : function (jsonResult) {
                    $.ajax({
                        type: "PUT",
                        url: appsRoot + "/web/scenes/" + parseInt(jsonResult.newResourceID) + "/thumbnail.json",
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        data: base64,
                        success : function (result) {
                            me.$el.hide();
                            Util.showErrorMsg("场景保存成功！");
                            window.location.href= appsRoot + "/apps/earth/" + jsonResult.newResourceID;
                        },
                        error: function(error)
                        {
                            Util.showErrorMsg("存储失败！请先登陆iPortal或Online账户......");
                        },
                    });
                },
                error: function()
                {
                    Util.showErrorMsg("存储失败！请先登陆iPortal或Online账户......");
                },
            });
        },

        onUpdateUserClk : function(evt){
            var me = this;
            appsRoot =Window.iportalAppsRoot;
            var pattern = "/apps";
            appsRoot = appsRoot.replace(new RegExp(pattern), "");
            var canvas = document.getElementById("sceneCanvas");
            var base64 =  canvas.toDataURL("image/jpeg",0.1);
            base64 = base64.split(",")[1];
            var data = {};
            data.layers = [];
            for(var i = 0,j = sceneModel.layers.length;i < j;i++){
                var layerModel = sceneModel.layers.at(i);
                if(layerModel.get("type") !== "KML"){
                    var obj = layerModel.toJSON();
                    data.layers.push(obj);
                }
            }
            var camera = sceneModel.viewer.scene.camera;
            data.camera = {
                position : {
                    x : camera.position.x,
                    y : camera.position.y,
                    z : camera.position.z
                },
                heading : camera.heading,
                pitch : camera.pitch,
                roll : camera.roll
            };
            data.environmentState = {
                enableLighting : sceneModel.viewer.scene.globe.enableLighting,
                skyAtmosphereShow : sceneModel.viewer.scene.skyAtmosphere.show,
                enableFog : sceneModel.viewer.scene.fog.enabled
            };
            data.isSTKTerrain = sceneModel.isSTKTerrain;
            if(sceneModel.baseLayer && 'IMAGE' != sceneModel.baseLayer.get('type')){
                data.baseLayer = sceneModel.baseLayer.toJSON();
            }
            data.analysisObjects = sceneModel.analysisObjects;
            data.terrainObjects = sceneModel.terrainObjects;

            var updateData = {
                "name":$('#scenePortalName').val(),
                "tags":$('#scenePortalTages').val(),
                "userName":$('#scenePortalUser').val(),
                "description":$('#scenePortalDescription').val(),
                "content": JSON.stringify(data)
            };
            // var updateData = {};
            // if($('#scenePortalName').val() != ""){
            //     updateData.name = $('#scenePortalName').val();
            // }
            // if($('#scenePortalTages').val() != ""){
            //     updateData.tags = $('#scenePortalTages').val();
            // }
            // if($('#scenePortalUser').val() != ""){
            //     updateData.userName = $('#scenePortalUser').val();
            // }
            // if($('#scenePortalDescription').val() != ""){
            //     updateData.description = $('#scenePortalDescription').val();
            // }
            // updateData.content = JSON.stringify(data)
            // updateData =  JSON.stringify(updateData);

            var sceneViewerUrl = window.location.href;
            sceneViewerUrl = sceneViewerUrl.match(/earth(\S*)/)[1];
            if(sceneViewerUrl != '/'){
                var regexp = new RegExp("/");
                var sceneViewerUrl = sceneViewerUrl.replace(regexp,"");
                $.ajax({
                        type: "PUT",
                        url: appsRoot + "/web/scenes/" + sceneViewerUrl + ".json",
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        data: updateData,
                        success : function (json) {
                            Util.showErrorMsg("场景更新成功！");
                        },
                        error: function(error)
                        {
                            Util.showErrorMsg("场景更新失败，先保存当前场景！");
                        },
                    })
                $.ajax({
                    type: "PUT",
                    url: appsRoot + "/web/scenes/" + sceneViewerUrl + "/thumbnail.json",
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    data: base64,
                    success : function (result) {
                        me.$el.hide();
                    }

                })
            }
        },

    });
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    }
    return savePortalForm;
});