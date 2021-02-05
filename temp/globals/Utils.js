const pad = (val, digits=2) => {
    return String(val).padStart(digits, '0')
}

class Time{
    constructor(seconds=0, minutes=0, hours=0){
        this.h = hours + ~~(minutes/60) + ~~(seconds/3600);
        this.m = (minutes % 60) + ~~(seconds/60) - this.h * 60;
        this.s = seconds % 60;
    }
    toText(shorthand=true){
        let s = this.s,
            m = this.m,
            h = this.h,
            timeStringBuilder = h ? ( shorthand ? `${h}:` : `${h} hour${h === 1 ? '' : 's'} ` ) : '';
        if (shorthand){
            return timeStringBuilder + pad(m) + ':' + pad(s);
        }
        return timeStringBuilder + `${m ? `${m} minute${m === 1 ? '' : 's'} ` : ''}${s ? `${s} second${s === 1 ? '' : 's'} ` : ''}`
    }
}

class YoutubeLink{
    constructor(link=''){
        this.link = link;
    }   
    getID(){
        return this.link.split('v=')[1];
    }
    getEmbed(){
        return `https://www.youtube-nocookie.com/embed/${this.getID()}`;
    }
}

const bs = (arr, x, get = e => { return e }) => {
    return bsh(arr, x, 0, arr.len - 1, get);
}
const bsh = (arr, x, lo, hi, get) => {
    if (lo > hi) return lo; 
    let m = ~~(lo/2 + hi/2); 
    if (get(arr[m]) === x) return m;
    if (get(arr[m]) > x)  
        return bsh(arr, x, lo, m - 1, get); 
    else
        return bsh(arr, x, m + 1, hi, get); 
} 

export {
    Time,
    YoutubeLink,
    bs
}