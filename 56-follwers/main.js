let followers = document.querySelectorAll('.followers');

followers.forEach(follower => {
    follower.innerHTML = "0";

    const followerCountUpdate = () =>{
        const target = +follower.getAttribute('data-set');
        const count = +follower.innerHTML;
 
        increment = target / 500;
        if(count < target){
            follower.innerHTML = `${Math.ceil(count + increment)}`;
            setTimeout(followerCountUpdate, 1);
        }else{
            follower.innerHTML = target;
        }
    }
    followerCountUpdate()
});
