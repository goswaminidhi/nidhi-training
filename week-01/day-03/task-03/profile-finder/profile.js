const params = new URLSearchParams(window.location.search);
const username = params.get("user");


//Getting user Details
async function userProfile(username) {
    try{
    if(!navigator.onLine){
        document.querySelector('#notFound').textContent = "No Internet.Please Check your connection";
        return;
    }
    const user = await fetch(`https://api.github.com/users/${username}`)

    if(!user.ok){
        document.querySelector('#notFound').textContent = `User ${username} not found`;
        return ;
    }


    const response = await user.json();

    document.querySelector('#avatar').src = response.avatar_url;

    document.querySelector('#name').textContent = `Name: ${response.name || response.login}`;

    document.querySelector('#bio').textContent = `Bio: ${response.bio}`;

    document.querySelector('#followers').textContent = `Followers: ${response.followers}`;

    document.querySelector('#publicRepo').textContent = `Public Repo: ${response.public_repos}`;

    const link = document.querySelector('#link');
    link.href = response.html_url;
    link.textContent = 'github profile link';
}catch(error){

        document.querySelector('#notFound').textContent = "Unable to load the user.Please check the internet";
        console.error(error);
        
    } 
}

 let repos = [];

//Getting Latest repository
async function latestRepo(username){
    try{
       
        if(!navigator.onLine){
            document.querySelector('#notFound').textContent = "No Internet.Please Check your connection";
            return;
        }

        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);

        if(!response.ok){
            return;
        }
        
        repos = await response.json();    
   
    
        //If there is no public repository
        if(repos.length == 0){
            re.textContent = 'No public repo';
            return;
        }

        displayRepository(repos);
    }catch(error){
            document.querySelector('#notFound').textContent = "Unable to load the user.Please check the internet";
            console.error(error);
    }   
}



//Displaying the Latest 5
function displayRepository(repository){
    
    const re = document.querySelector('#repoList');
    re.innerHTML ='';

    if(repository.length === 0 ){
        re.textContent = `No Matching repository found with name ${repository}`;
        return;
    }

    repository.forEach(repo => {
         const li = document.createElement('li');

        li.textContent = (`Repo Name = ${repo.name} , Repo Language = ${repo.language || 'No Language'}`);

         const a = document.createElement('a');
        
        a.href = repo.html_url;
        a.target = '_blank';
        a.textContent = `${repo.name}`;

        li.appendChild(a);
        re.appendChild(li);
    })
}

// Filter repositories as the user types
repoSearch.addEventListener('input', function () {
    const searchText = repoSearch.value.toLowerCase();

    const filteredRepos = repos.filter(repo =>
        repo.name.toLowerCase().includes(searchText)
    );

    displayRepository(filteredRepos);
});


//Selected Option from dropBox
const dropBox = document.querySelector('#sortRepo');
dropBox.addEventListener('change',function(){
    const selectedOption = dropBox.value;

    let sortedRepo = [...repos];

    if(selectedOption === 'updted'){
        sortedRepo.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at));
    }else if(selectedOption === 'stars'){
        sortedRepo.sort((a,b) =>    b.stargazers_count - a.stargazers_count);
    }else if(selectedOption === 'name'){
        sortedRepo.sort((a,b) => a.name.localeCompare(b.name));
    }

    displayRepository(sortedRepo);
})


if(username){
    userProfile(username);
    latestRepo(username);
}
