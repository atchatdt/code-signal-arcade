# https://app.codesignal.com/arcade/intro/level-12/fQpfgxiY6aGiGHLtv/
def differentSquares(matrix):
    squares = set()
    for row in range(len(matrix) - 1):
        for cell in range(len(matrix[row]) - 1):
            square = ((matrix[row][cell], matrix[row][cell + 1]),
                      (matrix[row + 1][cell], matrix[row + 1][cell + 1]))
            print(square)
            squares.add(square)
    return len(squares)


differentSquares([[1,2,1], 
 [2,2,2], 
 [2,2,2], 
 [1,2,3], 
 [2,2,1]])