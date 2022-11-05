var btn_state = 'stop'; 
    var interval1;
    var interval2;

    function btncss() {
        $('#startBtn').css('color', '#rgb(57, 230, 14);');
        $('#startBtn').css('font-size', '30px');
    }

    $(document).on('click', '#startBtn', function(){
        if(btn_state == 'stop') {
            $('#startBtn').text('STOP');
            console.log(btn_state)

            btncss(); // 조건이 맞으면 btnclass 함수안에 있는 css가 적용
        } // startBtn을 클릭 시 btn_state가 stop과 같으면 start 버튼 문구를 stop로 출력해라
        else {
            $('#startBtn').text('START');
            btncss();
        } // 아닐 경우 start로 출력해라
        ex02(); // 아닐 경우 ex02 함수가 실행 됨  
    });

    function ex02() {
        var arr1= [
                "배부장찌개",
                "순정감자탕",
                "계림",
                "두루치기",
                "스지곰탕",
                "바스버거",
                "봉추찜닭",
                "부대찌개",
                "은희네해장국",
                "우사기",
                "짜앤짬",
                "온달",
                "하루앤소쿠",
                "샤브샤브",
                "겐코",
                "컵스탑",
                "배꼽집",
                "우육면",
                "닭갈비",
                "본설렁탕",
                "호미정",
                "돌솥비빔밥",
                "마라탕",
                "순두부찌개+제육",
                "청년다방",
                "북창동순두부",
                "이화수전통육개장"
        ];
        var idx1 = 0;
        if(btn_state == 'stop') {
            interval1 = setInterval(setText01, 50); // 일정 시간 간격으로 interval1 함수 반복 실행 
            btn_state = 'start';
        }else {
            clearInterval(interval1); // 실행 되고있는 interval1을 중지
            btn_state = 'stop';
        }

        function setText01() {
            if(idx1 >= arr1.length) {
                    idx1 = 0; // 이게 없으면 1바퀴만 돈다. 
            } // idx1가 arr1의 lenght보다 크거나 같을 경우 menu의 텍스트의 배열을 증가한다. 
            $('#menu').text(arr1[idx1++]);
        }
    }
