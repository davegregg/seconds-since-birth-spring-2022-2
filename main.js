{ // Version 1: MVP.
    let calculateSecondsAlive = function (birthMonth, birthYear) {
        let currentMonth = new Date().getMonth() + 1
        let currentYear = new Date().getFullYear()
        let secondsInMonth = 60 * 60 * 24 * 30
        let secondsInYear = secondsInMonth * 12
        
        let secondsInBirthYear = secondsInMonth * (12 - birthMonth)
        let secondsInBetween = secondsInYear * (currentYear - birthYear - 1)
        let secondsInCurrentYear = secondsInMonth * currentMonth
        
        let secondsSinceBirth = secondsInBirthYear
            + secondsInBetween
            + secondsInCurrentYear
        
        return secondsSinceBirth
    }

    let feb1997 = calculateSecondsAlive(2, 1997)
    let dec2008 = calculateSecondsAlive(12, 2008)

    console.log({ feb1997, dec2008 })
}



{ // VERSION 2: Less code. More precise.
  //               But we are also trusting the user for more,
  //            because they could enter any string they wish,
  //            which could break the code, unless we control 
  //            HOW the user inputs their information.
  //               So this function would probably NEED to be 
  //            paired with an HTML form containing a datepicker
  //            instead of a text box:
  //                  <input type="date">
  //
  //               We'll talk more about getting user input from
  //            forms later in the course. We'll have to get to
  //            a few other things first.
    let calculateSecondsAlive = function (birthDateAsString) {
        let birthDate = new Date(birthDateAsString)
        let currentDate = new Date()
        let differenceInMilliseconds = currentDate - birthDate
        let differenceInSeconds = differenceInMilliseconds / 1000

        return Math.round(differenceInSeconds)
    }
    
    let feb1997 = calculateSecondsAlive("February 1997")
    let dec2008 = calculateSecondsAlive("December 17, 2008")

    console.log({ feb1997, dec2008 })
}