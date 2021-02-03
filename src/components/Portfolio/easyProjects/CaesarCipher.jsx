import { useState } from "react";
const CaesarCipher = () => {
    const [text, setText] = useState("");
    const [key, setKey] = useState(0);
    const handleTextChange = (event) => {
        setText(event.target.value);
        console.log(text);
    };
    const handleKeyChange = (event) => {
        setKey(event.target.value);
        console.log(key);
    };
    const cipher = (text, key) => {
        // Converting the hash key to an integer
        key = Number(key);
        let cipherText = "";
        // Iterating over the letters in the given text
        for (let letter = 0; letter < text.length; letter++) {
            let cipherCode = text[letter].toUpperCase().charCodeAt(0) + key;
            console.log(cipherCode);
            if (cipherCode <= 90) cipherText += String.fromCharCode(cipherCode);
            else cipherText += String.fromCharCode("A".charCodeAt(0) + key);
        }
        return cipherText;
    };
    return (
        <>
            <h3>Caesar Cipher</h3>
            Insert text: <br />
            <input type="text" onChange={handleTextChange} />
            <br />
            Insert key (whole number between 1-25):
            <br /> <input onChange={handleKeyChange} />
            <div>Result: {cipher(text, key)}</div>
        </>
    );
};
export default CaesarCipher;
