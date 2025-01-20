from .views import Cushine
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('', Cushine, name='cushine'),
]