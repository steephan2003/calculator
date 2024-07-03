function clicks(val){
    document.getElementById("inp").value+=val
}
function clears(){
    document.getElementById("inp").value=""
}
function equalClick(){
    var text=document.getElementById("inp").value
    var result=eval(text)
    document.getElementById("inp").value=result
}