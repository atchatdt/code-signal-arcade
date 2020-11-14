# https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9
from itertools import permutations

def oneLetterDiff(first_string, second_string):
    letter_pairs = zip(first_string, second_string)
    misses = (a != b for (a,b) in letter_pairs)
    return True if sum(misses) == 1 else False

def stringsRearrangement(inputArray):
    arrangements = permutations(inputArray)
    for current_arrangement in arrangements:
        string_comparisons = zip(current_arrangement, current_arrangement[1:])
        comparison_results = (oneLetterDiff(a, b) for (a, b) in string_comparisons)
        if all(comparison_results):
            return True
    return False