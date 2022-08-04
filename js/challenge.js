const minusbtn = document.getElementById('minus')
const plusbtn = document.getElementById('plus')
const heartbtn = document.getElementById('heart')
const counter = document.querySelector('h1#counter')
const pausebtn = document.getElementById('pause')
const theLikeBox = document.getElementsByClassName('likes')
const submitButton = document.querySelector('button#submit')
const commentBox = document.getElementById('comment-form')
const fieldBox = document.getElementById('comment-input')
const box = document.querySelector('div#list.comments')


let count = 0;
let likes = 0;
const user = []
const commentsArray = [];
const likeList = []
const likeListCount = []

let bTimerOn = true;

const currentTime = setInterval(function() {
    if(bTimerOn) {
        count++;
        user.push(count)
        
        counter.innerHTML = `${count}`
    }
}, 1000)
function getComments()  {
    let list = '<ul>';
    commentsArray.forEach(comment => {
        list += `<li>${comment}</li>`;
    })
    list += '</ul>';
    box.innerHTML = list;
}
pausebtn.addEventListener('click', function() {
    if(bTimerOn) {
        bTimerOn = false;
        console.log("timer off")
        pausebtn.innerHTML = 'resume'
    } else {
        bTimerOn = true;
        console.log("timer on")
        pausebtn.innerHTML = 'pause'
    }
});
plusbtn.addEventListener('click', function(){
    if(bTimerOn){
        count++;
        user.push(count)
        counter.innerHTML = `${count}`    
    }
})
minusbtn.addEventListener('click', function(){
    if(bTimerOn) {
        count--;
        user.pop(count)
        counter.innerHTML = `${count}`
    }
})
heartbtn.addEventListener('click', function() {
    let index = count - 1;
    likes++;
    likeListCount[index] = likes
    if(likeList[index] === undefined) {
        let list = document.createElement('li')
        likes = 0;
        likeList.push(`${user[index]} has been liked ${likeListCount[index]}`)
    }
    for(i=0;i<likeList.length; i++) {
        console.log(likeList[i])
    }
})
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const content = fieldBox.value;
    if(content.length > 0) {
        commentsArray.push(content);
        getComments();
        fieldBox.value = '';
    }
})