// photo slide
const slider = document.querySelector('.slider');
let index = 0;

function slideImages() {
  const totalImages = document.querySelectorAll('.slider img').length;
  index = (index + 1) % totalImages; // Loop back to the first image
  slider.style.transform = `translateX(-${index * 100}%)`; // Slide horizontally
}

setInterval(slideImages, 3000); // Change image every 3 seconds


// array for additional members
const newTeamMembers = [
    {
        name: "David Ali",
        role: "Data Scientist",
        description: "Passionate about data visualization and AI. Proficient in Microsoft PowerBI.",
        image: "images/david.jpg",
    },
    {
        name: "Hadassah Nwauba",
        role: "Product Manager",
        description: "Specializes in managing software and products development processes.",
        image: "images/hadassah.jpg",
    },
    {
        name: "Steven Adeoye",
        role: "UI/UX designer",
        description: "Specializes in creating user-centered designs.",
        image: "images/steven.jpg",
    },];

// add event listener to "load more button"
document.getElementById("load-more-btn").addEventListener("click", function () {
    const teamContanier = document.getElementById("team-section");

    //add team members dynamically
    newTeamMembers.forEach((member) => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member"); //assigns class for every team member

        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}"/>
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <a></a>
        `;

        teamContanier.appendChild(memberDiv);
    });

    //hide the button after displaying
    this.style.display = "none";
});
