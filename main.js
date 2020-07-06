const capitalizeSentences = function(str){
  let result = ''

  for(let i = 0; i < str.length; i++){

     if(i === 0) {
       result = result + str[i].toUpperCase()
     }
    else if(str[i] == '.' && str[i + 1] === ' '){
      result = result + '. ' + str[i + 2].toUpperCase()
      i = i + 2

    } else {
      result = result + str[i].toLowerCase()
    }
  }
  return result
}

capitalizeSentences('In a way fighting was just like using Magic. You said the words, and they alterEd the universe. By merely speaking you could create damage and pain, cause tEars to fall, drive people Away, make yourself feel better, make your life worsE.')

const isValidPassword = function(str){
  let result = ''


      for(let i = 0; i < str.length; i++){
        if(str[i] === ' ' || str.length < 12){
          result = 'false'
          break;
        } else {
          result = 'true'
        }
    }
      return result

  }




isValidPassword('aa nnnmmmmmmmmmmmmmmmma')

const makeHalfSquares = function(nums){
  let result = []

  for(let i = 0; i < nums.length; i++){
    result.push([nums[i] * nums[i]] / 2)
  }

  return result
}

makeHalfSquares([6, 7, -8, 3.5])

const countAs = function(nums){
  let result = 0

  for(let i = 0; i < nums.length; i++){

    if(nums[i] >= 90){
      result++
    } else {
      result = result
    }
  }

  return result
}

countAs([90, 90, 63, 87, 100, 93, 76, 0])

const deleteMiddleLetters = function(str){
  let result = ''

  for(let i = 0; i < str.length; i++){

    const midValInitial = str.length / 2
    const midVal = Math.round(str.length / 2)

    if(i === midVal - 1 && midValInitial % 1 === 0){
       result = result
       i++
       } else if(i === midVal - 1 && midValInitial % 1 !== 0){
         result = result
       }
    else {
         result = result + str[i]
       }

  }

  return result
}

deleteMiddleLetters('oh hello there')

const lastIndexOfSpace = function(str){
  let result = 0

  for(let i = 0; i < str.length; i++){

    if (str[i] === ' '){
      result = i
      break;

    } else {
      result = -1
    }
  }
  return result
}

lastIndexOfSpace("what even I can't")


const hyphenateName = function(str){
  let result = ''

  for(let i = str.length - 1; i >= 0; i--){

    if (str[i] === ' '){
      result = result
      break;

    } else {

    let firstPart = str.substr(0, i);
    let lastPart = str.substr(i + 1);

    let newString = firstPart + '-' + lastPart;
    result = result + newString;


    }
  }
  return result
}

hyphenateName('Jaffe Obama jo')


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
