# https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg

# votes => mảng người bầu cử
# k => số người chưa bầu cử
def electionsWinners(votes, k):
    m = max(votes)
    return int(votes.count(m) == 1) if k == 0 else len([n for n in votes if m < n + k])


arr = [5, 1, 3, 4, 1]
print(electionsWinners(arr, 0))
