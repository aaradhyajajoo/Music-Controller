from django.shortcuts import render
from itsdangerous import Serializer
from .models import Room
from .serializers import RoomSerializers
from rest_framework import generics
# Create your views here.

class Room_View (generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializers
