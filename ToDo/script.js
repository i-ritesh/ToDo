// showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
    let addTxt = document.getElementById('addTxt');
    let code = localStorage.getItem("code")
    if (code == null) {
        codeObj = [];
    }
    else{
        codeObj = JSON.parse(code);
    }
    codeObj.push(addTxt.value);
    localStorage.setItem("code", JSON.stringify(codeObj));
    // addTxt.value="";
    showCode();
})

function showCode() {
    let code = localStorage.getItem("code");
    if (code == null) {
        codeObj = [];
    }
    else{
        codeObj = JSON.parse(code);
    }
    let html = "";
    codeObj.forEach(function(element, index){
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">List ${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <a href="#" id="${index}" onclick="deleteCode(this.id)" class="btn btn-primary">Delete</a>
                </div>
            </div>
        `
    });
    let not = document.getElementById('code');
    if (code.lenght != 0) {
        not.innerHTML = html;
    }
    else{
        not.innerHTML= `Add Your Code To See Result`;
    }

}

// let deleteNote = document.getElementById('${index}');
function deleteCode(index){
    console.log('i am deleting', index);

    let code = localStorage.getItem('code');
    if (code == null) {
        codeObj = [];
    }
    else{
        codeObj = JSON.parse(code);
    }

codeObj.splice(index,1);
localStorage.setItem("code", JSON.stringify(codeObj))
showCode();
}