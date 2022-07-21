from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, userInRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    path('user-in-room', userInRoom.as_view())
]