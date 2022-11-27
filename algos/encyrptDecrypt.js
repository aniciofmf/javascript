/*
describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
*/
function encrypt(text, n) {
	let textToEncypt = text;
	let odd = "",
		even = "";

	if (text === null) return null;
	if (!text || n <= 0) return text;

	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < textToEncypt.length; j++) {
			if (j % 2 !== 0 && j > 0) {
				odd += textToEncypt[j];
			}

			if (j % 2 === 0) {
				even += textToEncypt[j];
			}
		}
		textToEncypt = odd.concat(even);

		odd = "";
		even = "";
	}

	return textToEncypt;
}

function decrypt(encryptedText, n) {
	if (encryptedText === null) return null;
	if (!encryptedText || n <= 0) return encryptedText;

	let textToDecrypt = [...encryptedText];

	while (n--) {
		let j = 0;
		for (let i = 1; i < encryptedText.length; i += 2) {
			textToDecrypt[i] = encryptedText[j++];
		}
		for (let i = 0; i < encryptedText.length; i += 2) {
			textToDecrypt[i] = encryptedText[j++];
		}
		encryptedText = textToDecrypt.join("");
	}
	return textToDecrypt.join("");
}

let text = "This is a test!";
let times = 0;

console.log(encrypt(text, times));
