#returning strings
def greet(name):
    return 'Hello, ' + name + ' how are you doing today'

#sum of arrays
def sum_array(a):
    return sum(a) if a else 0

#are you playing banjo
def are_you_playing_banjo(name):
    if 'r' in name[0] or 'R' in name[0]:
        return name + ' plays banjo'
    else:
        return name + ' does not play banjo'
    
#is he gonna survive
def hero(bullets, dragons):
    if bullets / dragons >= 2:
        return True
    else:
        return False

#a needle in the haystack
def find_needle(haystack):
    return 'found the needle at position {}'.format(haystack.index('needle'))
