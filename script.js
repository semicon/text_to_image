var baseUrl = document.getElementById("js-appjs").src.replace(/\/script\.js.*/, '')

// ga
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-33501423-1']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

document.addEventListener("DOMContentLoaded", function(event) {
    /* twitter button */
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
})

Vue.createApp({
    data:function(){
        return {
            url:"",
            w:150,
            h:150,
            p1:''
        }
    },
    mounted: function(){this.exec()},
    methods: {
        exec: function(){
            //this.url = baseUrl + '/' + this.w + 'x' + this.h + '.png'
            this.url = 'https://placehold.jp' + '/' + this.w + 'x' + this.h + '.png'
        },
        preset: function(){
            var x = this.p1.split(' | ')[0].split(' x ')
            if (x[0] && x[1]) {
                this.w = x[0]
                this.h = x[1]
            }
        },
        copy: function(){
            navigator.clipboard.writeText(this.url)
        }
    }
}).mount('#app1')

Vue.createApp({
    data:function(){
        return {
            url:"",
            w:150,
            h:150,
            string:"",
            fontsize:"",
            format:"png",
            color:"#ffffff",
            bgcolor:"#00fb00",
            usecss:false,
            css:[
                "border-radius:15px;",
                "background: -webkit-gradient(linear, left top, left bottom, from(#00fb00), to(#cccccc));",
                ""
            ].join("\n")
        }
    },
    mounted: function(){this.exec()},
    methods: {
        exec: function(){
            var url = [], q = [];
            url.push(this.fontsize ? '/' + this.fontsize : '')
            url.push(this.bgcolor ? '/' + this.bgcolor.replace("#","") : '')
            url.push(this.color ? '/' + this.color.replace("#","") : '')
            if (this.string != ""){
                q.push("text=" + encodeURIComponent(this.string))
            }
            if(this.css && this.usecss){
                var cssData = [];
                var cssLine = this.css.replace(/[\r\n]/g, "").split(";")
                for(var i in cssLine){
                    if(cssLine[i]){
                        var cssString = cssLine[i].split(":");
                        if(cssString.length > 1){
                            var tmp = '"' + cssString[0].replace("\n","") + '":"';
                            cssString.shift();
                            tmp += cssString.join(":").replace("\n","") + '"';
                            cssData.push(tmp);
                        }
                    }
                }
                q.push("css=" + encodeURIComponent("{" + cssData.join(",") +"}"));
            }
            url.push('/' + this.w + "x" + this.h + '.' + this.format);

            this.url = baseUrl + url.join('') + (q.length ? '?' + q.join('&') : '')
        },
        copy: function(){
            navigator.clipboard.writeText(this.url)
        }
    }
}).mount('#app2')

Vue.createApp({
    data:function(){
        return {
            u:"https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder+image",
            url:""
        }
    },
    mounted: function(){this.exec()},
    methods: {
        exec: function(){
            this.url = this.u
        }
    }
}).mount('#app3')
