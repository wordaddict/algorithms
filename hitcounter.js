var HitCounter = function() {
    this.times = new Array(300).fill(0);
    this.counter =  new Array(300).fill(0);
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    var times = this.times;
    var counter = this.counter;
    var idx = timestamp % 300;
   if(times[idx] != timestamp){
       times[idx] = timestamp;
       counter[idx] = 1;
   }
    else{
        counter[idx]++;   
    }
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    var times = this.times;
    var counter = this.counter;
    
    var total = 0;
        for (var i = 0; i < 300; i++) {
            if (timestamp - times[i] < 300) {
                total += counter[i];
            }
        }
        return total;
};