from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def myKrabs(request):
    template = loader.get_template("myKrabs.html")
    return HttpResponse(template.render())