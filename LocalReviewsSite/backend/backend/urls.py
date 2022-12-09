from django.urls import path, include
from rest_framework import routers
from client import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'reviews', views.ReviewViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'businesses', views.BusinessViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]