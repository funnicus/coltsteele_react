
function choice(items){
    const c = Math.floor(Math.random()*items.length);
    return items[c];
}

function remove(items, item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            return [ ...items.slice(0, i), ...items.slice(i +1)];
        }
        else{
            return undefined;
        }
    }
}

export {choice, remove};