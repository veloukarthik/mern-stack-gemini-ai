function findPairs(num)
{
    let numlen = num[0];
    let pairs = [];
    for(let i=1;i<numlen;i++)
    {
        for(let j=numlen;j>=i;j--)
        {
            
            if(num[i]+num[j] == 24)
            {
                pairs.push([i-1,j-1]);
            }
        }
    }
    return pairs;
}
let num = [7,23,48,16,8,8,74,27];
console.log(findPairs(num));