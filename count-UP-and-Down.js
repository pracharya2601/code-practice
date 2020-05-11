//

function countUpAndDown(n) {
    console.log("Goingup!");
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("Going Down");
    for(let j = n-1; j >= 0; j--) {
        console.log(j);
    }
    console.log("All the way dowwn");
}

countUpAndDown(10);