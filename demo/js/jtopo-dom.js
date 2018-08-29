	
		$(document).ready(function(){
			var code = genCode();
			console.log(code);
			eval(code);
		});
		
		function genNodeCode(dom, sceneVar){
			var code = '';
			
			// define
			var nodeVar = dom.attr('id');
			var nodeName = dom.attr('name');					
			code += ' var ' + nodeVar + ' = new JTopo.Node("'+nodeName+'");\n';
			
			// attributies
			var x = dom.attr('x');
			var y = dom.attr('y');
			code += nodeVar + '.setLocation(' + x + ',' + y + ');\n';			
			var backgroundImage = dom.css('background-image');					
			if(backgroundImage != null && backgroundImage != 'none'){
				code += nodeVar + '.setImage("' + (backgroundImage.substring(4).replace(')', '')) + '");\n'; 
			}
			
			var width = dom.attr('width') || (dom.css('width') != '0px' ? dom.css('width').replace('px', ''):null); 
			var height = dom.attr('height') || (dom.css('height') != '0px' ? dom.css('height').replace('px', ''):null); 
			if(width){
				code += nodeVar + '.width = ' + width + ';\n';
			}
			if(height){
				code += nodeVar + '.height = ' + height+ ';\n';
			}
			
			var alpha = dom.css('opacity');
			if(alpha){
				code += nodeVar + '.alpha = ' + alpha + ';\n';
			}
			
			var layout = dom.attr('layout');
			if(layout){
				code += nodeVar + '.layout = {type: "'+layout+'",width:90, height:100, auto:true};\n';
				code += 'setTimeout(function(){' + sceneVar + '.layoutNode('+nodeVar+');}, 1000);\n' + '\n';
			}
			
			var transform = dom[0].style.webkitTransform;
			if(transform){
				if(transform.indexOf('scale') != -1){
					var scalaX = transform.match(/scale\((\d+), (\d+)/)[1];
					var scalaY = transform.match(/scale\((\d+), (\d+)/)[2];
					code += nodeVar + '.scalaX = ' + scalaX + ';\n';
					code += nodeVar + '.scalaY = ' + scalaY + ';\n';
				}else if(transform.indexOf('rotate') != -1){
					var rotate = transform.match(/rotate\((\d+)/)[1];
					rotate = parseFloat(rotate)/180*Math.PI;
					code += nodeVar + '.rotate = ' + rotate + ';\n';
				}
			}			
			
			var backgroundColor = dom.css('background-color');
			if(backgroundColor && 'rgba(0, 0, 0, 0)' != backgroundColor){
				if(backgroundColor.indexOf('rgba') != -1){
					backgroundColor = backgroundColor.replace('rgba(', '');
					backgroundColor = backgroundColor.replace(', 0)', '');
				}else{
					backgroundColor = backgroundColor.replace('rgb(', '');
					backgroundColor = backgroundColor.replace(')', '');
				}
				code += nodeVar + '.style.fillStyle = "' + backgroundColor + '";\n';				
			}			
			
			// event handle
			var onclick = dom.attr('onclick');
			if(onclick){
				onclick = onclick.replace('this', nodeVar);
				code += nodeVar + '.addEventListener("click", function(){'+ onclick +';});\n';
			}
			var ondbclick = dom.attr('ondbclick');
			if(ondbclick){
				ondbclick = ondbclick.replace('this', nodeVar);
				code += nodeVar + '.addEventListener("dbclick", function(){'+ ondbclick +';});\n';
			}
			
			//animate
			var animate = dom.attr('animate');
			if(animate){				
				code += 'JTopo.Animate.stepByStep('+nodeVar+', {'+animate+'}, 5000, true).start();\n';
			}
			
			
			// add to scene
			code += sceneVar + '.add(' + nodeVar + ');\n';   
			
			return code;
		}
		
		function getAttr(dom, attrName){
			if(dom.attr(attrName) != null){
				return dom.attr(attrName);
			}
			return dom.css(attrName);			
		}
		
		function genLinkCode(dom, sceneVar){
			var code = '';
			
			// define
			var from = dom.attr('from');
			var to = dom.attr('to');
			var linkVar = from +'_' + to ;
			code += 'var ' + linkVar + ' = new JTopo.Link(' + from + ',' + to + ');\n';
			
			// event handle
			var onmouseover = dom.attr('onmouseover');
			if(onmouseover){
				onmouseover = onmouseover.replace('this', linkVar);
				code += linkVar + '.addEventListener("mouseover", function(){'+ onmouseover +';});\n';
			}
			var onmouseout = dom.attr('onmouseout');
			if(onmouseout){
				onmouseout = onmouseout.replace('this', linkVar);
				code += from+'_' + to  + '.addEventListener("mouseout", function(){'+ onmouseout +';});\n';
			}

			// add to scene
			code += sceneVar + '.add(' + linkVar + ');\n';
			  
			return code;
		}
		
		function genSceneCode(dom, stageVar){
			var code = '';
			
			// define
			var sceneVar = dom.attr('id');
			code += 'var ' + sceneVar + '= new JTopo.Scene(stage);\n'
			
			// attributies
			var backgroundImage = dom.css('background-image');
			if(backgroundImage){
				code += sceneVar + '.setBackground("' + (backgroundImage.substring(4).replace(')', '')) + '");\n'; 
			}
			
			// childrens
			var nodes = dom.children('node');
			for(var j=0; j<nodes.length; j++){
				var nodeDom = $(nodes[j]);
				code += genNodeCode(nodeDom, sceneVar);		        			       
			}			
			var links = dom.children('line');
			for(var j=0; j<links.length; j++){
				var linkDom = $(links[j]);
				code += genLinkCode(linkDom, sceneVar);
			}
			
			/*
			// event
			var ondbclick = dom.attr('ondbclick');
			if(ondbclick){
				ondbclick = ondbclick.replace('this', sceneVar);				
				code += sceneVar + '.addEventListener("dbclick", function(){'+ ondbclick +';});\n';
			}*/
				
			return code + '\n';
		}
		
		function genStageCode(dom){
			var code = '';					
			
			// define
			var stageVar = dom.attr('id');
			code += 'var ' + stageVar + '= null;\n';
			code += 'if(canvas.stage){ '+ stageVar +' = canvas.stage; canvas.stage.clear();}';
			code += 'else{ ' + stageVar + '= new JTopo.Stage(canvas); canvas.stage = '+stageVar+';};\n'
			
			// childrens
			var scenes = dom.children('scene');			
			for(var i=0; i<scenes.length; i++){
			    var sceneDom = $(scenes[i]);
			    code += genSceneCode(sceneDom, stageVar);
			}
			
			var currentSceneId = $(scenes[0]).attr('id');
			code += 'stage.play(' + currentSceneId + ');\n';
				
			return code + '\n';
		}
		
		function genCode(){
			var canvas = $('.jtopo');

			var code = '(function(JTopo, $){\n';
			code += 'var canvas = $(".jtopo")[0];\n';			
			var stageDom = $(canvas.children('stage')[0]);
			code += genStageCode(stageDom);
			code += '})(JTopo, $)';
			
			return code;						
		}



function attrStyle(elem,attr){ 
	if(elem.attr){ 
		//若样式存在于html中,优先获取 
		return elem.style[attr]; 
	}else if(elem.currentStyle){ 
		//IE下获取CSS属性最终样式(同于CSS优先级) 
		return elem.currentStyle[attr]; 
	}else if(document.defaultView && document.defaultView.getComputedStyle){ 
		//W3C标准方法获取CSS属性最终样式(同于CSS优先级) 
		//注意,此法属性原格式(text-align)获取的,故要转换一下 
		//attr=attr.replace(/([A-Z])/g,'-$1').toLowerCase(); 
		//获取样式对象并获取属性值 
		return document.defaultView.getComputedStyle(elem,null).getPropertyValue(attr); 
	}else{ 
		return null; 
	} 
} 		
	