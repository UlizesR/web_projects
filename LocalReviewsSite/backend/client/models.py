from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Review(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    stars = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    business = models.ForeignKey('Business', on_delete=models.CASCADE)
    
class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.CharField(max_length=100, unique=True, blank=True, null=True)
    ordinal = models.IntegerField()
    business = models.ManyToManyField('Business')
    
class Business(models.Model):  
    LOW = '$'
    MID_LOW =  '$$'
    MID = '$$$'
    MID_HIGH = '$$$$'
    HIGH = '$$$$$'
    
    PRICE_CHOICES = [
        (LOW, 'Very Cheap'),
        (MID_LOW, 'Cheap'),
        (MID, 'Moderate'),
        (MID_HIGH, 'Expensive'),
        (HIGH, 'Very Expensive'),
    ]
    
    name = models.CharField(max_length=255)
    slug = models.CharField(max_length=100, unique=True, blank=True, null=True)
    descriptions = models.TextField()
    price_range = models.CharField(max_length=10, choices=PRICE_CHOICES, default=MID)    
    street_adress = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    region = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    website = models.URLField(max_length=255)
    phone = models.CharField(max_length=255)
    hours = models.CharField(max_length=255)
    
    
    
    
    
    