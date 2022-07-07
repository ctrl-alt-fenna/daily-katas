export function points(twoPoint: number, threePoint: number)
{
    if (twoPoint < 0 || threePoint < 0){
        throw new Error ('Cannot have negative points');
    }  
    return (twoPoint * 2 + threePoint * 3);
}