// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const weeknd_albums =
      ['After Hours', 'Beauty Behind the Madness', 'My dear melancholy', 'Starboy', 'Trilogy', 'Kissland'];

  // Pick a random greeting.
  const album = weeknd_albums[Math.floor(Math.random() * weeknd_albums.length)];

  // Add it to the page.
  const albumContainer = document.getElementById('album-container');
  albumContainer.innerText = album;
}

// Display project list

function showProjects(){
   const projectContainer = document.getElementById('project-container');
   
  if (projectContainer.style.display === "none") {
    projectContainer.style.display = "block";
  } else {
    projectContainer.style.display = "none";
  }

}

async function sayHello(){
    const response = await fetch("/hello");
    const text = await response.text();

    const greeting_container = document.getElementById('greeting-container');
    greeting_container.innerText = text;
}