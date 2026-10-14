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

//Getting Latest repository
async function latestRepo(username){
    try{
    if(!navigator.onLine){
        document.querySelector('#notFound').textContent = "No Internet.Please Check your connection";
        return;
    }
    const re = document.querySelector('#repoList');

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);

    if(!response.ok){
        return;
    }
     
    const repos = await response.json();    
   
    
    if(repos.length == 0){
        re.textContent = 'No public repo';
        return;
    }
    re.textContent = 'Latest Five Repo are';
    repos.forEach(repo => {
        const li = document.createElement('li');

        li.append(`Repo Name = ${repo.name} , Repo Language = ${repo.language || 'No Language'}`);

        const a = document.createElement('a');
        a.href = repo.html_url;
        a.target = '_blank';
        a.textContent = `${repo.name}`;

        li.appendChild(a);
        re.appendChild(li);
        
    });
}catch(error){
      document.querySelector('#notFound').textContent = "Unable to load the user.Please check the internet";
    console.error(error);
}
   


}

if(username){
    userProfile(username);
    latestRepo(username);
}
