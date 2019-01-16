define(function(){
    var ResourceCN = {
        longitude : '经度(度)',
        latitude : '纬度(度)',
        altitude : '高程(米)',
        login : '登陆',
        logout : '登出',
        account : '我的账户 :',
        save : '保存',
        exit : '退出',
        myMsg : '我的消息 :',
        uploadData : '上传数据',
        name : '名称',
        address : '地址',
        aqiTitle : 'PM2.5指数实时查询',
        stkTerrain : 'STK在线地形',
        title : '标题',
        confirm : '确定',
        cancel : '取消',
        objectEditor : '对象编辑',
        description : '描述',
        compass : '罗盘',
        s3mLayer : 'S3M图层',
        imageryLayer : '影像图层',
        terrainLayer : '地形图层',
        sctTerrainLayer : '地形图层',
        featureQuery : '属性查询',
        selDataSource : '请选择数据源',
        selDataSet : '请选择数据集',
        urlNotNullMsg : 'URL不能为空，请输入url!',
        layerNameNotNullMsg : '图层名称不能为空，请输入图层名称!',
        location : '定位',
        notSupportLocation : '您的浏览器不支持获取位置信息功能！',
        layerList : '图层列表',
        confirmDelLayer : '是否确定删除该图层？',
        kmlLayer : 'KML图层',
        markerLayer : 'MARKER图层',
        selLocalFile : '选择本地文件',
        measureArea : '测面',
        measureDis : '测距',
        measureHeight: '测高',
        pattern : '绘制模式：',
        spatialMeasuring : '空间量算',
        StickMeasurement : '贴地量算',
        heightInterval: '等高距(米)：',
        SingleContour : '单等高线',
        MoreContour : '多等高线',
        close : '关闭',
        measure : '量算',
        kmUnit : '千米',
        mUnit : '米',
        distance : '距离',
        sqkmUnit : '平方公里',
        sqmUnit : '平方米',
        area : '面积',
        smOnlineService : '公有数据服务',
        customService : '自定义服务',
        localKML : '本地数据',
        myScenes : '我的场景',
        skyAtmosphereEffect : '大气渲染',
        sunEffect : '光照渲染',
        fogEffect : '雾化效果',
        expand : '展开',
        addLayer : '添加图层',
        setBaseLayer : '底图设置',
        addMarker : '添加MARKER',
        setEffect : '渲染设置',
        fold : '收起',
        publicService : '公共服务',
        specialEffects: '特效',
        mycontent : '我的内容',
        imgServiceType : '图片(默认影像)',
        bingServiceType : 'BingMap全球影像服务',
        tdtServiceType : '天地图全球影像服务',
        osmServiceType : 'openstreetmap地图',
        tianditu : '天地图',
        layerExistMsg : '该图层已经存在，请勿重复加载!',
        imgUrlErrorMsg : '影像服务URL错误，影像加载失败！',
        scpUrlErrorMsg : 'SCP URL地址错误，S3M图层加载失败！',
        visualization:'可视化',
        splitSrc:'卷帘对比',
        animationLand:'陆地温度异常变化',
        workspaceSaveOK : '工作空间保存成功！',
        workspaceSaveFail : '工作空间保存失败',
        depthAgainst : '深度检测',
        analysis : '三维分析',
        viewShed : '可视域',
        skyline : '天际线分析',
        sightline : '通视',
        startingInformation : '起点信息',
        endInformation : '终点信息',
        projectImage : '视频投放',
        shadowAnalysis : '阴影',
        profile : '剖面',
        ObserverInformation : '观察者信息',
        sceneOptions : '场景属性',
        otherOptions : '其他属性',
        sceneColor : '场景颜色',
        flood : '泛光',
        camera : '相机',
        about : '关于',
        close : '关闭',
        basicOptions : '基本属性',
        styleSetting : '风格设置',
        sceneName : '场景名称',
        viewMode : '视图模式',
        multiViewport : '分屏显示',
        onePort : '不使用分屏',
        horizontalSnap : '水平分屏',
        verticalSnap : '垂直分屏',
        tripeSnap : '三视口',
        quadSnap : '四视口',
        split : '卷帘效果',
        splitNONE : '禁用卷帘',
        splitLEFT : '屏蔽卷帘左侧',
        splitRIGHT : '屏蔽卷帘右侧',
        splitTop : '屏蔽卷帘上侧',
        splitBOTTOM : '屏蔽卷帘下侧',
        coordinates : '查询坐标值',
        queryCoordinates: '坐标查询',
        underground : '地下',
        openUnderground: '开启地下',
        sceneFlood : '场景泛光',
        openSceneFlood: '开启泛光',
        threshold : '亮度阈值',
        bloomIntensity : '泛光强度',
        flyRoute : '飞行线路',
        startFly : '开始',
        pauseFly : '暂停',
        stopFly : '停止',
        observe : '观察',
        rotate : '旋转（度）',
        rotatePoint : '绕点旋转',
        rotateCirculation : '循环',
        interactive : '交互',
        enableWebcam : '启用摄像头',
        newContent : '更新内容',
        earth : '地球',
        shadowMap : '阴影',
        sun : '太阳',
        timeline : '时间轴',
        brightness : '亮度',
        contrast : '对比度',
        hue : '色调',
        saturation : '饱和度',
        gamma : '伽马',
        layerOptions : '图层属性',
        visibility : '可见性',
        layerName : '图层名称',
        shadow: '阴影',
        shadowMode : '阴影模式',
        noShadow : '无阴影',
        meter : '米',
        degree : '度',
        setSelectionShadow : '显示选中对象阴影',
        setShadow :'显示所有对象阴影',
        shadowDarkness : '阴影明暗度',
        display : '可显示',
        multiSelection : '多选择',
        cullEnabled : '双面渲染',
        bReleaseColor :'释放颜色内存',
        visibleDistanceMin : '最小可见高度（米）',
        visibleDistanceMax : '最大可见高度（米）',
        selectEffect: '选中效果',
        selectColorType : '选中颜色模式',
        mix : '混合',
        replace : '替换',
        selectColor : '选中颜色',
        onlyShowSlection : '仅选中对象可见',
        onlyHideSlection : '仅选中对象隐藏',
        showAll : '显示全部',
        bottomAltitude : '底部高程(米)',
        fillStyle : '填充风格',
        fillMode : '填充模式',
        lineMode : '线框模式',
        fillAndLine : '填充和线框模式',
        foreColor : '前景色',
        lineColor : '线颜色',
        direction : '方向',
        roll : '翻转',
        distance : '距离',
        horizontalFov : '水平视角(度)',
        verticalFov : '垂直视角(度)',
        visibleColor : '可见区域颜色',
        invisibleColor : '不可见区域颜色',
        addViewshed : '添加可视域',
        clear : '清除',
        date : '日期选择',
        time : '时间',
        length :'长度（米）',
        width : '宽度（米）',
        height : '高度（米）',
        firstPoint : '第一点',
        secondPoint : '第二点',
        thirdPoint : '第三点',
        startTime : '开始时间',
        endTime : '结束时间',
        extrude: '拉伸（米）',
        extrudeHeight : '拉伸高度(米)',
        sunlight : '日照效果',
        viewPosition : '观察点位置',
        additionalHeight : '附加高度(米)',
        visualRange : '可视距离（米）',
        directionAngle : '方向角(度)',
        ElevationAngle : '俯仰角(度)',
        hideenColor : '不可视颜色',
        addViewPoint : '添加观察点',
        addTarget : '添加目标点',
        displayMode : '显示模式',
        polyline : '线显示',
        polygon : '面显示',
        skylinesectorbody : '闭合体',
        noOcclusor : '无闭合体',
        visibleVolume : '可视体',
        novisibleVolume: '不可视体',
        skylineColor : '天际线颜色',
        skylineRadius: '分析半径（米）',
        skyline : '天际线',
        graphDisplay : '二维显示',
        BoxClip : 'Box裁剪',
        PlaneClip : '平面裁剪',
        CrossClip : 'Cross裁剪',
        ClipModel : '裁剪模式',
        CutInsideBoxFrame : '带线框盒内裁剪',
        CutOutBoxFrame : '带线框盒外裁剪',
        CutInsideBoxNOFrame : '不带线框盒内裁剪',
        CutOutBoxNOFrame : '不带线框盒外裁剪',
        terrainSlope : '坡度坡向',
        isoline : '等值线',
        submergeAnalyze : '淹没分析',
        TerrainOperation : '地形操作',
        TilesetEditor : '地形修改',
        analyze : '分析',
        eliminate : '清除',
        TerrainMining : '地形开挖',
        TerrainMiningDepth : '开挖深度(米)',
        analysisArea : '分析区域',
        SpecifyPolygon : '指定多边形区域',
        AllRegionsAnalysis : '全部区域参与分析',
        AllRegionsNOAnalysis : '全部区域不参与分析',
        SlopeRange : '坡度区间',
        minimumGrade : '最小坡度(度)',
        maximumGrade : '最大坡度(度)',
        displayStyle : '显示样式',
        fill : '填充',
        ShowFillColor : '显示填充颜色',
        ShowSlopeArrow : '显示坡向箭头',
        ShowColorArrow : '显示颜色和坡向箭头',
        transparency : '透明度',
        modelTransparency: '模型透明度',
        SlopeExplain : '(坡度坡向分析需要带法线地形)',
        parameterSetting : '参数设置',
        MaximumVisibleElevation : '最大可见高程(米)',
        MinimumVisibleElevation : '最小可见高程(米)',
        PlayerSettings : '播放设置',
        TheCurrentLevel : '当前高程(米)',
        speed : '速度(m/s):',
        isolineInterval : '等值距(米)',
        ContourFilling : '等高线填充',
        panelFilling : '等高面填充',
        ContourPanelFilling : '等高线面填充',
        noColorTable : '无颜色表',
        Add : '添加',
        AddPoint : '添加点',
        AddLine : '添加线',
        AddFaces : '添加面',
        symbolicLibrary : '符号库',
        conversion : '变换',
        Xrotation : '绕X轴旋转（度）',
        Yrotation : '绕Y轴旋转（度）',
        Zrotation : '绕Z轴旋转（度）',
        zoom : '缩放',
        delete : '删除',
        polylineSymbolLineColor : '线条颜色',
        fulline : '实线',
        Virtuallinear : '虚线型',
        contourline : '轮廓线',
        arrowline : '箭头线',
        Haloline : '光晕线',
        Wakeline : '尾迹线',
        pureColor : '纯色',
        gridding : '网格',
        stripe : '条纹',
        serverURl : '数据服务URL',
        serverExplain : '(与模型同步发布的iserver REST-数据服务地址)',
        dataset : '数据源数据集',
        DataSourceName : '-----选择数据源名称------',
        DataSetName : '-----选择数据集名称------',
        TheSpaceField : '空间字段',
        Spacelongitude : '经度（度）',
        Spacelatitude : '纬度（度）',
        Spacealtitude : '高程（米）',
        StartQuery : '启动查询',
        CleanCharts : '清理图表',
        home : '重置',
        storage : '存储',
        share : '分享',
        sceneSave : '场景保存',
        storeDate : '存储日期：',
        scenetag : '场景标签',
        author : '作者',
        KMLData : '本地KML数据',
        OpenLayer : '打开图层',
        OpenScene : '打开场景',
        scene : '场景',
        clip : '裁剪',
        terrain : '地形',
        onlineEditing : '在线编辑',
        interspaceQuery: '空间查询',
        cameraMinimumZoomDistance: '最小缩放距离(米)',
        highlightBarrier: '高亮障碍物',
        supermapLogo: '超图标识',
        removeInvalidTerrainRegion: '剔除无效地形',
        polygonSymbolColor: '面颜色',
        polylineDashSectionLength: '虚线分量长度（像素）',
        polylineTrailPeriod: '尾迹线周期（秒）',
        polylineTrailPercent: '尾迹线占比',
        polylineSymbolOutlineWdith: '轮廓宽度（像素）',
        pixel: '像素',
        second: '秒',
        PolygonClip: '多边形裁剪',
        PolygonClipOutside: '裁剪外部',
        PolygonClipInside: '裁剪内部',
        ClipWidth: '裁剪宽度（米）',
        ClipHeight: '裁剪高度（米）',
        LayerOperation: '图层操作',
        ObliquePhotographyExcavation: '倾斜摄影开挖',
        ExecuteExcavation: '执行开挖',
        ClearExcavation: '清除开挖',
        ObliquePhotographyFlatten: '倾斜摄影压平',
        ModelFlatten: '模型压平',
        ClearFlatten: '清除压平',
        FloodAnalysis: '淹没分析',
        MaxHeight: '最大高度（米）',
        MinHeight: '最小高度（米）',
        FloodSpeed: '淹没速度(米/秒)',
        ExecuteFlood: '执行淹没',
        ClearFlood: '清除淹没',
        SelectOffset: '选中偏移',
        OpenSelectOffset: '开启选中偏移',
        OffsetX: '沿X轴偏移',
        OffsetY: '沿Y轴偏移',
        offsetZ: '沿Z轴偏移',
        LayerColor: '图层颜色',
        FillStyleAndWireFrameMode: '填充风格和线框模式',
        FillStyle: '填充风格',
        WireFrameMode: '线框模式',
        LayerFillMode: '填充模式',
        LayerWireframeMode: '线框模式',
        LayerFillAndWireframeMode: '填充和线框模式',
        TriangleWireframeMode: '三角面线框',
        QuadWireframeMode: '四边形线框',
        SketchWireframeMode: '草图模式',
        PolygonOffset: '多边形偏移',
        PolygonOffsetFactor: '偏移因子',
        PolygonOffsetUnit: '偏移单位',
        SceneSave: '场景保存',
        SaveDate: '存储日期',
        SceneName: '场景名称',
        SceneLabel: '场景标签',
        UpdateCurrentScene: '更新当前场景',
        iEarthScene: 'iEarth场景',
        ShareErrorMsg: '场景信息获取失败！请先登陆iPortal或Online账户......',
        ClickToSearchAltitude: '点击查询高程',
        UnNamed: '未命名',
        SurfaceTransparency: '地表透明度',
        Version: '版本',
        WhatsNew: "1、增加多边形裁剪功能模块\n"+
        "2、增加Cross裁剪功能模块\n"+
        "3、S3M图层支持填充风格和线框模式选择\n"+
        "4、S3M图层支持选中偏移功能\n"+
        "5、S3M图层支持模型颜色控制\n"+
        "6、S3M图层支持模型上的淹没分析\n"+
        "7、S3M图层支持多边形偏移功能\n"+
        "8、增加线形符号轮廓宽度、虚线分量长度、尾迹线周期、尾迹线占比参数设置\n"+
        "9、支持面符号设置颜色\n",
        baseLayerSource: '底图来源',
        localImage: '本地图片',
        bingMaps: '必应底图',
        tianditu: '天地图',
        OpenStreetMap: 'Open Street Map',
        SuperMapChinaDark: 'SuperMap China Dark',
        gridImagery: '网格影像',
        superMapChinaLight: 'SuperMap China Light',
        useRoller: '使用卷帘',
        lrRoller: '左右卷帘',
        leftRoller: '屏蔽左侧',
        rightRoller: '屏蔽右侧',
        tbRoller: '上下卷帘',
        topRoller: '屏蔽上侧',
        bottomRoller: '屏蔽下侧',
        imageryRoller: '影像卷帘',
        windParticle: '风场',
        trailLines: '尾迹线',
        scanLine: '扫描线',
        saveAs: '另存为',
        saveErrorWhileSceneEmpty: '保存场景名称不能为空！',
        saveSceneSuccess: '场景保存成功！',
        saveSceneFailed: '存储失败！请先登陆iPortal或Online账户......',
        updateSceneSuccess: '场景更新成功！',
        updateSceneFailed: '场景更新失败，先保存当前场景！',
        layerUrl: '图层URL',
        layerName: '图层名称',
        sceneUrl: '场景URL',
        fullScreen: '全屏',
        polygonClipMode: '裁剪模式',
        clickToSearchCoordination: '点击查询坐标值',
        stopChoose: '站点选择',
        searchPlaceHolder: '输入地址或地标...',
        urlMismatchingPattern: '请输入正确的URL格式',
        polygonSymbolGridCellAlpha: '单元透明度',
        polygonSymbolGridLineCount: '网格线数',
        polygonSymbolGridLineThickness: '网格线宽度',
        polygonSymbolGridLineOffset: '网格线偏移',
        polygonSymbolStripeEvenColor: '偶数条带颜色',
        polygonSymbolStripeOddColor: '奇数条带颜色',
        polygonSymbolStripeOffset: '条带偏移量',
        polygonSymbolStripeOrientation: '条带方向',
        polygonSymbolStripeRepeat: '条带重复数',
        horizontal: '水平方向',
        vertical: '垂直方向',
        draw: '绘制',
        polylineSymbolGapColor: '间隔颜色',
        polylineSymbolOutlineColor: '轮廓颜色',
        polylineSymbolGlowPower: '光晕强度',
        polylineSymbolLineWidth: '线宽（像素）',
        pointSymbolColor: '点符号颜色',
        highlightBarrierColor: '障碍物高亮颜色'
    };
    return ResourceCN;
});