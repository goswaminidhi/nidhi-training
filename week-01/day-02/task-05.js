
async function githubSummary(username){
    
        const response1 = await fetch(`https://api.github.com/users/${username}`);
        const response2 = await fetch(`https://api.github.com/users/${username}/repos`);

        if(!response1.ok){
            return console.log(`HTTP Error: ${response1.status}`);
        }

        const result1 = await response1.json();
        console.log(`${username} Followers:`+ result1.followers + "\n" + `${username} public repos:`+result1.public_repos ) ;
        
        console.log("Three most updated repos are");
        
        const result2 = await response2.json();

        const mostThreeUpdated = result2
                                .sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at))
                               .slice(0,3);

        console.log(mostThreeUpdated);
    }



githubSummary("goswaminidhi");
// githubSummary("torvalds");
// githubSummary("this-user-does-not-exist-12345");
