````markdown
# BibleVerse Package

**BibleVerse** is an npm package that allows you to fetch specific Bible verses, random verses, Psalms, and Bible promises. This package is perfect for developers looking to integrate Bible verses into their applications, websites, or spiritual projects.

## Features

- Retrieve any Bible verse given the book, chapter, and verse number.
- Get a random Bible verse.
- Retrieve a range of verses from a specified book and chapter.
- Get a random Psalm.
- Get a random Bible promise.

## Installation

You can install the package via npm. Open your terminal and run:

```bash
npm install bible-verse-package
```
````

## Usage

### Importing the Package

To use the package in your project, first import it:

```javascript
const BibleVerse = require("bible-verse-package");
```

### Creating an Instance

You can create an instance of the `BibleVerse` class:

```javascript
const bibleVerse = new BibleVerse();
```

### 1. Fetching a Specific Bible Verse

To retrieve a specific Bible verse, provide the book name, chapter, and verse number:

```javascript
bibleVerse
  .getVerse("John", 3, 16)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Example Output**:

```json
{
  "reference": "John 3:16",
  "verses": [
    {
      "book_id": "JHN",
      "book_name": "John",
      "chapter": 3,
      "verse": 16,
      "text": "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
    }
  ],
  "text": "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
  "translation_id": "web",
  "translation_name": "World English Bible",
  "translation_note": "Public Domain"
}
```

### 2. Getting a Random Bible Verse

You can easily fetch a random Bible verse with the following method:

```javascript
bibleVerse
  .getRandomVerse()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Example Output**:

```json
{
  "reference": "Luke 19:32",
  "verses": [
    {
      "book_id": "LUK",
      "book_name": "Luke",
      "chapter": 19,
      "verse": 32,
      "text": "Those who were sent went away, and found things just as he had told them."
    }
  ],
  "text": "Those who were sent went away, and found things just as he had told them.",
  "translation_id": "web",
  "translation_name": "World English Bible",
  "translation_note": "Public Domain"
}
```

### 3. Fetching a Range of Verses

To get a range of verses, you can specify the book, chapter, starting verse, and ending verse:

```javascript
bibleVerse
  .getVerseRange("Psalms", 23, 1, 3)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Example Output**:

```json
{
  "reference": "Psalms 23:1-3",
  "verses": [
    {
      "book_id": "PSA",
      "book_name": "Psalms",
      "chapter": 23,
      "verse": 1,
      "text": "Yahweh is my shepherd:\nI shall lack nothing."
    },
    {
      "book_id": "PSA",
      "book_name": "Psalms",
      "chapter": 23,
      "verse": 2,
      "text": "He makes me lie down in green pastures.\nHe leads me beside still waters."
    },
    {
      "book_id": "PSA",
      "book_name": "Psalms",
      "chapter": 23,
      "verse": 3,
      "text": "He restores my soul.\nHe guides me in the paths of righteousness for his name’s sake."
    }
  ],
  "text": "Yahweh is my shepherd:\nI shall lack nothing.\nHe makes me lie down in green pastures.\nHe leads me beside still waters.\nHe restores my soul.\nHe guides me in the paths of righteousness for his name’s sake.",
  "translation_id": "web",
  "translation_name": "World English Bible",
  "translation_note": "Public Domain"
}
```

### 4. Getting a Random Psalm

To retrieve a random Psalm, use the following method:

```javascript
bibleVerse
  .getRandomPsalm()
  .then((randomPsalm) => console.log(randomPsalm))
  .catch((error) => console.error(error));
```

**Example Output**:

```json
{
  "book": "Psalm",
  "chapter": 28,
  "verse": 7,
  "text": "The Lord is my strength and my shield; in him my heart trusts."
}
```

### 5. Getting a Random Bible Promise

You can fetch a random Bible promise like this:

```javascript
bibleVerse
  .getRandomPromise()
  .then((randomPromise) => console.log(randomPromise))
  .catch((error) => console.error(error));
```

**Example Output**:

```json
{
  "book": "2 Corinthians",
  "chapter": 12,
  "verse": 9,
  "text": "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'"
}
```

## Error Handling

The methods will throw errors if the provided parameters are invalid. Make sure to handle these exceptions appropriately.

### Example of Error Handling

```javascript
try {
  await bibleVerse.getVerse("InvalidBook", 1, 1);
} catch (error) {
  console.error(error.message);
}
```

## Acknowledgments

Special thanks to the creators and maintainers of [Bible API](https://bible-api.com/) for providing a valuable resource for accessing Bible verses and scriptures. Your hard work makes it easier for developers to integrate spiritual content into their applications.

## Contribution

Contributions are welcome! If you want to contribute to this package, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
