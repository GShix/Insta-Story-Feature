var arr= [
    {dp:"dambargm.jpg", story:"done.jpg"},
    {dp:"don.jpg", story: "dambargm1.jpg"},
    {dp:"dambar_profile.jpg", story: "don.jpg"}
    
]
var clutter = ''
arr.forEach(function(elem,idx){
    clutter += `<div id="story">
                <img src="${elem.dp}"
    </div>`
})
console.log(clutter)
document.querySelector("#storyharu").innerHTML = clutter