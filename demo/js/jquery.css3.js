(function(win, $){

        var doc = win.document,
                nav = win.navigator,
                html = doc.documentElement;

//浏览器版本判断
/*@cc_on @if (@_jscript)
        $.browser = {
                msie: true,
                csspre: "ms",
                version: doc.documentMode || (doc.compatMode == "CSS1Compat" ? "XMLHttpRequest" in win ? 7 : 6 : 5)
        };
        nav.language = nav.userLanguage;
@else @*/

        if ( win.opera ) {
                //opera
                $.browser = {
                        opera: true,
                        csspre: "o",
                        version: opera.version()
                };
                nav.language = nav.language.replace(/-[a-z]{2}$/, function(str ) {
                        return str.toUpperCase();
                });
        } else {
                function browser(name){
                        if( !$.browser[name] ) {
                                $.browser = {version: true};
                                $.browser[name] = true;
                        }
                }
                if ( win.netscape && nav.product == "Gecko" ) {
                        //firefox
                        browser("mozilla");
                } else if("WebKitPoint" in win) {
                        //webkit
                        browser("webkit");
                        $.browser.chrome = !!win.chrome;
                        $.browser.safari = /^apple\s+/i.test(nav.vendor);
                }
        }

/*@end @*/

        //统一各浏览器私有CSS属性名
        if($.browser.msie || $.browser.opera) {
                var style = html.currentStyle,
                regexp = $.browser.opera ? /^O([A-Z])(.*)$/ : /^ms([A-Z])(.*)$/;
                for(var name in style){
                        if(     name = name.match(regexp) ) {
                                $.cssProps[ name[1].toLowerCase() + name[2] ] = name[0];
                        }
                }
        } else {
                var style = win.getComputedStyle( html, null );
                $.each(style, function(i, name){
                        if(     name = name.match(/^-\w+-(.*)$/) ) {
                                $.cssProps[ $.camelCase(name[1]) ] = $.camelCase(name[0]);
                        }
                });
                var csspre = RegExp.input.match(/^-(\w+)-/);
                if(csspre) {
                        $.browser.csspre = csspre[1];
                }
        }


})(this, jQuery);

(function(win, $){

        var version = parseFloat($.browser.version);

        //IE9不支持线性渐变和径向渐变且IE8没有getComputedStyle方法
        if ($.browser.msie && version < 10 ) {
                var doc = win.document,
                        path = doc.scripts;
                path = path[path.length - 1];
                path = path.src;
                path = path.substr(0, path.lastIndexOf("/") + 1);
                function getScript(file){
                        if(!file.indexOf("/")){
                                file = path + file;
                        }
                        doc.writeln('<script src="' + file + '"></script>');
                }
                if(version < 9){
                        var loc = doc.location;
                        loc = loc.hostname ? loc.protocol : "http:";
                        getScript( loc + "//html5shiv.googlecode.com/svn/trunk/html5.js");
                        //getScript( loc + "//jquerycss3.googlecode.com/svn/selectivizr-min.js");
                        //getScript("selectivizr-min.js");
                }
                getScript("pie.js");
                getScript("jquery.css3.ie.js");
                return;
        }

        //去除属性中的css前缀
        var csspre = "-" + $.browser.csspre + "-",
        regexp = new RegExp("(?!\\w)" + csspre, "g");

        //在cssProps中添加animation
        if ($.cssProps.animationName && !$.cssProps.animation) {
                $.cssProps.animation = $.camelCase(csspre + "animation");
        }

        //动画中去除属性中的css前缀
        $.cssHooks.animationName = {
                get: function( elem ) {
                        var name = "animationName";
                        try{
                                return win.getComputedStyle( elem, null )[$.cssProps[ name ] || name].replace( regexp, "" );
                        } catch( ex ) {}
                },
                set: function( elem, value ) {
                        var preName = $.cssProps[ $.camelCase(value) ];
                        if(preName) {
                                value = preName.replace(/[A-Z]/g, function(str){
                                                return "-" + str.toLowerCase();
                                        });
                        }
                        return value;
                }
        }

        $.cssHooks.animation = {
                set: function( elem, value ){
                        return value.replace(/\S+/, function(arg){
                                        return $.cssHooks.animationName.set( elem, arg );
                                });
                }
        }

        //线性渐变和径向渐变等去除属性中的css前缀
        $.cssHooks.backgroundImage = {
                get: function( elem ) {
                        return win.getComputedStyle( elem, null ).backgroundImage.replace( regexp, "" );
                },
                set: function( elem, value ) {
                        return value.replace( /\b(\w+\-)+gradient\(/g, function(str){
                                        return csspre + str;
                                });
                }
        }

        $.cssHooks.background = {
                set: function( elem, value ){
                        return $.cssHooks.backgroundImage.set( elem, value );
                }
        }

        //解决较老版本各种浏览器的个别问题
        if ($.browser.webkit) {
                //解决较老版本的webkit的线性渐变和径向渐变等兼容语法
                if (!$("<div>").css("backgroundImage","linear-gradient(#000,#333)")[0].style.backgroundImage){
                        $.cssHooks.backgroundImage.set = function( elem, value ) {
                                var colors = [];
                                value = value.replace(/\brgba?\(.*?\)/ig,function(color){
                                        return "#" + colors.push(color) + "";
                                }).replace(/\b(\w+\-)+gradient\(.*?\)+/ig,function(gradient){
                                        gradient = gradient.match(/([\w\-]+)-gradient\((.*)\)/);
                                        gradient = {
                                                //type: gradient[1],
                                                args: gradient[2].split(/\s*,\s*/),
                                                colorstop: [],
                                                point: ""
                                        };
                                        $.each(gradient.args, function(i, arg){
                                                arg = $.trim(arg);
                                                if(/^#\w+\b/.test(arg)){
                                                        if(/\s/.test(arg)){
                                                                arg = arg.split(/\s/).reverse();
                                                        } else {
                                                                arg = [i / (gradient.args.length - 1), arg];
                                                        }
                                                        gradient.colorstop.push("color-stop(" + arg + ")");
                                                } else {
                                                        gradient.point = arg;
                                                }
                                        });
                                        var val = {
                                                        bottom: "center bottom, center top",
                                                        right: "right center, left center",
                                                        left: "left center, right center",
                                                        top: "center top, center bottom"
                                                },
                                                //args = [gradient.type];
                                                args = ["linear"];
                                        args.push(val[gradient.point] || val.top);
                                        args = args.concat(gradient.colorstop);
                                        return "-webkit-gradient(" + args + ")";
                                }).replace(/#\d{1,2}\b/g, function(color){
                                        return colors[parseInt(color.slice(1)) - 1];
                                });
                                //console.log(elem);
                                //console.log(value);
                                return value;
                        }
                }
        } else if ($.browser.mozilla ) {
                //Firefox 4之前的圆角语法统一
                if(!$("<div style='border-radius:10px;'>").css("borderRadius")){
                        var mozrad = $.cssProps.borderRadius = "MozBorderRadius";
                        $.each(["BottomRight","BottomLeft","TopRight","TopRight"], function(i, arg){
                                arg = arg.match(/^(\w+)([A-Z]\w+)$/);
                                $.cssProps["border" + arg[0] + "Radius"] = mozrad + arg[1] + arg[2].toLowerCase();
                        });
                }
        }
})(this, jQuery);