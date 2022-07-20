from .views import Room_View
from django.urls import  path

urlpatterns = [
    path('home', Room_View.as_view()),
]