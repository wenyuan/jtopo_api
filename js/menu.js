var menus = [
	{text:'Welcome', href:'index.html'},
	'Basic', 
	{text:'Hello Word', href:'helloworld.html'},
	{text:'Gif-simulator.html', href:'animate_gif.html'},
	{text:'save-as-png', href:'save-as-png.html'},
	{text:'animate_sprite', href:'animate_sprite.html'},
	{text:'animate_sprite2', href:'animate_sprite2.html'},
	{text:'circle_sprite', href:'circle_sprite.html'},
	{text:'scence_change', href:'scence_change.html'},
	{text:'scence_event', href:'scence_event.html'},
	{text:'edit', href:'topo-edit.html'},
	'Animate',
	{text:'gravity', href:'animate_grivty.html'},	
	'Topo',
	{text:'topo', href:'topo.html'},
	{text:'Node', href:'topo-node.html'},
	{text:'Link', href:'topo-link.html'},
	{text:'Layout', href:'topo-layout.html'},
	{text:'Container', href:'topo-container.html'},	
	{text:'UML-Node', href:'topo-uml.html'},
	{text:'grivty', href:'topo-grivty.html'},

	'Chart',
	{text:'PieChart-Node', href:'topo-pieChart.html'},
	'Twaver',
	{text:'statictis', href:'twaver-statictis.html'},
	{text:'PSTN', href:'twaver-pstn.html'},
	{text:'Matrix', href:'twaver-matrix.html'},	
	'Win7',
	{text:'Desktop', href:'topo-desktop.html'}	
];

function drawMenus(menus){
	var ul = $('#Menu_ul');
	$.each(menus, function(i, e){
		var li = $('<li>').appendTo(ul);
		if(typeof e == 'string'){
			li.addClass('nav-header').html(e);
		}else{
			var a = $('<a>').attr('href', e.href).html(e.text);
			li.append(a);
			if(location.href.indexOf(e.href) != -1){
				li.addClass('active');
			}
		}
	});
}


String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
};

$(document).ready(function(){
	drawMenus(menus);
	$('.brand').html('JCool');
	$('.pull-right').html('');

	var code = $('#code').text();
	code = code.replaceAll('>', '&gt;');
	code = code.replaceAll('<', '&lt;');
	$('<pre width="600">').appendTo($('#canvas').parent().css('width', '800px'))
		.html(code).snippet("javascript",{style:"acid",collapse:true});
});


