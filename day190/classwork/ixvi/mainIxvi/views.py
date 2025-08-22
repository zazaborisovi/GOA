from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import json

def mainIxvi(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render())

def idkName(req):
    x = {
        "name": "randomname",
        "surname": "randomsurname",
        }
    y = json.dumps(x)
    return HttpResponse(y)