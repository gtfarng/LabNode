console.log("Case Non-Sensitive")
var str = "ppPp"
console.log("String : "+str)
var status = false
let mid = (str.length /2) - 1;
str = str.toLowerCase();
for(var i=mid+1 ,j= mid;i<str.length-1,j>=0;i++,j--)
{
    if(mid==isNaN()){
        if(str[i]==str[j]){
            status = true
        }else{
            status =falsea
            break
        }
        // console.log("i : "+i+" j : "+j+" str[i] : "+str[i]+" str[j] : "+str[j]+" status : "+status)
    }
}
console.log("Palindrome : "+status)