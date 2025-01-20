from django.db import models

# Create your models here.
class Destination(models.Model):
    slide_index = models.IntegerField()
    name = models.CharField(max_length=200)
    link = models.URLField(max_length=1000)
    image = models.CharField(max_length=250)
    address = models.CharField(max_length=1000)
    status = models.CharField(max_length=100, null=True)
    
    def __str__(self):
        return self.name
