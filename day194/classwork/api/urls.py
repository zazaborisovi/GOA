from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet) # post, get, update, delete

urlpatterns = [
    path('', include(router.urls)),
]