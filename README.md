# Auto-Text-Effect-Animation
<img src="./image.gif">

## 효과  
타이핑이 되는 것 처럼 보이는 효과 

## 폰트  
구글 폰트  
https://fonts.google.com/?subset=korean&noto.script=Kore   

## 학습  
### 1. JS : Array.prototype.slice()  
- 배열에서 선택한 요소를 새 배열로 반환합니다.    
- 주어진 start 에서 주어진 end 까지(포함하지 않음) 선택합니다 .
- 원래 배열을 변경하지 않습니다.

```
array.slice(start, end)
```
```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

### 2. JS : setTimeout()  
- 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정    
```
// myGreeting이 실행될 때까지 5초간 기다립니다.
const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}
```

#### *cf. setTimeout( ) vs setInterval( )* 
setTimeout( )|setInterval( )
---|---|
만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정, 한 번만 실행 | 지정된 간격(밀리초)으로 함수를 호출, 반복 실행이 필요한 경우 사용   



#### *cf. clearTimeout( ) vs ClearInterval( )*
*clearTimeout( )|ClearInterval( )
---|---|
setTimeout( ) 실행을 중지 | setInterval( )의 실행을 중지 

## 학습 출처
- 유튜브    
https://www.youtube.com/@JavaScriptKing    

- JS    
https://www.w3schools.com/jsref/jsref_slice_array.asp     
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice     
https://www.w3schools.com/jsref/met_win_settimeout.asp    

- 키워드    
Array.prototype.slice()     
setTimeout()    

  

