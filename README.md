# hqf.tutorials.vuejs

> vue demos by HQF

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## CSS
 using `vue-icon-font`
 >A iconfont plugin for Vuejs
 

### LESS version
```
npm install --save-dev bootstrap less less-loader
```
And include the LESS file in src/main.js
```
require('../node_modules/bootstrap/less/bootstrap.less')
```
### SASS version
```
npm install --save-dev bootstrap-sass node-sass sass-loader
```
And include the SASS file in src/main.js
```
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
```


## References
### General
[基于Vue2 搭建移动端 webapp 框架](http://www.jianshu.com/p/beae26e57b0f)

[10 Best Vue.js based UI Frameworks for Building Mobile Apps](https://superdevresources.com/vuejs-mobile-frameworks/)



### UI
[vue-admin](https://github.com/vue-bulma/vue-admin)

[Using Bootstrap with Vue.js](http://vuetips.com/bootstrap)


## npm mirror
npm install --registry=https://registry.npm.taobao.org

