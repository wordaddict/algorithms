var minMeetingRooms = function(intervals) {
    if (!intervals || !intervals.length) return 0;
   
   intervals.sort((a,b) => a[0]-b[0]);
   let rooms = 0;
   
   while (intervals.length) {
       let remainingMeetings = [];
       let prevEnd = intervals.shift()[1];
       rooms++;
       
       for (let [start,end] of intervals) {
           // If meeting has conflict with previous meeting,
           // then add it to another conference room
           if (prevEnd > start) {
               remainingMeetings.push([start, end]);
           } else {
               prevEnd = end;
           }
       }
       
       intervals = remainingMeetings;
   }
   
   return rooms;
};