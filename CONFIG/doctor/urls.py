
from django.contrib import admin
from django.urls import path, re_path
from .views import DoctorListView

urlpatterns = [
    path('doctorlist/', DoctorListView.as_view(), name='doctlist'),
]