$(document).ready(
    function(){
        $("vietnam").waypoint(
            function(direction){
                if(direction == "down"){
                    $("nav").addClass("sticky");
                }else {
                    $("nav").removeClass("sticky");
                }
            },{
                offset: "600px"
            }
        )
    }   
)

// Scroll
$('a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    event.preventDefault();
}); 

// Lấy số lượt truy cập từ localStorage
let visitCount = localStorage.getItem('visitCount');

// Nếu chưa có số lượt truy cập, khởi tạo nó
if (visitCount === null) {
    visitCount = 0;
}

// Tăng số lượt truy cập lên 1
visitCount++;

// Lưu số lượt truy cập mới vào localStorage
localStorage.setItem('visitCount', visitCount);

// Hiển thị số lượt truy cập trên trang web
document.getElementById('visit-count').textContent = visitCount;
