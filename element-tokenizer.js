var Tokenizer = function(opt){
    
    var tokens;
    
    opt = opt || {};
    
    // remove false value elements from array such as empty string
    opt.purgeFalse = opt.purgeFalse === undefined ? true: opt.purgeFalse;
    
    // Root Element: by default use the first article element, 
    // or fall back to body if nothing is given via opt.el
    opt.el = opt.el == undefined ? (function(){
        var art = document.getElementsByTagName('article');
        return art.length === 0 ? document.body: art[0]
    }()) : opt.el;
    
    // the filter to use to remove unwanted chars
    opt.filter = opt.filter || function(text){
        return text.replace(/[^a-zA-Z ]/g, '');
    };
    
    
    tokens = opt.filter(opt.el.innerText).split(' ');
    
    // purge all words that are empty strings or false
    // for any reason
    if(opt.purgeFalse){
        tokens = tokens.filter(function(word){
            return word;
        });
    }
    
    // return words
    return tokens;
    
};
