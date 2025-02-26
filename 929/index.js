/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const uEmails = new Set();
    for (const email of emails) {
        let pending = '';
        let ignoreNow = false;
        for (let i = 0; i < email.length; i++) {
            const character = email[i];
            if (character === '@') {
                pending += email.slice(i)
                break;
            } else if (character === '+') {
                // pending += email.slice(i + 1)
                ignoreNow = true;
            } else if (character === '.') {

            } else {
                if (!ignoreNow) {
                    pending += email[i];
                }
            }
        }
        console.log(pending)
        uEmails.add(pending)
    }
    return uEmails.size;
};

// 2
console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))
// 3
console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]))
// console.log(numUniqueEmails())