let currentIndex = 0;
const packages = document.getElementById('packages');
const totalPackages = document.querySelectorAll('.package').length;
const examples = [
       [
    { no: 1, name: 'Jumping Ball', price: 'Rp 50.000' },
    { no: 2, name: 'Color Switch', price: 'Rp 55.000' },
    { no: 3, name: 'Dodge the Blocks', price: 'Rp 60.000' },
    { no: 4, name: 'Endless Runner', price: 'Rp 65.000' },
    { no: 5, name: 'Memory Match', price: 'Rp 50.000' },
    { no: 6, name: 'Fruit Slice', price: 'Rp 70.000' },
    { no: 7, name: 'Bubble Pop', price: 'Rp 50.000' },
    { no: 8, name: 'Maze Escape', price: 'Rp 75.000' },
    { no: 9, name: 'Stack the Blocks', price: 'Rp 60.000' },
    { no: 10, name: 'Catch the Falling Stars', price: 'Rp 55.000' },
    { no: 11, name: 'Quick Tap', price: 'Rp 50.000' },
    { no: 12, name: 'Pong Classic', price: 'Rp 70.000' },
    { no: 13, name: 'Jump and Collect', price: 'Rp 65.000' },
    { no: 14, name: 'Sliding Puzzle', price: 'Rp 55.000' },
    { no: 15, name: 'Mini Golf', price: 'Rp 80.000' },
    { no: 16, name: 'Flappy Bird Clone', price: 'Rp 65.000' },
    { no: 17, name: 'Tap the Color', price: 'Rp 50.000' },
    { no: 18, name: 'Bouncing Ball', price: 'Rp 60.000' },
    { no: 19, name: 'Word Search', price: 'Rp 70.000' },
    { no: 20, name: 'Balloon Popper', price: 'Rp 50.000' }
],
        [
    { no: 1, name: 'Adventure Quest', price: 'Rp 249.000' },
    { no: 2, name: 'Mystery Mansion', price: 'Rp 279.000' },
    { no: 3, name: 'Space Explorer', price: 'Rp 299.000' },
    { no: 4, name: 'Fantasy Farm', price: 'Rp 269.000' },
    { no: 5, name: 'Zombie Survival', price: 'Rp 299.000' },
    { no: 6, name: 'Racing Rivals', price: 'Rp 289.000' },
    { no: 7, name: 'Puzzle Adventure', price: 'Rp 249.000' },
    { no: 8, name: 'Hero\'s Journey', price: 'Rp 319.000' },
    { no: 9, name: 'Hidden Objects', price: 'Rp 259.000' },
    { no: 10, name: 'Tower Defense', price: 'Rp 279.000' },
    { no: 11, name: 'Cooking Challenge', price: 'Rp 269.000' },
    { no: 12, name: 'Platformer Adventure', price: 'Rp 249.000' },
    { no: 13, name: 'Dungeon Crawler', price: 'Rp 299.000' },
    { no: 14, name: 'Retro Shooter', price: 'Rp 279.000' },
    { no: 15, name: 'City Builder', price: 'Rp 299.000' },
    { no: 16, name: 'RPG Quest', price: 'Rp 319.000' },
    { no: 17, name: 'Music Rhythm Game', price: 'Rp 259.000' },
    { no: 18, name: 'Pet Adventure', price: 'Rp 269.000' },
    { no: 19, name: 'Escape Room', price: 'Rp 289.000' },
    { no: 20, name: 'Ninja Run', price: 'Rp 249.000' }
],
        [
    { no: 1, name: 'Galactic Conquest', price: 'Rp 499.000' },
    { no: 2, name: 'Fantasy Battle Arena', price: 'Rp 549.000' },
    { no: 3, name: 'Mystical Forest', price: 'Rp 529.000' },
    { no: 4, name: 'Racing Legends', price: 'Rp 599.000' },
    { no: 5, name: 'Survival Island', price: 'Rp 549.000' },
    { no: 6, name: 'Zombie Apocalypse', price: 'Rp 599.000' },
    { no: 7, name: 'Space Mining Tycoon', price: 'Rp 529.000' },
    { no: 8, name: 'Heroic Quest', price: 'Rp 499.000' },
    { no: 9, name: 'Alien Invasion', price: 'Rp 579.000' },
    { no: 10, name: 'Mystery Detective', price: 'Rp 499.000' },
    { no: 11, name: 'Dungeon Escape', price: 'Rp 549.000' },
    { no: 12, name: 'Ninja Warrior', price: 'Rp 529.000' },
    { no: 13, name: 'Battle Royale Arena', price: 'Rp 599.000' },
    { no: 14, name: 'Cooking Mania', price: 'Rp 499.000' },
    { no: 15, name: 'Jungle Adventure', price: 'Rp 549.000' },
    { no: 16, name: 'Robot Revolution', price: 'Rp 579.000' },
    { no: 17, name: 'Magic School', price: 'Rp 529.000' },
    { no: 18, name: 'City Builder Tycoon', price: 'Rp 599.000' },
    { no: 19, name: 'Time Travel Adventure', price: 'Rp 549.000' },
    { no: 20, name: 'Underwater Quest', price: 'Rp 499.000' }
        ],
        [
    { no: 1, name: 'Epic Fantasy Saga (60 fitur)', price: 'Rp 1.200.000' },
    { no: 2, name: 'Cyberpunk City (50 fitur)', price: 'Rp 1.000.000' },
    { no: 3, name: 'Underwater Exploration (55 fitur)', price: 'Rp 1.100.000' },
    { no: 4, name: 'Galactic Warfare (65 fitur)', price: 'Rp 1.300.000' },
    { no: 5, name: 'Mystery Manor (48 fitur)', price: 'Rp 950.000' },
    { no: 6, name: 'Zombie Survival (60 fitur)', price: 'Rp 1.200.000' },
    { no: 7, name: 'Medieval Kingdom (57 fitur)', price: 'Rp 1.150.000' },
    { no: 8, name: 'Space Colony Builder (60 fitur)', price: 'Rp 1.200.000' },
    { no: 9, name: 'Ninja Chronicles (45 fitur)', price: 'Rp 900.000' },
    { no: 10, name: 'Cooking Master (42 fitur)', price: 'Rp 850.000' },
    { no: 11, name: 'Alien Invasion (55 fitur)', price: 'Rp 1.100.000' },
    { no: 12, name: 'Time Traveler (52 fitur)', price: 'Rp 1.050.000' },
    { no: 13, name: 'Fantasy Farm (48 fitur)', price: 'Rp 950.000' },
    { no: 14, name: 'Heroic Quest (50 fitur)', price: 'Rp 1.000.000' },
    { no: 15, name: 'Battle Royale (65 fitur)', price: 'Rp 1.300.000' },
    { no: 16, name: 'Puzzle Master (40 fitur)', price: 'Rp 800.000' },
    { no: 17, name: 'Jungle Adventure (50 fitur)', price: 'Rp 1.000.000' },
    { no: 18, name: 'Robot Revolution (60 fitur)', price: 'Rp 1.200.000' },
    { no: 19, name: 'Dream Builder (57 fitur)', price: 'Rp 1.150.000' },
    { no: 20, name: 'Mystical Creatures (55 fitur)', price: 'Rp 1.100.000' }
],
[
    { no: 1, name: 'Jumping Ball', price: 'Rp 120.000 (Perkiraan 8 Jam Waktu Belajar)' },
    { no: 2, name: 'Color Switch', price: 'Rp 135.000 (Perkiraan 9 Jam Waktu Belajar)' },
    { no: 3, name: 'Dodge The Blocks', price: 'Rp 165.000 (Perkiraan 11 Jam Waktu Belajar)' },
    { no: 4, name: 'Endless Runner', price: 'Rp 225.000 (Perkiraan 15 Jam Waktu Belajar)' },
    { no: 5, name: 'Memory Match', price: 'Rp 120.000 (Perkiraan 8 Jam Waktu Belajar)' },
    { no: 6, name: 'Adventure Quest', price: 'Rp 300.000 (Perkiraan 20 Jam Waktu Belajar)' },
    { no: 7, name: 'Mystery Mansion', price: 'Rp 330.000 (Perkiraan 22 Jam Waktu Belajar)' },
    { no: 8, name: 'Space Explorer', price: 'Rp 345.000 (Perkiraan 23 Jam Waktu Belajar)' },
    { no: 9, name: 'Fantasy Farm', price: 'Rp 285.000 (Perkiraan 19 Jam Waktu Belajar)' },
    { no: 10, name: 'Zombie Survival', price: 'Rp 360.000 (Perkiraan 24 Jam Waktu Belajar)' },
    { no: 11, name: 'Epic Fantasy Saga', price: 'Rp 510.000 (Perkiraan 34 Jam Waktu Belajar)' },
    { no: 12, name: 'Cyber Punk City', price: 'Rp 420.000 (Perkiraan 28 Jam Waktu Belajar)' },
    { no: 13, name: 'Underwater Exploration', price: 'Rp 450.000 (Perkiraan 30 Jam Waktu Belajar)' },
    { no: 14, name: 'Galatic Warfare', price: 'Rp 540.000 (Perkiraan 36 Jam Waktu Belajar)' },
    { no: 15, name: 'Mystery Manor', price: 'Rp 375.000 (Perkiraan 25 Jam Waktu Belajar)' },

  ]
    ];

document.getElementById('nextBtn').onclick = function() {
  currentIndex = (currentIndex + 1) % totalPackages;
  updateDisplay();
};

document.getElementById('prevBtn').onclick = function() {
  currentIndex = (currentIndex - 1 + totalPackages) % totalPackages;
  updateDisplay();
};

function updateDisplay() {
  packages.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function updateGameExamples() {
  const gameList = document.getElementById('gameList');
  gameList.innerHTML = ''; // Clear previous examples

  const currentExamples = examples[currentIndex];
  currentExamples.forEach(game => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${game.no}</td><td>${game.name}</td><td>${game.price}</td>`;
    gameList.appendChild(row);
  });
}

document.getElementById('exampleBtn').onclick = function() {
  updateGameExamples(); // Update examples when button is clicked
  document.getElementById('myModal').style.display = 'block'; // Show the modal
};

document.getElementById('closeModal').onclick = function() {
  document.getElementById('myModal').style.display = 'none'; // Close the modal
};

window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = 'none'; // Close the modal if clicked outside
  }
};