#!/bin/bash

set -e

npx rollup -c

echo  '**** use port generated by http-server ****'
echo  '**** open http://127.0.0.1:8080/[port]/index.rollup.html ****'

npx http-server

echo "Done"
