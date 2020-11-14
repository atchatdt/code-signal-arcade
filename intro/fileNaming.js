// https://app.codesignal.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC/
function fileNaming(names) {
    let n = [];
    
    for(let i=0; i < names.length; i++) {
        let max = 0;
        let m = [];
        let f = n.filter(j=>{
            let reg = new RegExp('^(?:' + names[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + '(?:\\((\\d+)\\))?)$');
            if(reg.test(j)) {
                if(reg.exec(j)[1] ==undefined )
                    m[0] =true;
                else {
                    m[Number(reg.exec(j)[1])] = true;
                }
            }
            return reg.test(j);
        });
        for(let k = 0; k < m.length; k++) {
            if(!m[k])
                break;
        }
        if(f.length){
            names[i] = names[i]+ (k ? ('('+ (k)+')') : '');
        }
        n.push(names[i])
    }
    return n;
    
}


var fileNaming = names => {
    const used = {};
    return names.map(name => {
        let newName = name;
        while (used[newName]) {
            newName = `${name}(${used[name]++})`;
        }
        used[newName] = 1;
        return newName;
    });
};


let arr = ["a(1)", 
 "a(6)", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a", 
 "a"]
console.log(fileNaming(arr))