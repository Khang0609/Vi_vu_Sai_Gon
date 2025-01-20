from django.shortcuts import render
from django.http import HttpResponse
from .models import Destination

# Create your views here.
def Destinations(request):
    Data = {'Place': Destination.objects.all().order_by('id')}
    return render(request, 'Destination/destination.html', Data)