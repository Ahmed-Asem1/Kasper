let ulShuffle = document.querySelectorAll(".shuffle ul li");

ulShuffle.forEach((li)=>{
    li.addEventListener("click", ()=>{
        ulShuffle.forEach((li)=> li.classList.remove("active"));
        li.classList.add("active");
    })
})



// Start Header Section
// End Header Section

// Start Section Video
let aSeeMore = document.querySelector(".see-more");
aSeeMore.addEventListener("click", ()=>{
    location.href = "https://www.imdb.com/title/tt13623148/";
})
// End Section Video


// Start Status Section
// let spanCoffeeNumber = document.querySelector(".coffee-number");
// spanCoffeeNumber.innerText = Math.floor(Math.random() * 10000)

// let spanCompletedProject = document.querySelector(".completed-project");
// spanCompletedProject.innerText = Math.floor(Math.random() * 100);

// let spanMailSent = document.querySelector(".mail-sent");
// spanMailSent.innerText = Math.floor(Math.random() * 1000);

// let spanAwardsReceived = document.querySelector(".awards-received");
// spanAwardsReceived.innerText = Math.floor(Math.random() * 11)
// End Status Section


// Start Quote Section 
let aKhaledHosseini = document.querySelector(".writer");
aKhaledHosseini.addEventListener("click", ()=>{
    location.href = "https://khaledhosseini.com/";
}) 
// End Quote Section 
