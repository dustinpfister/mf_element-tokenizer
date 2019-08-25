var Tokenizer = function(opt){
    
    opt = opt || {};
    
    opt.el = opt.el == undefined ? (function(){
       
        var el = document.body;
        
        return el;
        
    }()) : opt.el;
    
    console.log(opt);
    
};
