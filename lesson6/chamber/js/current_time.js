//menu hamburger

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


// banner 




// date

// select the elements to manipulate (output to)
// const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector(".dateUK"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
const dayOfWeek = fulldateUK.split(', ');

if (dayOfWeek[0] == 'Monday' || dayOfWeek[0] == 'Tuesday') {
  const headerSection = document.querySelector('.header-section');
  const banner = document.createElement('div');
  banner.classList.add('banner');
  banner.innerHTML = "<em>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</em>";
  headerSection.append(banner);
  
}

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



// last update
let modify = document.getElementById("LastMod1");
modify.textContent = `Last Modification: ${document.lastModified}`;

