#!/bin/sh
ng build  --base-href "https://vikibalint2023.hu/"
npx angular-cli-ghpages --dir=dist/wedding
