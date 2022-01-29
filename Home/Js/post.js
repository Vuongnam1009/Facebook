var posts = [
    {
        id      : 1,
        user_id : 1,
        time    : new Date('2022-01-24T08:25:00'),
        status  : 'Tết đến đầu ngõ rồi mà vẫn chưa được về nhà 😊😊😊',
    },
    {
        id      : 2,
        user_id : 4,
        time    : new Date('2022-01-28T06:25:00'),
        status  : 'Nhất các em 200x chứ thời 9x chả đc bao giờ 😔😔',
    }
]
var frends = [
    {
        id    : 1,
        name  : 'Chang Ốc',
        avt   : './img/avt/avt-1.jpg'
    },
    {
        id    : 2,
        name  :'Nguyễn Du',
        avt   :'./img/avt/avt-2.jpg'
    },
    {
        id    : 3,
        name  :'Nguyễn Đức',
        avt   :'./img/avt/avt-3.jpg'
    },
    {
        id    : 4,
        name  :'An Hoàng',
        avt   :'./img/avt/avt-4.jpg'
    },
    {
        id    : 5,
        name  :'Nguyễn Văn Cảnh',
        avt   :'./img/avt/avt-5.jpg'
    }
]
// var userId = posts.map(function(post){
//     return post.user_id
// })

// getDay
function getDay(date){
    var dayName = ''
    var currentDay = date.getDay()
    switch (currentDay){
        case 0:
            dayName = 'Chủ nhật'
            break;
        case 1:
            dayName = 'Thứ hai'
            break;
        case 2:
            dayName = 'Thứ ba'
            break;
        case 3:
            dayName = 'Thứ tư'
            break;
        case 4:
            dayName = 'Thứ năm'
            break;
        case 5:
            dayName = 'Thứ sáu'
            break;
        case 6:
            dayName = 'Thứ bảy'
            break;
    }
   return dayName
}
var html = ''
posts.forEach((post) => {
    var user = frends.find((frend) =>{
        return frend.id === post.user_id
    })
    var day = getDay(post.time)
    html += `<div class="content__post">
                <div class="post__user">
                    <div class="">
                        <div class="avt--hover"></div>
                        <img src="${user.avt}" alt="" class="avt avt--l avt--circle">
                    </div>
                    <div class="post__user-info">
                        <p class="post__user-name">
                        ${user.name}
                        </p>
                        <div class="post__user-time">1 ngày
                            <p class="post__user-subtime">${day}, ${post.time.getDate()} Tháng ${post.time.getMonth()+1}, ${post.time.getFullYear()} lúc  ${post.time.getHours()}:${post.time.getMinutes()}</p>
                        </div>
                    </div>
                    <div class="post__user-btn">
                        <p class="post__user-btn_text">...</p>
                    </div>
                </div>
                <div class="post__status">
                    ${post.status}
                </div>
                <div class="post__describe">
                </div>
            </div>`
})
document.querySelector('.content__posts').innerHTML = html

