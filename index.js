var fs=require('fs');
var data=fs.readFileSync('words.json');
var words=JSON.parse(data);
console.log(words);
//console.log('server listening');
let d={};
d=JSON.parse(data);
//console.log(typeof(data));
var express=require('express');
var app=express();
app.listen(3000,listening);
function listening()
{

    console.log('listening..');

}
app.use(express.static('website'));

app.get('/add/:word/:score?',addword);
function addword(request,response)
{
    var data=request.params;
    var word=data.word;
    var score=Number(data.score);
    var reply;
   
    if(!score || word.length>32){
        
            reply={
                msg:"Enter valid Data"
            }
        
    }else{
        if(d.hasOwnProperty(word))
        {
            reply={
                msg:"The Key is already exists."
            }
        }
        else{
            words[word]=score;
            var data=JSON.stringify(words,null,2)
            fs.writeFile('words.json',data,finished);
            function finished(err)
            {
                console.log('all set');
            }
            
           
                reply={
                    status:"The key is saved",
                    word:word,
                    score:words[word]
                }
            }
        }
        response.send(reply);
}
    

app.get('/all',sendAll);
function sendAll(request,response){
    response.send(words);
}

app.get('/search/:word?',searchWord);
function searchWord(request,response){
    var data=request.params;
     var word=data.word;
    var reply;
    if(words[word]){
        reply={
            status:"found",
            word:word,
            score:words[word]
        }
    }
    else{
        reply={
            status:"not found",
            word:word
        }
    }
    response.send(reply);
}
app.get('/delete/:word?',deleteWord);
function deleteWord(request,response){
    var data=request.params;
     var word=data.word;
    if (d.hasOwnProperty(word)){
        let tempd = {

            ...d
          };
          delete d[word];
          try {
            fs.writeFileSync((filePath = "./words.json"), JSON.stringify(d,null,2));   
            console.log('key deleted!') ;      
           
          } catch (e) {
            d = tempd;
           
          }
        
    }
    else{
        console.log("not found");
        let res="not found";
        response.send(JSON.stringify("not found!"));
    }
   response.send(JSON.stringify('deleted successfully'));

}
