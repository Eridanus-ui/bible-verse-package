const BibleVerse = require('../index');
const bibleVerse = new BibleVerse();

bibleVerse.getVerseRange('Psalms', 23, 1, 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));


// // // Test random verse
// bibleVerse.getRandomVerse()

// // Test random Psalm
// console.log('Random Psalm:', bibleVerse.getRandomPsalm());

// // // Test random promise
// console.log('Random Promise:', bibleVerse.getRandomPromise());

// const getVerseRange = async () => {
//     try {
//         const data = await bibleVerse.getVerseRange("Romans", 1, 2)
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }

// getVerseRange()