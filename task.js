var item=[2,6,8,3,5,7,"a","b","e","u","y","z","i","o",8,8];
var length=item.length
function Mostfrequent(){
for(var i=0;i<length;i++){
    for(var j=i+1;j<length;j++){
        var count=0;
        if(item[i]==item[j]){
               count+=1;
        }
        

    }
    var max=0;
    var mf=item[0];
        if(max<count){
            max=count;
            mf=item[i];
        }
    
}
return mf;
}
console.log(Mostfrequent())


function primeeven(){
for(var i=0;i<length;i++){
    var j=2
   
    if(item[i]%j==0){
        console.log("even number"+item[i]);
    }
    else{
        console.log("prime number"+item[i])
    }
   
}
}

function vowelnconsonent(){
    let char=["a","b","e","u","y","z","i","o"];
    if(char =="a" ||char=="e"|| char=="i"||char=="o"||char=="u"){
        console.log("char is vowel"+char)
    }
    else{
        console.log("char is consonent"+char)
    }
}


