document.addEventListener('DOMContentLoaded',function() {
    var dem = 0;
    var nuts = document.querySelectorAll('.nut'); // chọn tất cả các button có class là nut
    var nextQuest = document.querySelector('.next-question');
    var start = document.querySelector('.start');
    var time = document.querySelector('.time-clock');
    var trueAnswers = document.querySelectorAll('.true-ans');
    var showAnswer = document.querySelector('.show-answer');

    var title = [
        "Bài hát có đoạn “Một con đò sang ngang.Ôi lòng thầy mênh mang.Cho em biết yêu cánh cò trong câu ca dao…” là của tác giả nào?",
        "Nền giáo dục Việt Nam là nền giáo dục xã hội chủ nghĩa có tính nhân dân, dân tộc, khoa học, hiện đại, lấy chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh làm nền tảng ghi trong văn bản nào sau đây?"
    ]

    start.addEventListener('click', function() {
        var t = 5;
        time.innerHTML = 5;
        var idTime = setInterval(function() {
            t = t - 1
            time.innerHTML = t;
            if(t === 0){
                clearInterval(idTime)
            }
        }, 1000)
    })

    // cái này là chuyển cau hỏi nó tự ẩn mấy cái hiện ra di
    nextQuest.addEventListener('click', function(event) {
        dem++;
        let numQuest = document.querySelector(".num-quest");
        let titleQuest = document.querySelector(".title-quest");
        let answerCurrent = document.querySelector('.answers.active');
        let answersShow = document.querySelectorAll('.answer.show');
        let answersSelected = document.querySelectorAll('.true-ans.select');
        
        // ẩn tất cả các đáp án đang hiển thị
        for( answer of answersShow ) {
            answer.classList.remove('show');
        }

        // ẩn đáp án khi sang câu hỏi mới
        for( answer of answersSelected) {
            answer.classList.remove('select');
        }

        answerCurrent.classList.remove('active'); // ẩn div đang chứa đáp án hiện tại 
        answerCurrent.nextElementSibling.classList.add('active'); // hiển thị div tiếp theo
        numQuest.innerHTML = dem+1; // tăng số thứ tự câu hỏi lên 1
        titleQuest.innerHTML = title[dem]; // gán nội dung câu hỏi mới theo thứ tự trong mảnh title
    });
    
    // cài đặt thời gian hiển thị đáp án
    showAnswer.addEventListener('click', function() {
        setTimeout(function(){
            for (answer of trueAnswers){
                answer.classList.add('select');
            }
        }, 2000);
        
    })

    for(button of nuts) {
        button.addEventListener('click', function (event) {
            var x = event.srcElement.nextElementSibling; // chọn phần tử tiếp theo của nút (phần tử p)
            x.classList.add('show'); // add class show vào phần tử p
        });
    }
})