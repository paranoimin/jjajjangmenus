window.onload = function() {

    var menuPan = [
        {
            "cate": "요리류",
            "menu": [
                {"name": "양장피"},
                {"name": "오향장육"},
                {"name": "세가지 냉채"},
                {"name": "네가지 냉채"}
            ]
        },
        {
            "cate": "고기류",
            "menu": [
                {"name": "깐풍기"},
                {"name": "라조기"},
                {"name": "라조육"},
                {"name": "깐풍육"},
                {"name": "사천 탕수육"},
                {"name": "탕수육(대)"},
                {"name": "탕수육(중)"},
                {"name": "탕수육(소)"}
            ]
        },
        {
            "cate": "해불류",
            "menu": [
                {"name": "(특)전가복"},
                {"name": "전가복"},
                {"name": "특잡탕"},
                {"name": "삼슬 샥스핀"},
                {"name": "류삼슬"},
                {"name": "팔보채"},
                {"name": "간소왕새우"},
                {"name": "간소새우"},
                {"name": "간풍새우"},
                {"name": "삼선 누룽지탕"},
                {"name": "고추잡채"},
                {"name": "당면잡채"},
                {"name": "송이볶음"},
                {"name": "송이전복"},
                {"name": "송이관자"}
            ]
        }
    ];

    var body = document.getElementsByTagName("body")[0];

    // header elements
    var header = document.createElement("header");
    header.setAttribute("id", "header");
    var h1 = document.createElement("h1");

    h1.innerText = "중화반점";

    header.appendChild(h1);
    body.appendChild(header);

    // section elements
    var section = document.createElement("section");
    section.setAttribute("id", "section");
    var sectionh2 = document.createElement("h2");
    sectionh2.innerText = "메뉴";

    //-- section > ul elements
    var ul = document.createElement("ul");


    var cateLi0 = document.createElement("li");
    var innerUl0 = document.createElement("ul");
    var innerLi0 = document.createElement("li");
    var innerLi1 = document.createElement("li");
    var innerLi2 = document.createElement("li");
    var innerLi3 = document.createElement("li");

    cateLi0.setAttribute("class", "cateStrong");
    cateLi0.innerText = menuPan[0].cate;
    cateLi0.appendChild(innerUl0);

    innerUl0.appendChild(innerLi0);
    innerLi0.setAttribute("class", "menuNormal");
    innerLi0.innerText = menuPan[0].menu[0].name;

    innerUl0.appendChild(innerLi1);
    innerLi1.setAttribute("class", "menuNormal");
    innerLi1.innerText = menuPan[0].menu[1].name;

    innerUl0.appendChild(innerLi2);
    innerLi2.setAttribute("class", "menuNormal");
    innerLi2.innerText = menuPan[0].menu[2].name;

    innerUl0.appendChild(innerLi3);
    innerLi3.setAttribute("class", "menuNormal");
    innerLi3.innerText = menuPan[0].menu[3].name;

    var cateLi1 = document.createElement("li");
    var innerUl1 = document.createElement("ul");
    var innerLi10 = document.createElement("li");
    var innerLi11 = document.createElement("li");
    var innerLi12 = document.createElement("li");
    var innerLi13 = document.createElement("li");
    var innerLi14 = document.createElement("li");
    var innerLi15 = document.createElement("li");
    var innerLi16 = document.createElement("li");
    var innerLi17 = document.createElement("li");

    cateLi1.setAttribute("class", "cateStrong");
    cateLi1.innerText = menuPan[1].cate;
    cateLi1.appendChild(innerUl1);

    innerUl1.appendChild(innerLi10);
    innerLi10.setAttribute("class", "menuNormal");
    innerLi10.innerText = menuPan[1].menu[0].name;

    innerUl1.appendChild(innerLi11);
    innerLi11.setAttribute("class", "menuNormal");
    innerLi11.innerText = menuPan[1].menu[1].name;

    innerUl1.appendChild(innerLi12);
    innerLi12.setAttribute("class", "menuNormal");
    innerLi12.innerText = menuPan[1].menu[2].name;

    innerUl1.appendChild(innerLi13);
    innerLi13.setAttribute("class", "menuNormal");
    innerLi13.innerText = menuPan[1].menu[3].name;

    innerUl1.appendChild(innerLi14);
    innerLi14.setAttribute("class", "menuNormal");
    innerLi14.innerText = menuPan[1].menu[4].name;

    innerUl1.appendChild(innerLi15);
    innerLi15.setAttribute("class", "menuNormal");
    innerLi15.innerText = menuPan[1].menu[5].name;

    innerUl1.appendChild(innerLi16);
    innerLi16.setAttribute("class", "menuNormal");
    innerLi16.innerText = menuPan[1].menu[6].name;

    innerUl1.appendChild(innerLi17);
    innerLi17.setAttribute("class", "menuNormal");
    innerLi17.innerText = menuPan[1].menu[7].name;


    var cateLi2 = document.createElement("li");
    var innerUl2 = document.createElement("ul");
    var innerLi20 = document.createElement("li");
    var innerLi21 = document.createElement("li");
    var innerLi22 = document.createElement("li");
    var innerLi23 = document.createElement("li");
    var innerLi24 = document.createElement("li");
    var innerLi25 = document.createElement("li");
    var innerLi26 = document.createElement("li");
    var innerLi27 = document.createElement("li");
    var innerLi28 = document.createElement("li");
    var innerLi29 = document.createElement("li");
    var innerLi210 = document.createElement("li");
    var innerLi211 = document.createElement("li");
    var innerLi212 = document.createElement("li");
    var innerLi213 = document.createElement("li");
    var innerLi214 = document.createElement("li");

    cateLi2.setAttribute("class", "cateStrong");
    cateLi2.innerText = menuPan[2].cate;
    cateLi2.appendChild(innerUl2);

    innerUl2.appendChild(innerLi20);
    innerLi20.setAttribute("class", "menuNormal");
    innerLi20.innerText = menuPan[2].menu[0].name;

    innerUl2.appendChild(innerLi21);
    innerLi21.setAttribute("class", "menuNormal");
    innerLi21.innerText = menuPan[2].menu[1].name;

    innerUl2.appendChild(innerLi22);
    innerLi22.setAttribute("class", "menuNormal");
    innerLi22.innerText = menuPan[2].menu[2].name;

    innerUl2.appendChild(innerLi23);
    innerLi23.setAttribute("class", "menuNormal");
    innerLi23.innerText = menuPan[2].menu[3].name;

    innerUl2.appendChild(innerLi24);
    innerLi24.setAttribute("class", "menuNormal");
    innerLi24.innerText = menuPan[2].menu[4].name;

    innerUl2.appendChild(innerLi25);
    innerLi25.setAttribute("class", "menuNormal");
    innerLi25.innerText = menuPan[2].menu[5].name;

    innerUl2.appendChild(innerLi26);
    innerLi26.setAttribute("class", "menuNormal");
    innerLi26.innerText = menuPan[2].menu[6].name;

    innerUl2.appendChild(innerLi27);
    innerLi27.setAttribute("class", "menuNormal");
    innerLi27.innerText = menuPan[2].menu[7].name;

    innerUl2.appendChild(innerLi28);
    innerLi28.setAttribute("class", "menuNormal");
    innerLi28.innerText = menuPan[2].menu[8].name;

    innerUl2.appendChild(innerLi29);
    innerLi29.setAttribute("class", "menuNormal");
    innerLi29.innerText = menuPan[2].menu[9].name;

    innerUl2.appendChild(innerLi210);
    innerLi210.setAttribute("class", "menuNormal");
    innerLi210.innerText = menuPan[2].menu[10].name;

    innerUl2.appendChild(innerLi211);
    innerLi211.setAttribute("class", "menuNormal");
    innerLi211.innerText = menuPan[2].menu[11].name;

    innerUl2.appendChild(innerLi212);
    innerLi212.setAttribute("class", "menuNormal");
    innerLi212.innerText = menuPan[2].menu[12].name;

    innerUl2.appendChild(innerLi213);
    innerLi213.setAttribute("class", "menuNormal");
    innerLi213.innerText = menuPan[2].menu[13].name;

    innerUl2.appendChild(innerLi214);
    innerLi214.setAttribute("class", "menuNormal");
    innerLi214.innerText = menuPan[2].menu[14].name;


    ul.appendChild(cateLi0);
    ul.appendChild(cateLi1);
    ul.appendChild(cateLi2);

    section.appendChild(sectionh2);
    section.appendChild(ul);
    body.appendChild(section);

    // footer elements
    var footer = document.createElement("footer");
    var footh2 = document.createElement("h2");
    footh2.innerText = "footer";

    footer.appendChild(footh2);
    body.appendChild(footer);

};
