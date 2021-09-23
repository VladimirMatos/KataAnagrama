/*
done=> null input = null exception
done=> " " = " "
done=> 23465 = " "
=> [sapo,aso,paso,soap] => 1
=> file.txt => 20k sets

*/

    



var anagrams = {};


function anagram(txt) {
    if (txt == null || !txt) {
        return 'null Exception detect'
    }

    if (txt === " " || !isNaN(txt)) {
        return ' ';
    }

    return getAnagrams(txt);

}


const getAnagrams = (file) =>{
    var sorted;
    file.forEach(function(str){
        sorted = sortArrays(str);
        
        if(anagrams.hasOwnProperty(sorted)){
            anagrams[sorted].unshift(str);
        }
        else{
            anagrams[sorted] = [str];
            
        }
    });  
    return anagrams;       
}

const sortArrays = (str) =>{
    return str.split("").sort().join("");
}




module.exports = anagram;