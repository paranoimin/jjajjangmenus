var menuPan = [
    {
        "name": "요리류",
        "menu": [
            {"name": "양장피", "price" : 5000},
            {"name": "오향장육", "price" : 5000},
            {"name": "세가지 냉채", "price" : 5000},
            {"name": "네가지 냉채", "price" : 5000}
        ]
    },
    {
        "name": "고기류",
        "menu": [
            {"name": "깐풍기", "price" : 5000},
            {"name": "라조기", "price" : 5000},
            {"name": "라조육", "price" : 5000},
            {"name": "깐풍육", "price" : 5000},
            {"name": "사천 탕수육", "price" : 5000},
            {"name": "탕수육(대)", "price" : 5000},
            {"name": "탕수육(중)", "price" : 5000},
            {"name": "탕수육(소)", "price" : 5000}
        ]
    },
    {
        "name": "해물류",
        "menu": [
            {"name": "(특)전가복", "price" : 5000},
            {"name": "전가복", "price" : 5000},
            {"name": "특잡탕", "price" : 5000},
            {"name": "삼슬 샥스핀", "price" : 5000},
            {"name": "류삼슬", "price" : 5000},
            {"name": "팔보채", "price" : 5000},
            {"name": "간소왕새우", "price" : 5000},
            {"name": "간소새우", "price" : 5000},
            {"name": "간풍새우", "price" : 5000},
            {"name": "삼선 누룽지탕", "price" : 5000},
            {"name": "고추잡채", "price" : 5000},
            {"name": "당면잡채", "price" : 5000},
            {"name": "송이볶음", "price" : 5000},
            {"name": "송이전복", "price" : 5000},
            {"name": "송이관자", "price" : 5000}
        ]
    }
];

window.addEventListener("load", function() {
    createHtml();
});

function createHtml() {

    var i = 0;
    var ele = menuPan.length;
    var body = document.getElementsByTagName("body")[0];
    var ul = document.createElement("ul");

    for(i; i < ele; i++) {
        var li = document.createElement("li");
        var bigName = document.createElement("h1");
        bigName.textContent = menuPan[i].name;
        li.appendChild(bigName);

        createChildMenu(li, menuPan[i].menu);

        ul.appendChild(li);
    }
    body.appendChild(ul);
}


function createChildMenu(motherLi, menuLength) {

    var i = 0;
    var ele = menuLength.length;

    var innerUl = document.createElement("ul");

    for(i; i < ele; i++) {
        var innerLi = document.createElement("li");

        innerLi.textContent = menuLength[i].name;

        innerUl.appendChild(innerLi);
    }
    motherLi.appendChild(innerUl);

}
