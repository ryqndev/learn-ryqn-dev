import random

link_mappings = {}

def create_short_link(server_url, long_link):
    """Generates and returns an alias for the given link

    Parameters:
        server_url [string]: Base URL of the server
            Ex.: https://short.com/ (if example aliased link was https://short.com/d63hs)

        long_link [string]: Original link that the alias should redirect to.
            Ex.: http://learn.ryqn.dev/making-a-url-shortener-in-python#writing-the-business-logic

    Returns:
        [string]: full aliased url.
            Ex.: https://short.com/d63hs
    """
    LENGTH_OF_ALIAS_ID = 6
    generated_random_id = generate_random_string(LENGTH_OF_ALIAS_ID)

    link_mappings[generated_random_id] = long_link

    return server_url + generated_random_id


def generate_random_string(length_of_string):
    """Generates a random Base62 string of given length

    Parameters:
        length_of_string [int]: length of generated Base62 string
            Ex.: 6

    Returns:
        [string]: random Base62 string
            Ex.: d63hs
    """
    ALPHANUMERIC_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    while True:  # loops until it generates unused id. Not expected to iterate in majority cases.

        # Generates list of characters randomly picked from ALPHANUMERIC_CHARACTERS string
        # and then joins them together into a string.
        valid_random_alphanumeric = ''.join(random.choice(
            ALPHANUMERIC_CHARACTERS) for _ in range(length_of_string))

        # Checks validity of generated id. Breaks from loop if valid, otherwise generate again
        if valid_random_alphanumeric not in link_mappings:
            return valid_random_alphanumeric

def get_long_link(short_link_id):
    """Finds and returns original link from alias

    Parameters:
        short_link_id [string]: random string of characters denoting alias. 
            Ex.: d63hs (if aliased link was https://short.com/d63hs)

    Returns:
        [string|None]: full original link as string or NoneType if link wasn't found. 
            Ex.: http://learn.ryqn.dev/making-a-url-shortener-in-python#writing-the-business-logic
    """
    return link_mappings.get(short_link_id)
