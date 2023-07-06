const moment = require('moment');
const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const YEAR = '2022';
const MONTH = '01';
const DAY = '13';

const rnd = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min)).toString();

// git commit date format: "ddd, DD MMM YYYY HH:mm:ss ZZ";
const DATE_RFC2822 = `ddd, DD MMM YYYY HH:mm:ss +0300`;
let commitDate = moment(`${YEAR}${MONTH}${DAY} ${rnd(10,23)}${rnd(10,59)}${rnd(10,59)}`, "YYYYMMDD HH:mm:ss").format(DATE_RFC2822); 
// console.log(commitDate)

function getCommand(commitId, cDate) {
    return `git filter-branch -f --env-filter \
    'if [ $GIT_COMMIT = ${commitId} ]
     then
         export GIT_AUTHOR_DATE="${cDate}"
         export GIT_COMMITTER_DATE="${cDate}"
     fi'`;
}

console.log(getCommand('78ef1b9f38b3282e4c21124ea69fa941703dcbe6',commitDate))