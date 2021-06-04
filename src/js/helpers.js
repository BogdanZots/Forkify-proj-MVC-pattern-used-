const timeout = function(s){
    return new Promise(function(_,reject){
        setTimeout(function() {
        reject(new Error('request took too long , try again'))
        },s*1000);
    })
}

export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(url),timeout(3)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}(${res.status})`);
        return data
    } catch (err) {
        console.log(err)
    }
}