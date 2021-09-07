# Boilerplate

webpack을 사용하는 Express Web Application 을 위한 boilerplate 입니다. 기본적인 개발환경(babel, SASS)을 포함합니다.

# 구조

기본적으로 [express-generator의 디렉토리 구조](https://expressjs.com/ko/starter/generator.html)를 따릅니다.

- public 폴더 : 번들러로 통합되기 이전 소스 파일
- build 폴더 : 번들러로 생성된 통합 파일(build 마다 clear됨.)
- webpack config files
  - webpack.common.js : 공통 config
  - webpack.dev.js : development mode config
  - webpack.prod.js : production mode config

## 주요 패키지 및 기능

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
- express : express-generator(--no-view option) 로 생성
  - webpack-dev-middleware

## 스크립트

- `npm start` : NODE_ENV 환경변수를 development로 설정한 후 express 서버 실행. webpack-dev-middleware를 통해 번들 파일 변화시 Hot-reload 됨. nodemon을 통해 routes 파일 변화시 hot-reload 됨.
- `npm run build` : webpack build 실행(config file: webpack.prod.js)
- `npm run server` : NODE_ENV 환경변수를 production으로 설정한 후 express 실행.
