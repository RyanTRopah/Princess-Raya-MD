/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ❄️Project
    Princess Raya MD
    
    😇Developer
     Ryan T Ropah 
     
    ✨Team
     P17 Bots
     
    💙Our Website
     https://ryantropah.com

© Do not mod this or I will take action⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/








































































































































































































const _0x46ec51=_0x1299;(function(_0x1c046a,_0x51155d){const _0x40c04f=_0x1299,_0x373a9e=_0x1c046a();while(!![]){try{const _0x5c3d8b=parseInt(_0x40c04f(0x110))/0x1*(parseInt(_0x40c04f(0x109))/0x2)+-parseInt(_0x40c04f(0x115))/0x3+parseInt(_0x40c04f(0xfd))/0x4*(-parseInt(_0x40c04f(0x102))/0x5)+-parseInt(_0x40c04f(0xfb))/0x6*(parseInt(_0x40c04f(0x11d))/0x7)+parseInt(_0x40c04f(0x10f))/0x8+-parseInt(_0x40c04f(0x10c))/0x9*(-parseInt(_0x40c04f(0x111))/0xa)+parseInt(_0x40c04f(0x10a))/0xb*(parseInt(_0x40c04f(0x11c))/0xc);if(_0x5c3d8b===_0x51155d)break;else _0x373a9e['push'](_0x373a9e['shift']());}catch(_0x412806){_0x373a9e['push'](_0x373a9e['shift']());}}}(_0x8d2e,0xef6fd));function hi(){const _0x936e96=_0x1299;console[_0x936e96(0x100)](_0x936e96(0x107));}hi();function _0x1299(_0xdd8a4e,_0x1c9b48){const _0x8d2ed1=_0x8d2e();return _0x1299=function(_0x129952,_0x52d2aa){_0x129952=_0x129952-0xf6;let _0x47a4ec=_0x8d2ed1[_0x129952];return _0x47a4ec;},_0x1299(_0xdd8a4e,_0x1c9b48);}const {cmd,commands}=require('../command'),yts=require(_0x46ec51(0x113)),axios=require(_0x46ec51(0xf6));cmd({'pattern':'video3','alias':[_0x46ec51(0x10b),'ytv3','ytvideo3'],'react':'💝','desc':_0x46ec51(0x106),'category':_0x46ec51(0x104),'use':'.vidx\x20<keywords>','filename':__filename},async(_0xd6d2a7,_0x52dd09,_0x274922,{from:_0x58af10,args:_0x30587b,reply:_0x1967fe})=>{const _0x39a82f=_0x46ec51;try{const _0x501cea=_0x30587b['join']('\x20');if(!_0x501cea)return _0x1967fe(_0x39a82f(0x117));_0x1967fe(_0x39a82f(0xf8));const _0x1ce220=await yts(_0x501cea);if(!_0x1ce220['videos']||_0x1ce220['videos']['length']===0x0)return _0x1967fe(_0x39a82f(0x108)+_0x501cea+'\x22.');const _0x26f941=_0x1ce220['videos'][0x0],_0x5920cf=_0x26f941[_0x39a82f(0xfe)],_0x2d1d85=_0x39a82f(0x101)+_0x5920cf,_0x4e01c1=await axios[_0x39a82f(0x119)](_0x2d1d85);if(!_0x4e01c1['data'][_0x39a82f(0xff)])return _0x1967fe(_0x39a82f(0x10e)+_0x501cea+'\x22.');const {download_url:_0x1b649b}=_0x4e01c1[_0x39a82f(0x120)][_0x39a82f(0x11a)];await _0xd6d2a7[_0x39a82f(0x112)](_0x58af10,{'video':{'url':_0x1b649b},'mimetype':_0x39a82f(0x116)},{'quoted':_0x52dd09});}catch(_0x2dd777){console[_0x39a82f(0x11b)](_0x2dd777),_0x1967fe(_0x39a82f(0x118));}}),cmd({'pattern':'play3','alias':[_0x46ec51(0xfc),'ytplay3'],'react':'💝','desc':_0x46ec51(0x103),'category':_0x46ec51(0x114),'use':_0x46ec51(0xfa),'filename':__filename},async(_0x5ccd79,_0xea2e4a,_0x258b5e,{from:_0x440036,args:_0x45f6cb,reply:_0xd2fbaa})=>{const _0x4e24f9=_0x46ec51;try{const _0x316468=_0x45f6cb['join']('\x20');if(!_0x316468)return _0xd2fbaa(_0x4e24f9(0x105));_0xd2fbaa(_0x4e24f9(0xf9));const _0x2644f6=await yts(_0x316468);if(!_0x2644f6[_0x4e24f9(0x11f)]||_0x2644f6[_0x4e24f9(0x11f)][_0x4e24f9(0x121)]===0x0)return _0xd2fbaa('❌\x20No\x20results\x20found\x20for\x20\x22'+_0x316468+'\x22.');const _0x1381c4=_0x2644f6[_0x4e24f9(0x11f)][0x0],_0x4be45=_0x1381c4['url'],_0x21c154=_0x4e24f9(0xf7)+_0x4be45,_0x2e3133=await axios[_0x4e24f9(0x119)](_0x21c154);if(!_0x2e3133['data']['success'])return _0xd2fbaa(_0x4e24f9(0x10d)+_0x316468+'\x22.');const {download_url:_0x5e3552}=_0x2e3133['data'][_0x4e24f9(0x11a)];await _0x5ccd79['sendMessage'](_0x440036,{'audio':{'url':_0x5e3552},'mimetype':_0x4e24f9(0x11e),'ptt':![]},{'quoted':_0xea2e4a});}catch(_0x1c8cbd){console[_0x4e24f9(0x11b)](_0x1c8cbd),_0xd2fbaa(_0x4e24f9(0x118));}});function _0x8d2e(){const _0x5b0cd3=['452276qVVBoX','181460AErjqf','sendMessage','yt-search','music','2862843FHtjww','video/mp4','*Please\x20provide\x20a\x20video\x20tital\x20or\x20url*','❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','get','result','error','31403676pTkEOn','4375SnmLwX','audio/mp4','videos','data','length','axios','https://api.davidcyriltech.my.id/download/ytmp3?url=','❄️Princess\x20Raya\x20Is\x20Downloading\x20Your\x20Video...❄️','❄️Princess\x20Raya\x20Is\x20Downloading\x20Your\x20Song...❄️','.playx\x20<keywords>','18498FRMNMP','song3','1790732Lxbxeg','url','success','log','https://api.davidcyriltech.my.id/youtube/mp3?url=','15rrlyHp','Download\x20audio\x20from\x20YouTube\x20by\x20searching\x20for\x20keywords.','video','*Please\x20provide\x20a\x20audio\x20tital\x20or\x20url*','Download\x20videos\x20from\x20YouTube\x20by\x20searching\x20for\x20keywords.','Hello\x20World!','❌\x20No\x20results\x20found\x20for\x20\x22','4YrvSuW','11EyHmRv','ytvid3','9ZFfKDN','❌\x20Failed\x20to\x20fetch\x20audio\x20for\x20\x22','❌\x20Failed\x20to\x20fetch\x20video\x20for\x20\x22','13322136xxWHFc'];_0x8d2e=function(){return _0x5b0cd3;};return _0x8d2e();}