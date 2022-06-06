// This function returns the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3
    return avg >= 90 ? "A"
         : avg >= 80 ? "B"
         : avg >= 70 ? "C"
         : avg >= 60 ? "D"
         : avg < 60 ? "F"
         : "Scores need to be between 0 and 100"
  }