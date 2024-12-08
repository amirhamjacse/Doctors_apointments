from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class DoctorListView(APIView):
    def get(self, request, *args, **kwargs):
        # Example response for demo purposes
        doctors = [
            {"id": 1, "name": "Dr. John Doe", "specialization": "Cardiologist"},
            {"id": 2, "name": "Dr. Jane Smith", "specialization": "Dermatologist"}
        ]
        return Response(doctors, status=status.HTTP_200_OK)
