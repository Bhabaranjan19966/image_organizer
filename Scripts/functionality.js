getinfo = (obj) =>{
var img= document.getElementById(obj);
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption");
modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}
closer = (obj) =>{

    var mod=document.getElementById(obj);
    console.log('called');
    var v = ''+mod.style.display;
    mod.style.display="none";
}
