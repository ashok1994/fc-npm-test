#!/bin/bash

npx webpack --progress


echo  '**** use port generated by http-server ****'
echo  '**** open http://127.0.0.1:8080/[port]/index.webpack.html ****'

npx http-server
