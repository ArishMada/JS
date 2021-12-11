const climbingStairs = function(cost) {
    for (let i = cost.length - 3; ~i; i--)
        cost[i] += Math.min(cost[i+1], cost[i+2])
    console.log(Math.min(cost[0], cost[1]));
};

climbingStairs([0, 0, 0])