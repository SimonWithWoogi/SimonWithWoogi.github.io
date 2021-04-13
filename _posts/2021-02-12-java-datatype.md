---
title: JAVA_자료형
author: Woogi
date: 2021-02-12 15:10:00 +0800
categories: [Language, JAVA]
tags: [java]
image: /assets/img/java/java_logo.png

---

## <span style="color:darkblue">1. What is 자료형</span>

<span style="color:darkblue">`1.1. 자료형이란 무엇인가`</span>

자바 컴파일러에 의해서 해석되는 자료형태를 기본 자료형이라고 합니다. 흔히 변수를 선언할때 어떤 타입의 변수를 쓸건지 정하는데 그 타입을 자료형이라고 생각하시면 됩니다. 또 변수란 말 그대로 값이 변할 수 있는 클래스나 매소드의 자료구조(형태)로써, 프로그램 상에서 수치나 문자열, 객체의 인스턴스 등을 일시적으로 기억하는 기억공간의 영역을 말하는 것이랍니다. 그러니까, 변수를 선언할 때, 자료형을 사용하는 것이죠.

더 간단히 말씀 드리면, 수학에서 자주 사용하는 x, y를 실수이다, 정수이다, 문자이다 등등으로 값의 형태를 나타낼 때, x, y는 변수가 되는 것이고 실수, 정수, 문자라는 것은 자료형이 되는 것이죠. 

이게 자료형과 변수의 개념입니다.

## <span style="color:darkblue">2. 종류</span>

<span style="color:darkblue">`2.1. 자료형의 종류`</span>

![img](/assets/img/java/java_01_01.png)

이렇게 표를 보시면 잘 정리가 되어있는데 가장 많이 쓰는 정수형과 실수형이 있는데 

정수는 말그대로 숫자를 말하는데 1, 2, 3, 4, 5 .... 등등 요런거로 실수형은 소수점이 있는 숫자를 말하고 

또 많이 쓰는 자료형중 String 이라고 있는데 요거는 char(요건 문자단 하나만 표현가능(예 : A))를 배열처럼 묶어놔 여러개의 문자를 표현하는 자료형이라고 생각하시면 됩니다. 자바의 기본 자료형은 아니고 wrapper class 라고 합니다. 또 이러면 wrapper class 가 뭔지 궁금하실텐데 그건 다음 시간에 설명하겠습니다.

<span style="color:darkblue">`2.2. 쓰는법...`</span>

자 저번주에 했던 이클립스를 실행하시면 이제 프로젝트 만들어서 콘솔창에 헬로월드까지 띄어봤었는데

밑의 코드를 한번 해보면 변수를 선언하면서 자료형을 구분하면서 쓰면 어떨때 쓰는지 잘 아실거 같네요.

```java
package sample01;

public class mainClass {
	
	public static void main(String[] args) {

//변수사용법

int number= 123; // 대입연산자

System.out.println(number);

byte by = 12;

System.out.println("by = " + by);

short sh = 1234;

System.out.println("sh = " + sh);

long lo = 456781234567894L;

System.out.println("lo = " + lo);


float f = 123.4F;

System.out.println("f = " + f);


double d = 123.456789;

System.out.println("d = " + d);


char c = 'A';

System.out.println("c = " + c);

// 아스키코드로 표현해서 65가 문자 A랑 대칭된다.
c = 65;
System.out.println("c = " + c);
System.out.printf("c = %c %d \n" , c, (int)c);


//문자열

//String == 자료형이 아님

//Wrapper class == 자료형을 클래스로 만들어놓은 것

String str;

str = "안녕하세요";

System.out.println("str = " + str);

str = "반갑습니다";

System.out.println("str = " + str);

// true(1)/false(0)

// bool(1byte)0/1 / BOOL(4byte) 0/213213 c언어

boolean b;

b = true;

System.out.println(b);

b = false;

System.out.println(b);


// escape sequrnce

// \n == 개행

// \t == tap 띄어쓰기

System.out.println("hello\t"+"world");

// "world"

System.out.println("\"world\"");

System.out.println("\'world\'");

}
}
```



요렇게 실행해 보시면 콘솔창에 문자열, 숫자 등등이 잘 나오는걸 확인할 수 있습니다.



다음시간에 오겠습니다.!