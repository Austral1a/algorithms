
/* return middle of string */
function getMiddle(s) {
    let str = '';

    return s.length % 2 ? str += s.substring(s.length / 2, s.length / 2 + 1) : str += s.substring(s.length / 2 - 1, s.length / 2 + 1)
}


/* if first el of array more than 54 and second 7 , so then this is 'Senior', if not - 'Open'*/
function openOrSenior(data) {

    let results = [];
    data.forEach(e => {
        console.log(e);
        if (e[0] >= 55 && e[1] > 7) {
            results.push("Senior");
        } else {
            results.push("Open");
        }
    });
    return results
}

//console.log( openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]) )


/* Playing with digits */
function digPow(n, p) {
    /* возведение в степень и сумма  */
    let result = [];
    let new_num = n;

    new_num = n.toString().split("");
    new_num.forEach((e) => {
        return result.push(Math.pow(+e, p++))
    });
    result = result.reduce((accumulator, currentValue) => accumulator + currentValue);
    /*  */
    let k = result / n;
    return k % 1 !== 0 ? -1 : k
}

//console.log( digPow(92, 1) )


/* Sum of the first nth term of Series */
function SeriesSum(n) {
    let result = 0,
        counter = 1;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result = 1;
        } else {
            counter += 3;
            result = result + (1 / counter);
        }
    }
    return result.toFixed(2)
}

//console.log( SeriesSum(5) )



/* Persistent Bugger. */
function persistence(num) {
    let result = 0;

    while (num.toString().length !== 1) {
        num = num.toString().split("").reduce((a, b) => a * b);
        result++;
    }
    return result;
}
//console.log( persistence(39) )



/* Create Phone Number  */
function createPhoneNumber(numbers) {
    return numbers.join("").replace(/(\d{0})(\d{3,3})(\d{3})/, '$1($2) $3-');
}

//console.log( createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) )



function sqInRect(len, wid) {
    let result = [];

    if (len === wid) {
        return null;
    }


    while (len !== wid) {
        let smaller = Math.min(len, wid);     //len < wid ? len : wid;
        let bigger = Math.max(len, wid);     //len > wid ? len : wid;

        result.push(smaller);
        len = smaller;
        wid = bigger - smaller;
    }
    result.push(len);
    return result;
}

//console.log( sqInRect( 20, 14 ) )


/* freecodecamp: Intermediate Algorithm Scripting: Search and Replace */
function myReplace(str, before, after) {
    let before_arg = new RegExp(before, "g");// in order to use regexp as a variable
    if (str[str.search(before_arg)] == str[str.search(before_arg)].toUpperCase()) { // if the first letter of "before" in uppercase
        after = after.replace(after[0], after[0].toUpperCase())
        return str.replace(before_arg, after);
    } else {
        return str.replace(before_arg, after);
    }
}

//myReplace("He is Sleeping on the couch", "Sleeping", "sitting")

/* Dna Pairing */
function pairElement(str) {
    let result = [];
    //str.split(" ");
    str.split("").forEach((letter) => {
        if (letter === "C") {
            let arr = [];
            arr.push(letter, "G")
            result.push(arr);
        } else if (letter === "G") {
            let arr = [];
            arr.push(letter, "C")
            result.push(arr);
        }

        if (letter === "A") {
            let arr = [];
            arr.push(letter, "T")
            result.push(arr);
        } else if (letter === "T") {
            let arr = [];
            arr.push(letter, "A")
            result.push(arr);
        }
    });
    return result;
    //console.log( result.push( arr ) )

}

pairElement("GCG");


/* Sorted Union */
function uniteUnique(arr) {
    let result = [];
    arr = [...arguments];
    arr = arr.flat(1);

    let newArr = new Set();
    arr.forEach((e) => {
        newArr.add(e);
    })
    newArr.forEach((e) => {
        result.push(e);
    })

    return result;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

/* Convert HTML Entities */
function convertHTML(str) {
    return String(str).replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;');
}

//console.log( convertHTML('Stuff in "quotation marks"') )


function nextBigger(n) {

    let arr = n.toString().split("")
    return +arr.sort((a, b) => b - a).join("");

}

//console.log( nextBigger(144) )


/* Stop gninnipS My sdroW! */
function spinWords(str) {

    console.log(str.split("").reverse().join("")) // 'reverse' action 
    let result = []; // final variable
    str = str.split(" ");
    str = str.forEach((e) => { // each element push to result array
        if (e.length >= 5) {
            result.push(e.split("").reverse().join("")); // if any element.length more than 5 and equals 5, then turn this element over
        } else {
            result.push(e); // do nothing to element
        }
    });
    return result.join(" ");
}


/* Quick Sort */
function qsort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let less = [];
        let greater = [];

        let result = [];
        let pivot = arr.pop(0);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }
        return result.concat(qsort(less), pivot, qsort(greater));
    }

}

function randArr() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 1000));
    }
    return arr;
}
let arr = [4, 3, 1, 8, 5, 7, 15, 12, 5, 9];

let sorterArr = qsort(randArr());

console.log(`Sorted array: ${sorterArr.join(", ")}`)


/* Sorting by bits( codewars ) */

function sortByBit(arr) {
    arr = arr.map((e) => {
        let bns = +e.toString(2).replace(/0+/g, '');
        let info = { e, bns };
        return info;
    })

    arr.sort((a, b) => (a.bns == b.bns) ? (a.e - b.e) : (a.bns - b.bns)); //In cases where two numbers have the same number of bits, compare their real values instead.

    return arr.map((e) => e.e);
}

//console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));


/* Morse Code Translator */

function encode(str) {

    const morse = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
        ' ': '/'
    }


    return str.split("").map((char) => {
        return `${morse[char.toLowerCase()]} `;
    }).join("").trim();

}

//console.log(encode('hmltsqrflblmosykveknqeapyi bu dedqyyzvlfrjqaewrtfuixlotq'))



function decode(str) {

    let morse = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '/': ' '
    }


    return str.split(" ").map((char) => {
        return morse[char];
    }).join("").toLowerCase().trim();

}

//console.log(decode('.. / -.-. .- -. / .-. . .- -.. / -- --- .-. ... . / -.-. --- -.. .'))



/* extract file name, codewars */
/*
1)Assume it will start with date represented as long number
2)Followed by an underscore
3)Youll have then a filename with an extension
4)it will always have an extra extension at the end
*/
class FileNameExtractor {
    static extractFileName(dirtyFileName) {

        return dirtyFileName.replace(/([0-9]+_)/g, '')
            .replace(/([a-z0-9?]+_?)(\.)([a-z0-9]+\.)(.+)/gi, `$1$2$3`)
            .replace(/(\.$)/, '');
    }
}
//console.log(FileNameExtractor.extractFileName('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34'));

/* Meeting , codewars */
function meeting(s) {

    // Expected Output (SURNAME, NAME).....
    s = s.replace(/;/g, ' ');
    s = s.split(' ').map((e) => {
        return e
            .replace(/:/g, ', ')
            .replace(/^([^\s]+)(,\s+)([^\s]+)/g, '$3$2$1')
            .replace(/^([^\s]+)(,\s+)([^\s]+)/g, `($1$2$3)`).toUpperCase();
    });
    return s.sort();

}

meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")

/* Kebabize, codewars */
function kebabize(str) {

    return str.replace(/([A-Z])/g, '-$1')
        .replace(/[\d]+/g, '')
        .replace(/^-/g, '').toLowerCase();

}

//console.log(kebabize('HombreCamelsHave3Humps')); --> hobre-camels-have-humps

/* reverse method for strings & arrays */
const reverse = (input) => {
    let result;
    if (typeof input === 'string') {
        result = '';
        for (let i = input.length - 1; i >= 0; i--) {
            result += input[i];
        }
    } else if (Array.isArray(input)) {
        result = [];
        for (let i = input.length - 1; i >= 0; i--) {
            result.push(input[i]);
        }
    }
    return result;
}

//console.log( reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) )
//console.log(reverse('Hello, world!'))

/* Longest Word Results, coderbyte */
function LongestWord(sen) {
    sen = sen.replace(/([^a-z])/gi, ' ');

    return sen.split(' ').sort((a, b) => b.length - a.length)[0];
}

//console.log(LongestWord("a beautiful sentence^&!")) --> beautiful

const bubbleSort = (arr) => {

    for (let i = arr.length - 1; i > 0; i--) {

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}

//console.log( bubbleSort([5,7,8,9,4,2,8,4,6,7,4,5,6,7,8,9,2,5,4,6,1,2,3,4,5,6]) )