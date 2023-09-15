// node.js, "classic" way:
const fs = require('fs')
let shtuff = ""
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();


fs.readFile('markdown.md',  function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString())
    shtuff = data.toString()
    var result = md.render(shtuff);
    fs.writeFile('answer.html', result, function (err){
        if(err){
            console.log(err);
        }
        else{
            console.log('writing complete')
        }
    })
})




