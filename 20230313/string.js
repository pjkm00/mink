const elem = document.querySelector("p").innerText;
        console.log(elem, typeof elem);
        //String method 문자열 메쏘드
        console.log(elem.length);
        document.querySelector("#demo").innerHTML = elem.length;
        

        //Slice 숫자 잘라낸 것을 리턴
        let text = "Apple, Banana, Kiwi";
        //0부터 셈 A가 0임
        let part = text.slice(7, 13);  //slice 메쏘드가 텍스트를 잘라서 return한다
        //7부터 12까지 라는 뜻
        console.log(part);
        console.log(text.slice(7))
        //하나만 쓰면 7번부터 끝까지 찍힘

        //Replace 문자 값을 바꿔서 그것을 리턴
        console.log(text.replace("Apple", "Orange"));

        //UpperCase대문자, LowerCase소문자  string이여야함
        console.log(text.toUpperCase()); //소괄호안에 값을 넣지 않으며 사용
        console.log(text.toLowerCase());

        //Concat
        let text1 = "Hello";
        let text2 = "World";
        let text3 = text1.concat(" " + text2);
        console.log(text3)

