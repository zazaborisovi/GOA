from turtle import *

speed(50)
width(5)
begin_fill()
#walls
color('gray')
forward(200)
left(90)
forward(250)
left(90)
forward(200)
left(90)
forward(250)
left(90)
forward(75)
left(90)
end_fill()
#door
begin_fill()
color('brown')
forward(75)
right(90)
forward(50)
right(90)
forward(75)
end_fill()
#roof
color('black')
penup()
goto(200, 250)
begin_fill()
pendown()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#1
penup()
goto(25, 75)
pendown()
begin_fill()
color('cyan')
left(30)
forward(25)
left(90)
forward(25)
left(90)
forward(25)
left(90)
forward(25)
end_fill()
#2
penup()
goto (175, 75)
pendown()
begin_fill()
color('cyan')
left(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(25)
end_fill()
#tree
color('brown')
width(10)
penup()
goto (300 , 0)
pendown()
left(90)
forward(50)
penup()
goto(325, 75)
pendown()
begin_fill()
color('green')
circle(25)
end_fill()
penup()
goto(0 , 0)
pendown()
begin_fill()
#ground
right(90)
forward(1000)
right(90)
forward(1000)
right(90)
forward(3000)
right(90)
forward(1000)
right(90)
forward(2000)
end_fill()

import turtle as tur
tur.title("test")
tur.Screen().bgcolor("cyan")
tur.done()

exitonclick()