import random, string

server_url = 'http://localhost:5000/'
link_mappings = {}

ALPHANUMERIC_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

def create_short_link(long_link):
    while(True):
        random_alphanumeric = generate_random_string(6)
        if random_alphanumeric not in link_mappings:
            return server_url + random_alphanumeric

def get_long_link(short_link):
    # Look at dictionary of link_mappings and return the corresponding long link
    # ignore error case where user puts in an invalid short link for now
    pass

def generate_random_string(length):
    return ''.join(random.choice(ALPHANUMERIC_CHARACTERS) for _ in range(length))
    

