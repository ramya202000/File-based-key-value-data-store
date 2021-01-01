var fs=require('fs');
var data=fs.readFileSync('words.json');
//Use the JavaScript function JSON.parse() to convert text into a JavaScript object.
var words=JSON.parse(data);

let d={};
d=JSON.parse(data);

var express=require('express');
var app=express();
app.listen(3000,listening);
function listening()
{
    
    console.log('server starting..');
    console.log('The key-value pairs in words.json file');
    console.log(words);
}

app.use(express.static('website'));

//To read a file and display all the contents of the file
app.get('/add/:word/:score?',addword);
function addword(request,response)
{
    var data=request.params;
    var word=data.word;
    var score=Number(data.score);
    var reply;
    let info={};
    //to check the length of  a key
    if(!score || word.length>32){
        
            reply={
                Message:"Enter valid Data"
            }
        
    }else{
        //To check whether the key is present or not.
        if(d.hasOwnProperty(word))
        {
            reply={
                Message:"The Key is already exists."
            }
        }
        else{
            words[word]=score;
            //Use the JavaScript function JSON.stringify() to convert it into a string.
            var data=JSON.stringify(words,null,2)
            //To add a single key-value pair to json file
            fs.writeFile('words.json',data,finished);
            function finished(err)
            {
                console.log('The entered data is successfully saved');
            }
            let info={};
            let tempd={
                ...words
            };
                reply={
                    Status:"The key-value is saved",
                    Key:word,
                    Value:words[word],
                    Message:'After saving the data',
                    info:tempd
                    
                }
            }
        }
        response.send(reply);
        console.log('Adding data...');
        console.log('After saving the key and value');
        console.log(words);
}
    
//To read a file and displays all the contents of it
app.get('/all',sendAll);
function sendAll(request,response){
    response.send(words);
    
}

//to find a particular Key value
app.get('/search/:word?',searchWord);
function searchWord(request,response){
    var data=request.params;
     var word=data.word;
    var reply;
    
    if(words[word]){
        reply={
            Status:"The Key is found",
            Key:word,
            Value:words[word]
        }
    }
    else{
        reply={
            Status:"The key is not found",
            Key:word
        }
    }
    response.send(reply);
}
app.get('/delete/:word?',deleteWord);
function deleteWord(request,response){
    var data=request.params;
     var word=data.word;
     let tempd={
        ...words
    };
     let info={};
     var reply;
    if (d.hasOwnProperty(word)){
       
          //to delete a key
          delete d[word];
          try {
            fs.writeFileSync((filePath = "./words.json"), JSON.stringify(d,null,2));  
            let tempd = {

                ...d
              }; 
            reply={
                Status:'Deleted Successfully',
                Message:'After Deletion',
                info:tempd
    
    
            }  
           console.log('The key is deleted');
           console.log('After deletion');
           console.log(tempd);
          } catch (e) {
            d = tempd;
           
          }
        
    }
    else{
        console.log('The key is not found');
        reply={
            Status:'Key is not found'
        }
    }
   response.send(reply);

}
