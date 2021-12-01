async function sleep()
{
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
}

async function main1()
{
    await sleep();
    await sleep();
    return 5;
}

async function main2()
{
    // var a = main1(); // returns promise, so don't need to put return new promise(); in main1()
    var a = await main1();
    console.log(a);
}

main2();