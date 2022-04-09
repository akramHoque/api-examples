// const loadBuddy = () => {
//       fetch('https://randomuser.me/api/?results=5')
//       .then(res => res.json())
//       .then(data => displayBuddy(data))
// }

// const displayBuddy = buddys => {
//       //  const buddyfriends = buddys;
//        const buddies = buddys.results;
//        console.log(buddies)
//       const buddyContainer = document.getElementById('buddies');
      
//       for(const buddy of buddies){
//             console.log(buddy.name.first, buddy.name.last);
//            const p = document.createElement('p');
//             p.innerText = `Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} , email:  ${buddy.email}` ;
//             buddyContainer.appendChild(p);

//       }
// }


const loadBuddies = () =>{
      fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => displayBuddies(data))
}

const displayBuddies = buddys =>{
      
      const buddsCollection = buddys.results;
      console.log(buddsCollection);
      const buddyContainer = document.getElementById('buddies')

      for(const buddy of buddsCollection){
         const p =  document.createElement('p');
         p.innerText = ` Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email : ${buddy.email}`

        buddyContainer.appendChild(p);
      }
      
}