
(function(){
	var ApiDoc = [
 		'核心对象', 
		{
			name:'jTopo.Stage', 
			text:'一个抽象的舞台对象,对应一个Canvas和多个场景对象(Scene)',
			functions:[
				{
					name: 'frames [<i>属性</i>]',
					text: '设置当前舞台播放的帧数/秒' +
					'<p>默认为:24</p>' +
					'<p>frames可以为0，表示：不自动绘制，由用户手工调用Stage对象的paint()方法来触发。</p>' +
					'<p> 如果小于0意味着：只有键盘、鼠标有动作时才会重绘，例如：stage.frames = -24。</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},			
				{
					name: 'canvas [<i>属性</i>]',
					text: '对应的Canvas对象',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'width [<i>属性</i>]',
					text: '舞台宽度(Canvas的宽度）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'height [<i>属性</i>]',
					text: '舞台高度(Canvas的高度）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mode [<i>属性</i>]',
					text: '舞台模式，不同模式下有不同的表现:' + 
					'<p>设置舞台模式，例如：stage.mode = "drag";</p>' + 
					'<p>normal[默认]：可以点击选中单个节点（按住Ctrl可以选中多个），点中空白处可以拖拽整个画面</p>' +
					'<p>drag: 该模式下不可以选择节点，只能拖拽整个画面</p>' +
					'<p>select: 可以框选多个节点、可以点击单个节点</p>' +
					'<p>edit: 在默认基础上增加了：选中节点时可以通过6个控制点来调整节点的宽、高</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'childs [<i>属性</i>]',
					text: '场景对象列表',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'eagleEye [<i>属性</i>]',
					text: '鹰眼对象' +
					'<p> 显示鹰眼：stage.eagleEye.visible = true</p>' +
					'<p> 隐藏鹰眼：stage.eagleEye.visible = false</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'wheelZoom [<i>属性</i>]',
					text: '鼠标滚轮缩放操作比例，默认为null，不显示鹰眼' +
					'<p> 启用鼠标滚轮缩放：stage.wheelZoom = 0.85;  //缩放比例为0.85</p>' +
					'<p> 禁用用鼠标滚轮缩放: stage.wheelZoom = null; </p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'add(Scene) [<i>函数</i>]',
					text: '将一个Scene场景加入到舞台中（只有加入舞台才可以显示出现）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'remove(Scene) [<i>函数</i>]',
					text: '将一个Scene场景从舞台中移除（不再显示）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'clear() [<i>函数</i>]',
					text: '将所有Scene场景从舞台中移除',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'paint() [<i>函数</i>]',
					text: '执行一次绘制, 如果frames设置为0，可以手工调用此方法来通知jtopo进行一次重绘。',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'zoom(scale) [<i>函数</i>]',
					text: '缩放，scale取值范围[0-1]，实际上本操作是调用了舞台中所有Scene对象的zoom函数。',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},	
				{
					name: 'zoomOut(scale) [<i>函数</i>]',
					text: '放大，scale取值范围[0-1], 调用zoom实现。',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},	
				{
					name: 'zoomIn(scale) [<i>函数</i>]',
					text: '缩小，scale取值范围[0-1], 调用zoom实现。',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'centerAndZoom(scale) [<i>函数</i>]',
					text: '缩放并居中显示所有元素 ',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'setCenter(x, y) [<i>函数</i>]',
					text: '设置当前舞台的中心坐标（舞台平移）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},	
				{
					name: 'getBound() [<i>函数</i>]',
					text: '得到舞台中所有元素位置确定的边界大小（left、top、right、bottom）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},					
				{
					name: 'saveImageInfo() [<i>函数</i>]',
					text: '导出成PNG图片（在新打开的浏览器Tab页中）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'saveAsLocalImage() [<i>函数</i>]',
					text: '导出成PNG图片（直接弹出另存为对话框或者用下载软件下载）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'toJson() [<i>函数</i>]',
					text: '把当前对象的属性序列化成json数据',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},				
				{
					name: 'addEventListener(eventName, eventHandler) [<i>函数</i>]',
					text: '监听事件' +
					'<p>例如：stage.addEventListener("mousedown", function(event){});</p>' +
					'<p>可以监听的事件有：click,dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,mousedrag,mousewheel</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'removeEventListener(eventName) [<i>函数</i>]',
					text: '移除监听事件和addEventListener相对应',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'removeAllEventListener() [<i>函数</i>]',
					text: '移除所有监听事件',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'click(eventHandler) [<i>函数</i>]',
					text: '监听鼠标单击事件（鼠标按下并松开），等价于：stage.addEventListener("click", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'dbclick(eventHandler) [<i>函数</i>]',
					text: '监听鼠标双击事件（鼠标按下并松开），等价于：stage.addEventListener("dbclick", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousedown(eventHandler) [<i>函数</i>]',
					text: '监听鼠标按下事件，等价于：stage.addEventListener("mousedown", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseup(eventHandler) [<i>函数</i>]',
					text: '监听鼠标松开事件，等价于：stage.addEventListener("mouseup", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseover(eventHandler) [<i>函数</i>]',
					text: '监听鼠标进入Canvas事件，等价于：stage.addEventListener("mouseover", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseout(eventHandler) [<i>函数</i>]',
					text: '监听鼠标离开Canvas事件，等价于：stage.addEventListener("mouseup", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousemove(eventHandler) [<i>函数</i>]',
					text: '监听鼠标移动事件，等价于：stage.addEventListener("mousemove", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousedrag(eventHandler) [<i>函数</i>]',
					text: '监听鼠标拖拽事件，等价于：stage.addEventListener("mousedrag", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousewheel(eventHandler) [<i>函数</i>]',
					text: '监听鼠标滚轮事件，等价于：stage.addEventListener("mousewheel", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				}
			]
		},
		{
			name:'jTopo.Scene', 
			text:'场景对象，概念上同很多图形系统中的Layer。',
			functions:[
				{
					name: 'alpha [<i>属性</i>]',
					text: '场景的透明度，默认为0，即：完全透明。所以有时候即使设置了背景颜色却不起作用）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'backgroundColor [<i>属性</i>]',
					text: '背景颜色，设置的时候请注意alpha属性。',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'background [<i>属性</i>]',
					text: '设置场景的背景图片, 与backgroundColor冲突，一旦设置了该属性，backgroundColor属性将失效' + 
					'<p>例如：scene.background = "./img/bg.png";</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},			
				{
					name: 'visible [<i>属性</i>]',
					text:'得到、设置场景是否可见，默认为：true',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'areaSelect [<i>属性</i>]',
					text:'在select模式中，是否显示选择矩形框',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mode [<i>属性</i>]',
					text: '舞台模式，不同模式下有不同的表现:' + 
					'<p>设置舞台模式，例如：stage.mode = "drag";</p>' + 
					'<p>normal[默认]：可以点击选中单个节点（按住Ctrl可以选中多个），点中空白处可以拖拽整个画面</p>' +
					'<p>drag: 该模式下不可以选择节点，只能拖拽整个画面</p>' +
					'<p>select: 可以框选多个节点、可以点击单个节点</p>' +
					'<p>edit: 在默认基础上增加了：选中节点时可以通过6个控制点来调整节点的宽、高</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'selectedElements [<i>属性</i>]',
					text: '当前场景中被选中的元素对象',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},	
				{
					name: 'translateX [<i>属性</i>]',
					text: '场景偏移量（水平方向），随鼠标拖拽变化',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'translateY [<i>属性</i>]',
					text: '场景偏移量（垂直方向），随鼠标拖拽变化	',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},	
				{
					name: 'show() [<i>函数</i>]',
					text: '显示',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'hide() [<i>函数</i>]',
					text: '隐藏',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},			
				{
					name: 'add(element) [<i>函数</i>]',
					text: '添加对象到当前场景中来, 例如：scene.add(new JTopo.Node()); scene.add(new JTopo.Link(nodeA, nodeZ))',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'remove(element) [<i>函数</i>]',
					text: '移除场景中的某个元素, 例如：scene.remove(myNode);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'clear() [<i>函数</i>]',
					text: '移除场景中的所有元素',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},				
				{
					name: 'getDisplayedElements() [<i>函数</i>]',
					text: '获取场景中可见并绘制出来的元素（超过Canvas边界）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},	
				{
					name: 'getDisplayedNodes() [<i>函数</i>]',
					text: '获取场景中可见并绘制出来的Node对象（超过Canvas边界）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'findElements(cond) [<i>函数</i>]',
					text: '查找场景中的对象，例如:  findElements(function(e){ return e.x > 100; });',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'addEventListener(eventName, eventHandler) [<i>函数</i>]',
					text: '监听事件' +
					'<p>例如：stage.addEventListener("mousedown", function(event){});</p>' +
					'<p>可以监听的事件有：click,dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,mousedrag,mousewheel</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'removeEventListener(eventName) [<i>函数</i>]',
					text: '移除监听事件和addEventListener相对应',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'removeAllEventListener() [<i>函数</i>]',
					text: '移除所有监听事件',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'click(eventHandler) [<i>函数</i>]',
					text: '监听鼠标单击事件（鼠标按下并松开），等价于：stage.addEventListener("click", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'dbclick(eventHandler) [<i>函数</i>]',
					text: '监听鼠标双击事件（鼠标按下并松开），等价于：stage.addEventListener("dbclick", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousedown(eventHandler) [<i>函数</i>]',
					text: '监听鼠标按下事件，等价于：stage.addEventListener("mousedown", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseup(eventHandler) [<i>函数</i>]',
					text: '监听鼠标松开事件，等价于：stage.addEventListener("mouseup", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseover(eventHandler) [<i>函数</i>]',
					text: '监听鼠标进入Canvas事件，等价于：stage.addEventListener("mouseover", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseout(eventHandler) [<i>函数</i>]',
					text: '监听鼠标离开Canvas事件，等价于：stage.addEventListener("mouseup", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousemove(eventHandler) [<i>函数</i>]',
					text: '监听鼠标移动事件，等价于：stage.addEventListener("mousemove", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousedrag(eventHandler) [<i>函数</i>]',
					text: '监听鼠标拖拽事件，等价于：stage.addEventListener("mousedrag", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousewheel(eventHandler) [<i>函数</i>]',
					text: '监听鼠标滚轮事件，等价于：stage.addEventListener("mousewheel", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				}
			]
		},
		{
			name:'jTopo.Node', 
			text:'节点对象',
			functions:[				
				{
					name: 'text [<i>属性</i>]',
					text: '设置节点的名字（显示文本）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'x [<i>属性</i>]',
					text: 'x坐标值',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'y [<i>属性</i>]',
					text: 'y坐标值',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'visible [<i>属性</i>]',
					text:'设置节点是否可见',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'shadow [<i>属性</i>]',
					text:'是否显示阴影, 例如:node.shadow = "true"',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'zIndex [<i>属性</i>]',
					text:'zIndex，大的覆盖小的,范围 [10-999]，10以下保留占用。',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},				
				{
					name: 'dragable [<i>属性</i>]',
					text:'设置节点是否可以拖动',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'selected [<i>属性</i>]',
					text: '是否被选中',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'editAble [<i>属性</i>]',
					text: '是否可被编辑',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'font [<i>属性</i>]',
					text: '节点字体，例如：node.font = "12px Consolas"',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'fontColor [<i>属性</i>]',
					text: '字体颜色，例如：node.fontColor = "255,255,0"',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'textPosition [<i>属性</i>]',
					text: '节点文本位置，例如：node.textPosition = "Bottom_Center"',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'showSelected [<i>属性</i>]',
					text:'选中时，是否显示表示选中状态的矩形，默认为：true，显示',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'rotate [<i>属性</i>]',
					text:'设置节点旋转的角度（弧度）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'alpha [<i>属性</i>]',
					text:'透明度, 取值范围[0-1]',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'scaleX [<i>属性</i>]',
					text:'水平缩放',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'scaleY [<i>属性</i>]',
					text:'垂直缩放',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'fillColor [<i>属性</i>]',
					text:'设置节点的填充颜色',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},				
				{
					name: 'setImage(url) [<i>函数</i>]',
					text: '设置节点图片',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'setSize(width, height) [<i>函数</i>]',
					text:'设置节点的宽和高',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'getSize() [<i>函数</i>]',
					text:'获取节点的宽和高',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'setBound(x, y, width, height) [<i>函数</i>]',
					text:'设置节点的坐标、宽、高',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'getBound() [<i>函数</i>]',
					text:'获取节点的坐标、宽、高',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'setLocation(x, y) [<i>函数</i>]',
					text:'设置节点在场景中的位置坐标(左上角）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},				
				{
					name: 'setCenterLocation() [<i>函数</i>]',
					text:'设置节点在场景中的位置坐标(中心位置)',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'addEventListener(eventName, eventHandler) [<i>函数</i>]',
					text: '监听事件' +
					'<p>例如：stage.addEventListener("mousedown", function(event){});</p>' +
					'<p>可以监听的事件有：click,dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,mousedrag</p>',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'removeEventListener(eventName) [<i>函数</i>]',
					text: '移除监听事件和addEventListener相对应',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'removeAllEventListener() [<i>函数</i>]',
					text: '移除所有监听事件',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'click(eventHandler) [<i>函数</i>]',
					text: '监听鼠标单击事件（鼠标按下并松开），等价于：stage.addEventListener("click", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'dbclick(eventHandler) [<i>函数</i>]',
					text: '监听鼠标双击事件（鼠标按下并松开），等价于：stage.addEventListener("dbclick", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousedown(eventHandler) [<i>函数</i>]',
					text: '监听鼠标按下事件，等价于：stage.addEventListener("mousedown", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseup(eventHandler) [<i>函数</i>]',
					text: '监听鼠标松开事件，等价于：stage.addEventListener("mouseup", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseover(eventHandler) [<i>函数</i>]',
					text: '监听鼠标进入Canvas事件，等价于：stage.addEventListener("mouseover", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mouseout(eventHandler) [<i>函数</i>]',
					text: '监听鼠标离开Canvas事件，等价于：stage.addEventListener("mouseup", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousemove(eventHandler) [<i>函数</i>]',
					text: '监听鼠标移动事件，等价于：stage.addEventListener("mousemove", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'mousedrag(eventHandler) [<i>函数</i>]',
					text: '监听鼠标拖拽事件，等价于：stage.addEventListener("mousedrag", eventHandler);',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				}				
			]
		},		
		{
			name:'jTopo.Link', 
			text:'连线对象',
			functions:[				
				{
					name: 'text',
					text: '连线的名字（文本）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'nodeA',
					text: '起始节点对象',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'nodeZ',
					text: '终止节点对象',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'alpha',
					text: '透明度',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'style.strokeColor',
					text: '连线的颜色',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'style.lineWidth',
					text: '线条的宽度（像素）',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				}
			]
		},// end jTopo.Link
		{
			name:'jTopo.Container', 
			text:'容器对象',
			functions:[				
				{
					name: 'text',
					text: '名称（文本）, 不会显示',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'x',
					text: 'x坐标值',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'y',
					text: 'y坐标值',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'width',
					text: '容器宽度',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'height',
					text: '容器高度',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'alpha',
					text: '透明度',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'dragble',
					text:'是否可以拖动',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				}
			]
		}, // end jTopo.Container
		{
			name:'jTopo.Effect.Animate', 
			text:'动画效果',
			functions:[				
				{
					name: 'gravity()',
					text: '给指定元素增加重力效果',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				},
				{
					name: 'stepByStep()',
					text: '通用动画效果功能，可以把一个元素对象的某些属性在指定的时间内变化到指定值',
					support: 'IE, Firefox, Safari, Opera, Chrome'
				}
			]
		}
	];

	
	
	function drawMenus(menus){
		var ul = $('#menu').empty();
		var li = null;
		var children = null;
		$.each(ApiDoc, function(i, e){
			if(typeof e == 'string'){
				li = $('<li>').appendTo(ul).addClass('cat-item cat-item-1').appendTo(ul);
				$('<a>').html(e).appendTo(li);
				children = $('<ul>').addClass('children').appendTo(li);
			}else{
				var cli = $('<li>').addClass('cat-item cat-item-5').appendTo(children);
				$('<a>').attr('href', '#').html(e.name).appendTo(cli).click(function(){
					showFunctions(e);
				});
			}
		});
	}

	function showFunctions(obj){
		var div = $('#content').empty();
		$('<h1>').addClass('page-title').html('API: ' + obj.name).appendTo(div);
		$('<hr>').appendTo(div);
		$('<span>').html(obj.text).appendTo(div);
		
		for(var i=0; i<obj.functions.length; i++){
			var fn = obj.functions[i];
			createArtical(fn).appendTo(div);
		}
	}

	function createArtical(f){
		var article = $('<article>').addClass('hentry');
		var header = $('<header>').addClass('entry-header').appendTo(article);
		var div = $('<div>').addClass('entry-meta').appendTo(header);
		var span = $('<span>').addClass('category').appendTo(div);
		$('<a>').attr('href', '#').html('浏览器 &gt;').appendTo(span);
		$('<a>').attr('href', '#').html(f.support).appendTo(span);

		var h1 = $('<h1>').addClass('entry-title').appendTo(header);
		$('<a>').attr('href', '#').html(f.name).appendTo(h1);
		
		$('<div>').addClass('entry-summary').append($('<p>').html(f.text)).appendTo(article);
		return article;
	}

	$(document).ready(function(){
		drawMenus(ApiDoc);
		$('#menu a:nth(1)').click();
	});

})($ || jQuery);
