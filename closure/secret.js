function createSecretHolder(secret) {
	let val = secret;
	return {
		getSecret: () => val,
		setSecret: (secret) => (val = secret),
	};
}

const obj = createSecretHolder(5);
obj.getSecret(); // => returns 5
obj.setSecret(2);
obj.getSecret(); // => returns 2
