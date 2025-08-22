from django.urls import path
from . import views

urlpatterns = [
    path("krabs/" , views.myKrabs , name="krabs")
]