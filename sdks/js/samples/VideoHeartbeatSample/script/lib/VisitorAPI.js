/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.2.1
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(k,q){if(!k)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.2.1";var g=window;g.s_c_in||(g.s_c_il=[],g.s_c_in=0);a._c="Visitor";a._il=g.s_c_il;a._in=g.s_c_in;a._il[a._in]=a;g.s_c_in++;var o=g.document,i=g.O;i||(i=null);var j=g.P;j||(j=!0);var r=g.N;r||(r=!1);a.C=function(a){var d=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),d=(d<<5)-d+e,d&=d;return d};a.m=function(a){var d="0123456789",b="",e="",f,h=8,g=10,i=10;if(1==a){d+="ABCDEF";for(a=0;16>a;a++)f=
Math.floor(Math.random()*h),b+=d.substring(f,f+1),f=Math.floor(Math.random()*h),e+=d.substring(f,f+1),h=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*g),b+=d.substring(f,f+1),g=0==a&&9==f?3:10,f=Math.floor(Math.random()*i),e+=d.substring(f,f+1),i=0==a&&9==f?3:10;return b+e};a.I=function(){var a;!a&&g.location&&(a=g.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var d=a.split("."),b=d.length-1,e=b-1;1<b&&2>=d[b].length&&0>",am,aq,ax,cc,cf,cg,ch,cv,cz,de,dj,dk,eu,fm,fo,ga,gd,gf,gl,gm,gq,gs,gw,hm,li,lu,md,mh,mp,mq,ms,ne,nl,nu,pm,si,sk,sm,sr,su,tc,td,tf,tg,tk,tv,va,vg,vu,wf,yt,".indexOf(","+
d[b]+",")&&e--;if(0<e)for(a="";b>=e;)a=d[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),d=(";"+o.cookie).split(" ").join(";"),b=d.indexOf(";"+a+"="),e=0>b?b:d.indexOf(";",b+1);return 0>b?"":decodeURIComponent(d.substring(b+2+a.length,0>e?d.length:e))};a.cookieWrite=function(c,d,b){var e=a.cookieLifetime,f,d=""+d,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=d?parseInt(e?e:0):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=b.getYear(),
b.setYear(f+2+(1900>f?1900:0))):b=0;return c&&"NONE"!=e?(o.cookie=encodeURIComponent(c)+"="+encodeURIComponent(d)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.l?" domain="+a.l+";":""),a.cookieRead(c)==d):0};a.d=i;a.w=function(a,d){try{"function"==typeof a?a.apply(g,d):a[1].apply(a[0],d)}catch(b){}};a.L=function(c,d){d&&(a.d==i&&(a.d={}),void 0==a.d[c]&&(a.d[c]=[]),a.d[c].push(d))};a.k=function(c,d){if(a.d!=i){var b=a.d[c];if(b)for(;0<b.length;)a.w(b.shift(),d)}};a.g=i;a.J=function(c,d,b){!d&&
b&&b();var e=o.getElementsByTagName("HEAD")[0],f=o.createElement("SCRIPT");f.type="text/javascript";f.setAttribute("async","async");f.src=d;e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f);b&&(a.g==i&&(a.g={}),a.g[c]=setTimeout(b,a.loadTimeout))};a.H=function(c){a.g!=i&&a.g[c]&&(clearTimeout(a.g[c]),a.g[c]=0)};a.D=r;a.F=r;a.isAllowed=function(){if(!a.D&&(a.D=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.F=j;return a.F};a.a=i;a.c=i;var t=a.V;t||(t="MC");var l=a.X;l||
(l="MCMID");var u=a.W;u||(u="MCCIDH");var v=a.T;v||(v="A");var m=a.Q;m||(m="MCAID");var w=a.U;w||(w="AAM");var p=a.S;p||(p="MCAAMLH");var n=a.R;n||(n="MCAAMB");var s=a.Y;s||(s="NONE");a.t=0;a.B=function(){if(!a.t){var c=a.version;a.customerIDMappingServer&&(c+="|"+a.customerIDMappingServer);a.customerIDMappingServerSecure&&(c+="|"+a.customerIDMappingServerSecure);a.audienceManagerServer&&(c+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(c+="|"+a.audienceManagerServerSecure);if(a.audienceManagerCustomerIDDPIDs)for(var d in a.audienceManagerCustomerIDDPIDs)!Object.prototype[d]&&
a.audienceManagerCustomerIDDPIDs[d]&&(c+=d+"="+a.audienceManagerCustomerIDDPIDs[d]);a.t=a.C(c)}return a.t};a.G=r;a.i=function(){if(!a.G){a.G=j;var c=a.B(),d=r,b=a.cookieRead(a.cookieName),e,f,h,g=new Date;a.a==i&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0])!=c&&(d=j),b.shift());1==b.length%2&&b.pop();for(c=0;c<b.length;c+=2)e=b[c].split("-"),f=e[0],h=b[c+1],e=1<e.length?parseInt(e[1]):0,d&&(f==u&&(h=""),0<e&&(e=g.getTime()/1E3-60)),f&&h&&(a.f(f,h,1),0<e&&(a.a["expire"+
f]=e,g.getTime()>=1E3*e&&(a.c||(a.c={}),a.c[f]=j)))}if(!a.b(m)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(h=b[1],c=h.indexOf("["),0<=c&&(h=h.substring(0,c)),h&&h.match(/^[0-9a-fA-F\-]+$/)&&a.f(m,h))}};a.M=function(){var c=a.B(),d,b;for(d in a.a)!Object.prototype[d]&&a.a[d]&&"expire"!=d.substring(0,6)&&(b=a.a[d],c+=(c?"|":"")+d+(a.a["expire"+d]?"-"+a.a["expire"+d]:"")+"|"+b);a.cookieWrite(a.cookieName,c,1)};a.b=function(c,d){return a.a!=i&&(d||!a.c||!a.c[c])?a.a[c]:
i};a.f=function(c,d,b){a.a==i&&(a.a={});a.a[c]=d;b||a.M()};a.s=function(c,d){var b=new Date;b.setTime(b.getTime()+1E3*d);a.a==i&&(a.a={});a.a["expire"+c]=Math.floor(b.getTime()/1E3);0>d&&(a.c||(a.c={}),a.c[c]=j)};a.A=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=s)),!a||a!=s&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.o=function(c,d){a.H(c);if(c==t||c==w){if(c==t){var b=a.b(l);b||((b=a.A(d))||
(b=a.m()),a.f(l,b));if(!b||b==s)b="";a.k(l,[b])}if("object"==typeof d){b=604800;void 0!=d.id_sync_ttl&&d.id_sync_ttl&&(b=parseInt(d.id_sync_ttl));var e=a.b(p);e||((e=d.d_region)||(e=d.dcs_region),e&&(a.s(p,b),a.f(p,e)));e||(e="");a.k(p,[e]);e=a.b(n);if(d.d_blob||d.blob)(e=d.d_blob)||(e=d.blob),a.s(n,b),a.f(n,e);e||(e="");a.k(n,[e])}}else if(c==v){b=a.b(m);b||(b=a.A(d))&&a.f(m,b);if(!b||b==s)b="";a.k(m,[b])}};a.h=i;a.n=function(c,d,b,e){var f="",h;if(a.isAllowed()&&(a.i(),f=a.b(c),!f&&(c==l?h=t:c==
p||c==n?h=w:c==m&&(h=v),h))){if(a.h==i||void 0==a.h[h])a.h==i&&(a.h={}),a.h[h]=j,a.J(h,d,function(){if(!a.b(c)){var b="";c==l&&(b=a.m());a.o(h,b)}});a.L(c,b);return""}if((c==l||c==m)&&f==s)f="";b&&e&&a.w(b,[f]);return f};a._setMarketingCloudFields=function(c){a.i();a.o(t,c)};a.setMarketingCloudVisitorID=function(c){a._setMarketingCloudFields(c)};a.getMarketingCloudVisitorID=function(c,d){return a.isAllowed()?a.n(l,a.q("_setMarketingCloudFields"),c,d):""};a._mapCustomerIDsDone=function(c){c&&"success"==
c.status&&a.f(u,a.r)};a.K=function(){a._mapCustomerIDsDone({status:"success"})};a.e={};a.z=r;a.r="";a.setCustomerIDs=function(c){a.e=c;if(a.isAllowed()){a.i();var c=a.b(u),d="",b,e;c||(c=0);for(b in a.e)e=a.e[b],!Object.prototype[b]&&e&&(d+=(d?"|":"")+b+"|"+e);a.r=a.C(d);a.r!=c&&(a.z=j,a.K())}};a.getCustomerIDs=function(){return a.e};a._setAnalyticsFields=function(c){a.i();a.o(v,c)};a.setAnalyticsVisitorID=function(c){a._setAnalyticsFields(c)};a.getAnalyticsVisitorID=function(c,d){if(a.isAllowed()){var b=
a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(c,j)});if(b){var e=a.trackingServer,f="";a.loadSSL&&a.trackingServerSecure&&(e=a.trackingServerSecure);e&&(f="http"+(a.loadSSL?"s":"")+"://"+e+"/id?mid="+b+"&callback=s_c_il%5B"+a._in+"%5D._setAnalyticsFields");return a.n(m,f,c,d)}}return""};a._setAudienceManagerFields=function(c){a.i();a.o(w,c)};a.q=function(c){var d=a.audienceManagerServer,b="",e=a.b(l),f=a.b(n,j),h="",g,i;a.loadSSL&&a.audienceManagerServerSecure&&(d=a.audienceManagerServerSecure);
if(d){if(a.e&&a.audienceManagerCustomerIDDPIDs)for(g in a.e)Object.prototype[g]||(b=a.e[g],i=a.audienceManagerCustomerIDDPIDs[g],b&&i&&(h+=(h?"%01":"&d_cid=")+i+"%01"+encodeURIComponent(b)));c||(c="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+d+"/id?d_rtbd=json&d_ver=2&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&d_mid="+e:"")+(f?"&d_blob="+encodeURIComponent(f):"")+h+"&d_cb=s_c_il%5B"+a._in+"%5D."+c}return b};a.getAudienceManagerLocationHint=function(c,d){return a.isAllowed()&&
a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(c,j)})?a.n(p,a.q(),c,d):""};a.getAudienceManagerBlob=function(c,d){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(c,j)})){var b=a.q();a.z&&a.s(n,-1);return a.n(n,b,c,d)}return""};a.j="";a.p={};a.u="";a.v={};a.getSupplementalDataID=function(c,d){!a.j&&!d&&(a.j=a.m(1));var b=a.j;a.u&&!a.v[c]?(b=a.u,a.v[c]=j):b&&(a.p[c]&&(a.u=a.j,a.v=a.p,a.j=b=!d?a.m(1):"",a.p={}),b&&(a.p[c]=j));return b};0>k.indexOf("@")&&
(k+="@AdobeOrg");a.marketingCloudOrgID=k;a.namespace=q;a.cookieName="AMCV_"+k;a.l=a.I();a.l==g.location.hostname&&(a.l="");if(q){var x="AMCV_"+q,z=a.cookieRead(a.cookieName),y=a.cookieRead(x);!z&&y&&(a.cookieWrite(a.cookieName,y,1),a.cookieWrite(x,"",-60))}a.loadSSL=0<=g.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";a.customerIDMappingServer="map.adobecrs.com"}
Visitor.getInstance=function(k,q){var a,g=window.s_c_il,o;0>k.indexOf("@")&&(k+="@AdobeOrg");if(g)for(o=0;o<g.length;o++)if((a=g[o])&&"Visitor"==a._c&&(a.marketingCloudOrgID==k||q&&a.namespace==q))return a;return new Visitor(k,q)};
