//6

// function printePostDeta1() {
//     const http1 = new XMLHttpRequest();
//     http1.onreadystatechange = function() {
//         if(this.readyState === 4 && this.status === 200){
//             document.getElementById("para").innerHTML = this.responseText;
//             const postDeta = JSON.parse(this.responseText);
//             console.log(postDeta);
//             for (const iterator of postDeta) {
//                 console.log(`${iterator.title}`);
//                 console.log(iterator.userId);
//             }

//         }
//     }
//     http1.open("GET","https://jsonplaceholder.typicode.com/posts");
//     http1.send();
// }

//7

// function  addToUl(){
//     const http2 = new XMLHttpRequest();
//         para3.innerHTML += `loading`;
//     http2.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             document.getElementById("para").innerHTML = this.responseText;
//             const postDeta2 = JSON.parse(this.responseText)
//             console.log(postDeta2);
//             for (const iterator of postDeta2) {
//                 para.innerHTML += `<ul><li>${iterator.title}</li></ul>`
//                 para.innerHTML += `<ul><li>${iterator.userId}</li></ul>`
//                     para3.innerHTML += " ";
//             }
//         }
//     }
//     http2.open("GET","https://jsonplaceholder.typicode.com/posts");
//     http2.send();
// }

//8

// function printeToConsoleDeta2() {
//     const http3 = new XMLHttpRequest();
//     http3.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             const todoDeta3 = JSON.parse(this.responseText);
//             console.log(todoDeta3);
//             for (const iterator of todoDeta3) {
//                 console.log(`${iterator.title} ${iterator.id} ${iterator.completed}`);
//             }
//         }
//     }
//     http3.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     http3.send();
// }

//9

function printeToConsoleDeta2(){
    para3.innerHTML += `loading`;
    const http4 = new XMLHttpRequest();
    http4.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const todoDeta4 = JSON.parse(this.responseText);
            console.log(todoDeta4);
            for (const iterator of todoDeta4) {
                para2.innerHTML += `<ul><li>${iterator.title}</li><li> ${iterator.id}</li><li>${iterator.completed}</li></ul>`
                para3.innerHTML += " ";
                
            }
        }
    }
    http4.open("GET", "https://jsonplaceholder.typicode.com/todos");
    http4.send();
}










