
function create_short_link(server_url, long_link) {
	let LENGTH_OF_ALIAS_ID = 6;
	let unused_hash = generate_random_string(LENGTH_OF_ALIAS_ID);

	link_mappings[unused_hash] = long_link;

	return server_url + unused_hash;
}
let link_mappings = {};

function generate_random_string(length_of_string) {
	const ALPHANUMERIC_CHARACTERS =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	while (true) {
		let valid_random_alphanumeric = '';
		for (let i = 0; i < length_of_string; i++) {
			valid_random_alphanumeric += ALPHANUMERIC_CHARACTERS.charAt(Math.random() * ALPHANUMERIC_CHARACTERS.length);
		}

		if (!link_mappings.hasOwnProperty(valid_random_alphanumeric)) {
			return valid_random_alphanumeric;
		}
	}
}

function get_long_link(short_link_id) {
	return link_mappings[short_link_id];
}
