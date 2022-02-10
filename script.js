let bike = ["./images/bike/benelli.jpg", "./images/bike/bmw.jpg", "./images/bike/bullet.jpg",
    "./images/bike/ducati.jpg", "./images/bike/hero.jpg", "./images/bike/honda.jpg", "./images/bike/ktm.jpg",
    "./images/bike/ninja.jpg", "./images/bike/pulsar.jpg", "./images/bike/r15.jpg"];

let car = ["./images/car/alto.jpg", "./images/car/baleno.jpg", "./images/car/benz.jpg", "./images/car/bmw.jpg", "./images/car/golf.jpg",
    "./images/car/hundai.jpg", "./images/car/lambo.jpg", "./images/car/swift.jpg", "./images/car/tata.jpg", "./images/car/tesla.jpg",];

let choco = ["./images/chocolate/5star.jpg", "./images/chocolate/dairyMilk.jpg", "./images/chocolate/dove.jpg", "./images/chocolate/ferreroRocher.jpg",
    "./images/chocolate/fuse.jpg", "./images/chocolate/galaxy.jpg", "./images/chocolate/hersheys.jpg", "./images/chocolate/kitkat.jpg",
    "./images/chocolate/mars.jpg", "./images/chocolate/snickers.jpg",]


let hash1 = "";
let hash2 = ""
let x = 0;
let y = 0;

let num;
let category;

function getDetails(){
    num = document.querySelector('#num').value;
    category = document.querySelector('#category').value;
    console.log(num)
    console.log(category)

    document.querySelector('.selection').style.display = "none"
    displayImg1();
}

function displayImg1(){
    document.querySelector('.container').style.display = "block";
    if(category === 'bike'){
        var ele1 = document.querySelector('.showimages1')
        for(var i=0;i<num;i++){
            var newEle = document.createElement('img')
            newEle.src = bike[i];
            newEle.id = i+1;
            newEle.setAttribute('onclick', "getData1(this.id);")
            ele1.append(newEle)
        }
    }
    else if(category === 'car'){
        var ele1 = document.querySelector('.showimages1')
        for(var i=0;i<num;i++){
            var newEle = document.createElement('img')
            newEle.src = car[i];
            newEle.id = i+1;
            newEle.setAttribute('onclick', "getData1(this.id);")
            ele1.append(newEle)
        }
    }
    else{
        var ele1 = document.querySelector('.showimages1')
        for(var i=0;i<num;i++){
            var newEle = document.createElement('img')
            newEle.src = choco[i];
            newEle.id = i+1;
            newEle.setAttribute('onclick', "getData1(this.id);")
            ele1.append(newEle)
        }
    }
}

function displayImg2(){
    document.querySelector('.container2').style.display = "block";
    if(category === 'bike'){
        var ele1 = document.querySelector('.showimages2')
        for(var i=0;i<num;i++){
            var newEle = document.createElement('img')
            newEle.src = bike[i];
            newEle.id = i+1;
            newEle.setAttribute('onclick', "getData2(this.id);")
            ele1.append(newEle)
        }
    }
    else if(category === 'car'){
        var ele1 = document.querySelector('.showimages2')
        for(var i=0;i<num;i++){
            var newEle = document.createElement('img')
            newEle.src = car[i];
            newEle.id = i+1;
            newEle.setAttribute('onclick', "getData2(this.id);")
            ele1.append(newEle)
        }
    }
    else{
        var ele1 = document.querySelector('.showimages2')
        for(var i=0;i<num;i++){
            var newEle = document.createElement('img')
            newEle.src = choco[i];
            newEle.id = i+1;
            newEle.setAttribute('onclick', "getData2(this.id);")
            ele1.append(newEle)
        }
    }
}


function next() {
    document.querySelector('.container').style.display = "none"
    document.querySelector('.container2').style.display = "block"
    displayImg2();
}

function getData1(id) {
    if (x === num-1)
        document.querySelector('.next-btn').style.display = "block"

    if (x < num) {
        hash1 += id
        document.querySelector('#hashed').innerHTML = hash1
        x++;
    }

    
}

function check() {
    console.log(hash1)
    console.log(hash2)
    if (hash1 === hash2)
        alert("Correct")
    else
        alert("Wrong")
}

function getData2(id) {
    if (y === num-1)
        document.querySelector('.submit-btn').style.display = "block"
    if (y < num) {
        hash2 += id
        document.querySelector('#hashed2').innerHTML = hash2
        y++;
    }

    

}