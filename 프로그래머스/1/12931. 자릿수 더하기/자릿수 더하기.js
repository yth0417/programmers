function solution(n)
{
    var answer = 0;
    var m = String(n);
    
    for ( let i = 0; i < m.length; i++) {
        answer += parseInt(m[i]);
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}