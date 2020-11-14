function electionsWinners(votes, k) {

    //Returns Indices of all the elements with  the Maximum Vote Counts
    function findMaxVotesIndex(votes) {
        var maxIndexArray = [];
        var maxIndex;
        for (var i = 0; i < votes.length; i++) {
            if (i === 0) {
                maxIndex = 0;
                maxIndexArray.push(i);
            }
            else if (votes[i] > votes[maxIndex]) {
                maxIndexArray = [];
                maxIndexArray.push(i);
                maxIndex = i;
            }
            else if (votes[i] === votes[maxIndex]) {
                maxIndexArray.push(i);
            }
        }

        return maxIndexArray;
    }

    //Is votes[index] unique in the votes array
    function boolUniqueVote(index, votes) {
        var voteCount = votes[index] + k;
        for (var i = 0; i < votes.length; i++) {
            if (i != index && votes[i] === voteCount) {
                return false;
            }
        }
        return true;
    }

    var possibleWinners = 0;
    var maxIndexArray = findMaxVotesIndex(votes);
    var maxVotes = votes[maxIndexArray[0]]; //This is the maximum vote count value without k

    if (k === 0) {
        if (maxIndexArray.length === 1) {
            return 1; //Only 1 Maximum Vote Count
        }
        else {
            return 0; //There is a tie
        }
    }
    else {
        if (maxIndexArray.length === votes.length) {
            return votes.length; //The case were all elements in the votes array are the same which means each element in the votes array is a potential winner
        }
        for (var i = 0; i < votes.length; i++) {
            if (votes[i] + k > maxVotes && boolUniqueVote(i, votes)) { //The necessary condition to account for possible winners: The element's vote count + k should be greater than the max vote count and that element value is unique in the array
                possibleWinners++;
            }
        }
        return possibleWinners;
    }

}