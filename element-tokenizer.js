var Tokenizer = function(opt){
    
    opt = opt || {};
    
    // Root Element: by default use the first article element, 
    // or fall back to body if nothing is given via opt.el
    opt.el = opt.el == undefined ? (function(){
        var art = document.getElementsByTagName('article');
        return art.length === 0 ? document.body: art[0]
    }()) : opt.el;
    
    opt.filter = opt.filter || function(text){
        return text.replace(/[^a-zA-Z ]/g, '');
    };
    
    
    return opt.filter(opt.el.innerText).split(' ');
    
};
