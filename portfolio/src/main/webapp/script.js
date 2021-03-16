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

  if (projectContainer.style.display === 'none') {
    projectContainer.style.display = 'block';
  } else {
    projectContainer.style.display = 'none';
  }

}

// Display pop up form

function showForm(){
    const formContainer = document.getElementById('contact-form-container');
    const right = document.getElementById('right-content');


    if (formContainer.style.display === 'none'){
        formContainer.style.display = 'block';
    }else{
        formContainer.style.display = 'none';
    }

    if(right.style.display === 'none'){
        right.style.display = 'block';
    }else{
        right.style.display = 'none';
    }    

    
}


// Fetch hello message from servlet

async function sayHello(){
    const response = await fetch('/hello');
    const text = await response.text();

    const greeting_container = document.getElementById('greeting-container');
    greeting_container.innerText = text;
}

// Fetch project list from servlet
async function loadProjects(){
  const projectList = document.getElementById('project-list');
  const response = await fetch('/projects');
  const projects = await response.json();

  for(var i =0; i<projects.length; i++){
      projectList.innerHTML += "<li> <a target= \"_blank\" href=\""+projects[i].url+"\">"+projects[i].name;
  }
}

function requestTranslation() {
        const text = document.querySelectorAll('.txt');
        const languageCode = document.getElementById('language').value;
        console.log(text);
        

        
        for(var i = 0; i<text.length; i++){
            console.log(text[i].innerText);
            console.log(languageCode);
            const responseContainer = text[i];
            const params = new URLSearchParams();
            params.append('text', text[i].innerText);
            params.append('languageCode', languageCode);
            fetch('/translate', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
            console.log("translation ", translatedMessage)
            responseContainer.innerText = translatedMessage;
        });
        }
        
        
        
      }