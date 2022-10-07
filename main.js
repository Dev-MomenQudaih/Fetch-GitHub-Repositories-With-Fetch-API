// dom vars
let inputFeild = document.querySelector(".get-repos input");
let getReposBtn = document.querySelector(".get-btn");
let showReposData = document.querySelector(".show-data");

getReposBtn.onclick = () => getMyRepos();
// get Repos Function
function getMyRepos() {
  if (inputFeild.value == "") {
    // if the user pass an empty value.
    showReposData.innerHTML = `<span>plz Enter a valid Username</span>`;
  } else {
    fetch(`https://api.github.com/users/${inputFeild.value}/repos`)
      .then((myResponse) => myResponse.json())
      .then((myRepos) => {
        // empty showReposData container.
        showReposData.innerHTML = "";

        // here we will loop on the responses(repos).
        myRepos.forEach((myRepo) => {
          showReposData.innerHTML += `<div class="repo-cont"><div class="repoName">${myRepo.name}</div><span>${myRepo.stargazers_count} stars</span><a target="_blank" href="https://github.com/${inputFeild.value}/${myRepo.name}">Visit</a></div>`;
        });
      });
  }
}
