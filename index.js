const axios = require("axios");
const { psalms } = require("./src/verses/psalms");
const { promises } = require("./src/verses/promises");

class BibleVerse {
    constructor(apiUrl) {
        this.apiUrl = apiUrl || 'https://bible-api.com/';
    }
    /**
        * Retrieves a range of verses from a specified book and chapter.    
         * @param {string} book - The title of the book.
         * @param {number} chapter - The chapter number.
         * @param {number} verse - The verse number.
         * @returns {Promise<Object>} A promise that resolves to the verse data.
    */

    async getVerse(book, chapter, verse) {
        if (!book || typeof book !== 'string') {
            throw new Error("Invalid 'book' parameter. It must be a non-empty string.");
        }

        if (!Number.isInteger(chapter) || chapter <= 0) {
            throw new Error("Invalid 'chapter' parameter. It must be a positive integer.");
        }
        try {
            const response = await axios.get(`${this.apiUrl}${book} ${chapter}:${verse}`)
            return response?.data
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @returns {Promise<Object>} 
     */

    async getRandomVerse() {
        try {
            const response = await axios.get(`${this.apiUrl}?random=verse`)
            return response?.data
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Retrieves a range of verses from a specified book and chapter.
     *
     * @param {string} book - The title of the book.
     * @param {number} chapter - The chapter number.
     * @param {number} from - The starting verse number.
     * @param {number} to - The ending verse number.
     * @returns {Promise<Object>} A promise that resolves to the verse data.
     */
    async getVerseRange(book, chapter, from, to) {
        if (!book || typeof book !== 'string') {
            throw new Error("Invalid 'book' parameter. It must be a non-empty string.");
        }

        if (!Number.isInteger(chapter) || chapter <= 0) {
            throw new Error("Invalid 'chapter' parameter. It must be a positive integer.");
        }

        if (!Number.isInteger(from) || from <= 0 || !Number.isInteger(to) || to <= 0 || from > to) {
            throw new Error("'from' and 'to' must be positive integers, and 'from' must be less than or equal to 'to'.");
        }

        try {
            const response = await axios.get(`${this.apiUrl}${book}+${chapter}:${from}-${to}`);

            return response?.data || "No data returned from the API";
        } catch (error) {
            // Return a meaningful error message
            return {
                error: true,
                message: `Failed to retrieve verses from ${book} ${chapter}:${from}-${to}. ${error.message}`,
            };
        }
    }


    /**
     * 
     * @returns {Promise<Object>} - Resolves to a random psalm
     */

    getRandomPsalm() {
        try {
            const randomIndex = Math.floor(Math.random() * psalms.length);
            return psalms[randomIndex];
        } catch (error) {
            return error
        }
    }


    /**
      * 
      * @returns {Promise<Object>} - Resolves to a random promise
      */

    getRandomPromise() {
        try {
            const randomIndex = Math.floor(Math.random() * promises.length);
            return promises[randomIndex];
        } catch (error) {
            return (error);
        }
    }
}


module.exports = BibleVerse;