const textConfig = {
    text1: "He luu bạnnn!",
    text2: "Thật vui vì đã có cơ hội được quen biết bà. Ấn tượng đầu tiên khi tui xem fb của bà là uầyyyyy, biu ti phun quá, với cả thấy chữ melophile xong tui kiểu 🙀🫵. Sau những lần trò chuyện thì tui tự hứa với lòng là tui phải mời được bạn này đi xem show chung 😂. Thật sự thì khá là khó để tìm ra được 1 bạn nữ thích chơi guitar nên tui phải nắm bắt cơ hội này, tui nghĩ mình cũng có 1 điểm chung ấy chứ 😙. Tui luôn trân trọng những cuộc gặp gỡ với những người bạn mới mà mình có thể chia sẻ, học hỏi thêm nhiều điều. Nếu có cơ hội, tui nghĩ chúng ta có thể tìm hiểu nhau nhiều hơn, dành thêm thời gian để nói về những sở thích, cuộc sống và mối quan tâm chung. Hi vọng bà cũng thấy như z, biết đâu đây sẽ là khởi đầu của một cái gì đó đẹp tuyệt vời thì sao, hehe. Lần đầu tiên gửi mấy lời tâm sự như này cho một ai đó nên văn thơ tui hơi lủng củng với cả nhờ tí cố vấn từ chat GPT nhưng mà hi vọng bà đọc một cách mượt mà 😅. À, tui có một câu hỏi nho nhỏ dành cho bà, nhớ trả lời thật lòng nhaaaa <3<3<3  ",
    text3: "Cho tui cơ hội làm quen bạn nha ._.",
    text4: "Nếu bạn ko trả lời mà thoát ra tức là mặc định đồng ý đó nha :v",
    text5: "Ông mơ à :333",
    text6: "Ukii nè <3",
    text7: "Vậy cho tui biết lý do bà đồng ý đi :vvvv",
    text8: "Gửi ở đây nèee <3",
    text9: "Vì tui thấy ông đẹp try vlllll",
    text10: "Tui biết mà ^^ Cảm ơn bà nhìuuuuu <3<3<3",
    text11:
        "Vậy thì hôm nào mình đi chơi chung nhaaa :vv Còn giờ thì chờ gì nữa mà ko inbox cho tui nếu như bà đã mở web này lên😚",
    text12: "Okii lunn <3",
};

$(document).ready(function () {
   
    setTimeout(function () {
        firstQuestion();
        $(".spinner").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({
            overflow: "visible",
        });
    }, 600);

    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);

    function firstQuestion() {
        $(".content").hide();
        Swal.fire({
            title: textConfig.text1,
            html: '<p id="animatedText2"></p>', // Tạo phần tử HTML cho text2
            imageUrl: "img/hehe.jpg",
            imageWidth: 400,
            imageHeight: 300,
                background: '#fff url("img/iput.jpg")',
            imageAlt: "Custom image",
        }).then(function () {
            $(".content").show(200);
        });
        var audio = new Audio("sound/bg-music.mp3");
        audio.play();
        // Hiển thị từng chữ của text2
        showTextOneByOne(textConfig.text2, "#animatedText2", 60);
    }

    // Hàm hiển thị từng chữ
    function showTextOneByOne(text, element, interval) {
        let index = 0;
        let textLength = text.length;
        let displayText = "";

        let timer = setInterval(() => {
            if (index < textLength) {
                displayText += text[index];
                $(element).html(displayText); // Cập nhật nội dung từng ký tự
                index++;
            } else {
                clearInterval(timer); // Dừng khi chạy hết các ký tự
            }
        }, interval);
    }

    // switch button 
    function switchButton() {
        var audio = new Audio("sound/bg-music.mp3");
        audio.loop = true; 
        audio.play();
        var leftNo = $("#no").css("left");
        var topNO = $("#no").css("top");
        var leftY = $("#yes").css("left");
        var topY = $("#yes").css("top");
        $("#no").css("left", leftY);
        $("#no").css("top", topY);
        $("#yes").css("left", leftNo);
        $("#yes").css("top", topNO);
    }

    // move random button position
    function moveButton() {
        var audio = new Audio("sound/nope.mp3");
        audio.play();
        if (screen.width <= 600) {
            var x = Math.random() * 300;
            var y = Math.random() * 500;
        } else {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
        }
        var left = x + "px";
        var top = y + "px";
        $("#no").css("left", left);
        $("#no").css("top", top);
    }

    var n = 0;
    $("#no").mousemove(function () {
        if (n < 1) switchButton();
        if (n > 1) moveButton();
        n++;
    });
    $("#no").click(() => {
        if (screen.width >= 900) switchButton();
    });

    // generate text in input
    function textGenerate() {
        var n = "";
        var text = " " + textConfig.text9;
        var a = Array.from(text);
        var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
        var count = textVal.length;
        if (count > 0) {
            for (let i = 1; i <= count; i++) {
                n = n + a[i];
                if (i == text.length + 1) {
                    $("#txtReason").val("");
                    n = "";
                    break;
                }
            }
        }
        $("#txtReason").val(n);
    }

    // show popup
    $("#yes").click(function () {
        var audio = new Audio("sound/tada.mp3");
        audio.play();
        Swal.fire({
            title: textConfig.text7,
            html: true,
            width: 900,
            padding: "3em",
            html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
            background: '#fff url("img/iput-bg.jpg")',
            backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/shy.gif")
                    center 43px / 300px 300px
                    no-repeat
                  `,
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonColor: "#fe8a71",
            cancelButtonColor: "#f6cd61",
            confirmButtonText: textConfig.text8,
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    width: 900,
                    confirmButtonText: textConfig.text12,   
                    background: '#fff url("img/iput-bg.jpg")',
                    title: textConfig.text10,
                    text: textConfig.text11,
                    confirmButtonColor: "#83d0c9",
                    onClose: () => {
                        window.location = "https://www.messenger.com/t/100034528366866/";
                    },
                });
            }
        });

        $("#txtReason").focus(function () {
            var handleWriteText = setInterval(function () {
                textGenerate();
            }, 10);
            $("#txtReason").blur(function () {
                clearInterval(handleWriteText);
            });
        });
    });
});
