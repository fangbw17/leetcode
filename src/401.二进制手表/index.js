var readBinaryWatch = function(turnedOn) {
    const res = []
    for (let hour = 0; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            const vaildHourCount = hour.toString(2).split('').filter(v => v === '1').length
            const vaildMinuteCount = minute.toString(2).split('').filter(v => v === '1').length
            if (vaildHourCount + vaildMinuteCount === turnedOn) {
                res.push(hour + ":" + (minute < 10 ? `0${minute}` : minute)) 
            }
            console.log(vaildHourCount);
        }        
    }
    return res
}

console.log(readBinaryWatch(4));