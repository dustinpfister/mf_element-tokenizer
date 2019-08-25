# mf_element_tokenizer

Tokenize the text content of a page into an array of words.

The basic idea here is that I just wanted a script that will create an array or words based on the readable content of a page. This array will then be used elseware to create something based on the content of a page.

## Basic use

By default the tokenizer will give an array of all the inner text of the page. The inner text differs from the inner content in that iner text should be only human readable content

```html
<html>
  <body>
    <div>
       <p>Hello world! I want an array of words.</p>
    </div>
    <script src="../element-tokenizer.js"></script>
    <script>
       var tokens = Tokenizer();
       console.log(tokens);
       // ["Hello", "world", "I", "want", "an", "array", "of", "words"]
    </script>
  </body>
</html>
```

