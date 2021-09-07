# Boilerplate

webpack을 사용하는 Express Web Application 을 위한 boilerplate 입니다.

# 구조

기본적으로 [express-generator의 디렉토리 구조](https://expressjs.com/ko/starter/generator.html)를 따릅니다.

- public 폴더 : 번들러로 통합되기 이전 소스 파일
- build 폴더 : 번들러로 생성된 통합 파일(build 마다 clear됨.)

## 주요 패키지

- babel : transpiling
  - babel/core
  - bable/preset-env
- sass
- webpack : bundler
  - plugins
    - html-webpack-plugin : build 할때 public/index.html 을 참고하여 번들러 파일을 참조하는 새로운 build/index.html 생성
    - mini-css-extract-plugin : css를 html의 style 태그에 넣지 않고 style.css 파일을 생성
  - presets
    - babel-loader
    - css-loader
    - sass-loader
- express : express-generator(--no-view) 로 생성
  - webpack-dev-middleware
