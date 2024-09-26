function solution(a, b) {
    var answer = 0;

    if (a < b) {
        for (let i = a; i <= b; i++)
            answer += i
            return answer
    } else if (a == b) {
        answer = a
        return answer
    } else {
        for (let i = b; i <= a; i++)
            answer += i
            return answer
    }
}