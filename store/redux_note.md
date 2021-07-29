- 책에 나오는 리덕스 패턴

  - duck패턴

    1. 파일을 구조 중심이 아닌 모듈(기능)중심으로 파일을 나누는 패턴 명칭.

  - duck패턴 규칙
    1. 항상 reducer()란 이름의 함수를 export default해야 한다.
    2. 항상 모듈의 action 생성자들을 함수형태로 export 해야 한다.
    3. 항상 npm-module-orapp/reducer/ACTION_TYPE 형태의 action 타입을 가져야 한다.
    4. 경우에 따라 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있다.
       (만약 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나, 재사용할 수 있는 라이브러리로 퍼블리싱할 경우)
