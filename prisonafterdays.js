const prisonAfterNDays = (cells) => {
  
    const
    intCellCount = cells.length,  // How many cells we're dealing with.
    arrProgressionTracker = [],   // The array to store what the progressions are from one day to the next.
    stringToArrayObject = {};     // A hash map since the arrProgressionTracker contains strings representing the cells 
                                  // array of integers.  This will only be used for the return value.

  let arrCurDay = cells;          // The cells as they appear "today".

  // console.log(`Day 0: ${JSON.stringify(cells)}`); // Uncomment this if you want to print out the first day.

  for(let i = 0; i < N; i++){     // We start by manually calculating the next day's cells

    // Here we'll apply the rules to manually figure out the next day's cell pattern.

    let arrNextDay = [];                          // This is the next day
    arrNextDay[0] = 0;                            // The rules tell us the first and last cells will always be 0 after
    arrNextDay[intCellCount - 1] = 0;             // the first day, so we set those here

    for (let j = 1; j < intCellCount - 1; j++) {  // Now let's go through each cell, from the second cell to the second-
                                                  // to-last cell calculating what its value will be the next day.
      const
        intLeftCellVal = arrCurDay[j - 1],        // Here's the value of the cell to the left of our current cell today
        intRightCellVal = arrCurDay[j + 1];       // ... and the value of the cell to the right of our current cell today

      if((intLeftCellVal && intRightCellVal) ||   // If both cells are 1 or...
        (!intLeftCellVal && !intRightCellVal)){   // both cells are 0
        arrNextDay[j] = 1;                        // then the current cell will be 1 tomorrow
      }else{
        arrNextDay[j] = 0;                        // Otherwise it will be 0
      }
    }

    // Now let's add the next day to our array that tracks the pattern progress from one day to the next, so we don't
    // have to manually do all the work we just did again if / when the pattern comes up again.

    const strNextDay = generateDayString(arrNextDay); // I convert the pattern to a string so it's easier to work with in
                                                      // the array

    if(arrProgressionTracker.includes(strNextDay)) {  // Check if the next day's pattern is already in our progression
                                                      // tracker.  If it is, then we have a loop, and we're ready to
                                                      // project the final cell pattern rather than calculating it.

      // console.log(`Loop identified`); // Uncomment this to see when the loop has been identified

      const strFinalCellPattern = getResultFromLoop(arrProgressionTracker, N, i);  // See notes in the function below.
      return stringToArrayObject[strFinalCellPattern] // Leetcode wants the array returned, not the string it's been
                                                      // converted to.  So we use our conversion object to look up the
                                                      // array based on the string.

    }

    // If we get to the point, that means we didn't find the next day's pattern in our progression tracker, so we will
    // add the new pattern to the tracker.

    arrProgressionTracker.push(strNextDay);       // Here's where we add the string for the pattern to the tracker
    stringToArrayObject[strNextDay] = arrNextDay; // We also add the string and array to the conversion object so we can
                                                  // return the actual array when the time comes.
    arrCurDay = arrNextDay;                       // And now we move on to calculating the pattern for the day after the
                                                  // one we just calculated

    // You can uncomment this to see the patterns as they're calculated.
    // console.log(`Day ${i + 1}: ${JSON.stringify(arrCurDay)}`);

  }

  return arrCurDay;   // This return statement is hit when we have situations where we're calculating fewer days than
                      // the patterns take to loop.  So for example, if you want to know what the pattern will be on
                      // day 5 but your pattern doesn't start to loop until day 12, you'll just return the current
                      // day's pattern immediately after it's been calculated.

};

function generateDayString(day){        // Converting the days to strings makes them easier manage
                                        // especially when debugging

  let str = "";                         // Start with an empty string.

  for(let j = 0; j < day.length; j++){  // for each cell
    str += day[j];                      // add it's value to the string
  }

  return str;                           // return the string.
}

function getResultFromLoop(arrProgressionTracker, intTotalDays, intCompletedDays){

  // This function is only called when a loop has been identified.  Because we're trying to identify loops right after
  // we generate patterns for the first time, when the pattern is identified, it will be the first element in the
  // progression tracking array.  In other words, since we're adding the patterns in the order they come up AND because
  // each pattern uniquely determines what follows it, there's no way to identify a pattern mid-way through the array.
  // If that were possible it would mean more than initial pattern could produce identical follow-on results;

  const
    intLoopLength = arrProgressionTracker.length,                   // This is how long our loop is

    intRemainingIterations = intTotalDays - intCompletedDays - 1,   // We need to know how many iterations remain

    intIndexOfFinalDay = (intRemainingIterations % intLoopLength),  // This is what our final index will be.  We're
                                                                    // essentially saying "Ignore all the times when we
                                                                    // go through the loop and end up back at the
                                                                    // beginning.  Just jump to the time when we run out
                                                                    // of iterations we're calculating.  How deep in the
                                                                    // loop will we be at that point.

    strFinalDayPattern = arrProgressionTracker[intIndexOfFinalDay]; // Finally, get the value stored at that index in the
                                                                    // array.

  return strFinalDayPattern;   

}