const users = { 1: { id: 1, name: "Asha" }, 2: { id: 2, name: "Ravi" } };
const posts = { 1: ["Hello JS", "Closures are cool"], 2: ["My first post"] };
const wait = ms => new Promise(r => setTimeout(r, ms));

async function getUser(id) {
  await wait(500);
  if (!users[id]) throw new Error(`User ${id} not found`);
  return users[id];
}
async function getPosts(userId) {
  await wait(700);
  return posts[userId] ?? [];
}



//With The help of .then() and .catch()
function showUserThen(id){
    return getUser(id)
    .then((user) => {
        return getPosts(user.id).then((post) => {console.log(user.name + " " +' has'+" " +  post.length +" " +' post' );});
    }).catch((err) => console.log("Error:" , err.message));
}
// showUser(1);
// showUser(99);

//With the help of asyn/await and try/catch
async function showUser(id){
try{
   let userId = await getUser(id);
   let userPost = await getPosts(id);
   console.log(userId.name + " " +' has'+" " +  userPost.length +" " +' post' );
}catch(error){
    console.log("Error:", error.message);
}
}


showUser(1);
showUser(99);


//loadAllSequential([1, 2])
async function loadAllSequential(ids){
     console.time("Sequential:")
    const result = [];

    for(const id of ids){
        let userId = await getUser(id);
        let userPost = await getPosts(userId.id);
        result.push({userName : userId.name , userPost: userPost.length});
    }
    console.timeEnd("Sequential:")
    return result;

    
}

loadAllSequential([1, 2]).then((r) => console.log(r));

//loadAllParallel
async function loadAllParallel(ids){
console.time("Parallel:")
    const result =  await Promise.all(

    ids.map(async(id) =>{
        let userId = await getUser(id);
        let userPost = await getPosts(userId.id);
        return {userName : userId.name , userPost: userPost.length};
    }));
    console.timeEnd("Parallel:")
    return result;
}

loadAllParallel([1,2]).then((r) => console.log(r));

//load Safe

async function loadSafe(ids){
    const result =  await Promise.allSettled(

    ids.map(async(id) =>{
        let userId = await getUser(id);
        let userPost = await getPosts(userId.id);
        return {userName : userId.name , userPost: userPost.length};
    }));
    return result;

}

loadSafe([1,99,2]).then((r) => console.log(r));
