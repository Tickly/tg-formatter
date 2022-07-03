# formatter.js

提供一些数据的格式化方法，有数字，货币，时间等，具体可见源代码注释，或test代码


## asText

input|output
|-|-|
0|'0'
'0'|'0'
null|''
undefined|''
true / false|'true' / 'false'

## asDate
格式化为日期 2020-01-01

## asTime
格式化为时间 10:30:00

## asDateTime
格式化为日期+时间 2020-01-01 10:30:30

## asCurrency
格式化为货币

## asDecimal
格式化为小数

## asPercent
格式化为百分数
