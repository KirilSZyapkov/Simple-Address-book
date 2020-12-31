function newInput() {

    let name = document.getElementById('myName').value;
    let address = document.getElementById('myAddress').value;
    let phoneN = document.getElementById('myPhone').value;

    // let delBtn = document.createElement("a");
    // delBtn.id = "del-btn";
    // delBtn.innerText = "Delete";
    // delBtn.type = 'btn btn-butone danger'
    // delBtn.onclick = 'dell()'

    let myList = {
        name: name,
        address: address,
        phone: phoneN,
        // delB: delBtn
    }

    if (name !== "" && (name !== "" && address !== "" || phoneN !== "")) {

        let keys = Object.keys(myList);
        let tr = document.createElement('tr');

        for (let key of keys) {
            let td = document.createElement("td");
            let txt = myList[key];
            td.append(txt);
            tr.append(td);
        }

        document.getElementById('myTable').appendChild(tr);

        if (localStorage.getItem("lists") === null) {
            let lists = [];
            lists.push(myList);
            localStorage.setItem("lists", JSON.stringify(lists));
        } else {
            let lists = JSON.parse(localStorage.getItem('lists'));
            lists.push(myList);
            localStorage.setItem("lists", JSON.stringify(lists));
        }

        document.getElementById('myName').value = "";
        document.getElementById('myAddress').value = "";
        document.getElementById('myPhone').value = "";


    } else {
        alert("Min two filds must be fill! 'Name' is mandatory!");
    }
}

// function dell(name) {
//     let lists = JSON.parse(localStorage.getItem('lists'));
//     for (let i = 0; i < lists.length; i++) {
//         if (lists[i].name === name) {
//             lists.splice(i, 1);
//         }
//     }
//     localStorage.setItem("lists", JSON.stringify(lists));
// }

function loadList() {

    let lists = JSON.parse(localStorage.getItem('lists'));

    lists.forEach(element => {
        let token = element;

        let keys = Object.keys(token);
        let tr = document.createElement('tr');
       
        for (let key of keys) {
            let td = document.createElement("td");
            let txt = token[key];
            td.append(txt);
            tr.append(td);
        }
        
        document.getElementById('myTable').appendChild(tr);
    });

}
