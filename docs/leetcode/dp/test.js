// function knapsack(V, n, vw) {
//     // write code here
//     let dp = Array(n+1).fill(0).map(x => Array(V+1).fill(0));
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= V; j++) {
//             if (j < vw[i - 1][0]) {
//                 try {
//                     dp[i][j] = dp[i - 1][j];
//                 } catch (error) {
//                     console.log(i, j);
//                 }
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - vw[i - 1][0]] + vw[i - 1][1]);
//             }
//         }
//     }
//     return dp[n][V]
// }

// console.log(knapsack(10, 2, [[1, 3], [9, 8]]));

function coord(order) {
    let orders = order.split(";").filter((cur) => isIllegal(cur));
    let res = [0, 0];

    orders.forEach((cur) => {
        let direction = order[0];
        let distance = order.slice(1, order.length + 1);
        console.log(distance);
        switch (direction) {
            case "W":
                res[1] += Number(distance);
                break;
            case "S":
                res[1] -= Number(distance);
                break;
            case "A":
                res[0] -= Number(distance);
                break;
            case "D":
                res[0] += Number(distance);
                break;
        }
    });
    return res.join(",");
}

function isIllegal(order) {
    if (order.length != 2 && order.length != 3) return false;
    let direction = order[0];
    let distance = order.slice(1, order.length + 1);
    let temp = "WASD";
    if (temp.includes(direction) && !isNaN(Number(distance))) {
        return true;
    } else {
        return false;
    }
}

// coord("A10;S20;W10;D30;X;A1A;B10A11;;A10;")

// function longestStr(str) {
//     let res = [];
//     for (let i = 0; i < str.length; i++) {
//         let j = i + 3
//         if (j < str.length) {
//             res.push(str.slice(i, j));
//         }
//     }
//     return new Set(res).size == res.length
// }
// console.log(longestStr("021Abc9Abc1"));


function sort(str) {
    const map = new Map
    let arr = []
    let res = ''
    for (let char of str) {
        if (/[0-9a-zA-Z]/.test(char)) {
            map.get(char.toLowerCase()) ? map.get(char.toLowerCase()).push(char) : map.set(char.toLowerCase(), [char])
        }
    }
    console.log({ map });
    for (let i = 97; i <= 122; i++) {
        let char = String.fromCharCode(i)
        if (map.has(char)) {
            let temp = map.get(char)
            arr.push(...temp)
        }

    }
    console.log(arr)
    for (let char of str) {
        if (/[^0-9a-zA-Z]/.test(char)) {
            res += `${char}`
        } else {
            res += arr.shift()
        }
    }
    return res;
}
// console.log(sort("gjo%%CGP-A+@-krz~dhxWb$qVev+!W^)~--U+ysdA^ZA~y^SxF!PUu&k"))

// console.log(sort("ssSsS%gffghSsSFsf"))

function fn(line) {
    const arr = line.split(" ");
    const dict = arr.slice(1, arr.length - 1);
    const x = arr[arr.length - 2];
    const k = arr[arr.length - 1];
    const res = [];
    const map = new Map();
    for (let item of x) {
      map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    }
    dict.forEach((item) => {
      if (item !== x && item.length == x.length) {
        const map2 = new Map();
        let flag = true;
        for (let char of item) {
          map2.has(char) ? map2.set(char, map2.get(char) + 1) : map2.set(char, 1);
        }
        if (map2.size != map.size) return;
        map.forEach((value, key) => {
          if (map2.get(key) != value) {
            flag = false;
          }
        });
        if (flag) {
          res.push(item);
        }
      }
    });
    res.sort()
    console.log(res);
    if (res.length >= k) {
      console.log(res[k - 1]);
    }
  }

fn("765 bac dab bbc b ddbb bbcad ddd bbbbd da bdc dbad cba dcbb bcdac aaabd ccb bbcda dadc bb ddcc dca dc a c dbbdd cba b dbbc acac dad d acbc cda cbbca a bcaa b aaa aa dcbcc acdda cbaa dcbb a c cd dd bacaa dddba c cdcc bb cc cdcd bdad dab dcabd dcdcc ca a ba cbada ccba b c bbab dbb bdcdc dddb cab addbd ba b adcc c ba a cbcdc bbd dacab b bbaa abadc bcc db bcc cb ba ab dd dca d ba daa bcd dbadc dcad cadc a dbb cccda c dcbbd ab a abac cdab dac acad aabca db ddcba ac cac bda cdb b cabca caccc bcdcd dcacb a bccdd baad dcac bbccb ccc bcdbc cac b cd acbc db db ac ac ccad aabcd bc adcd bd babba dcdd b cddb ddcac b acca abc bdb b cbbbc bca dadc badb b b bcdc c cb cbabb ccbb bdda bcccc aab b d daab ddc a ccacb c cc d cdbd bab d dcbcd dcd dddda bdb ba b cd cd b aadaa d ab abaa adac dcac dc ad a cbaad bdcd dbd cbdbd ab ba d d bbc ac ccaca d a cd ccbdb bccdb c cbda ca bbdbd b d b d dba ac dc bcddb ba bdcaa a cbda d dd bb aacb cb dcd acb d d b ac adcb adc badac bcbab aa aadb cacb ccab bccc dcdd d d ca bcdc db da ad bdbac ddccc acaac cac b c adaa abaa bcb dc adcba ccdd caa bbcb ddc aaad accd cb a dacc bbbbd b ca cdc ccac ad b da cc da b abdac ddda acaba abbb a bad cbbc cdc bc abcab adc daa da cada adbb ccad a ccc bbcbb dbdcb abcb dcb b dd d cc accdb bc da dcdcb dadc bcc aabbd cadad bb cac dbbca cd ad adc b bc bbdb a dcab dbd cdbc bdabc dbac cccdc bab ddd ad ddd bbbaa dad aaa bbabd dbadc cbdcd cc adcab a bbcda daaca ba dc cda aacbb bacdb dcd cbab aabb cba ccddc bac aba ba bb cba c acbc dba dcb acdc da abada dbbad d dbb db a adabd acaaa ad cbbab aacdd adcac ab bcadb ca ccca dbad bbbc dc dabab a cda bdb cbbcb b bb cb dbab aaaab bbb d a c aa b ddddb aaada ad bbb dcccb bb dcad bba d bd cabad adcba ddc dda ab cab acb dabac aa b a accd c a bdcab b dbcbc d bdbba dccb aaaad bbd abdc bb dc dcad adbb dba da aac ab bcbc bbbcc bdda bd adabd c ca bd bdb db bdd cbc abdb ad bdc baabd dacca add dca cba ad cba d cb cb cbbcd cddd bac ca dcbd addad adb ba d bd ddc ccaac bdd b cba c dd b ccaa dbd c c aa ac cb bcd bbb cdcbb cdbaa dca dbcda ba ba dbcba bcc abac ba adbca cda c adbaa ababc bbbda cb ccdb cabd c b b acb c a ddd abcd b cc ab b dbc a d adcc da abb cb dbda adddb ca cbabc abb d bcab ad c cbdbd acdc a bb bbadb cca cdabb aaac ccdcc dbb cd dacb abad dc db dc b adaab bc b adbbb ccda ccca aadc c dccca aaaa cc bddca bbdb a d cda bcb ddcd c cdb aaa adab ddb d ab aabc dccb cdc dacd ad abacd baacc accc cba dcab caa db bcbcc a a aa c ddca abdd cdb adcc ab ca abb abaa d cbbc cb cc cdbdb add db b add abb acac bcaa db cacba dab ac caad abddb bc cddcd bcbb aadb dd b cabb bccd dba acda acbb cac b ddccb cdbda ddba abb ddaa bd dbc ccada cc b a aab dbad dbcab dd aaca dcacc a ca c b bbb ab aabc bdcbc bc dc ba bbca db ca b c cbacb dcbdc babc aa daaa bbddd cd baac daddc bbaac d bdba cccdd b adbb c baad ddbb ddc a bdcbd c d aad b aabd cbb cca bbd cadb bccdd cabb adad aaa bcac bccdc d cd a da abbdd b bac ad dcbca bb dcdc dbc d addab ddb ba cbb da daac bb ada c bda dcab bdbdc dccac bcda abc da adb c cada c b baba aba cdaa dbbb cac daba c daa cdad dadbc bda bbdb c c ab ccdda acb bad 1")
