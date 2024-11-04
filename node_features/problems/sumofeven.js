

function sumofeven(nums)
{
    let sum = 0;

    nums.map((val,i)=>{
        if(val % 2 == 0)
        {
            sum += val;
        }
    })
    return sum;
}

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(sumofeven(nums));