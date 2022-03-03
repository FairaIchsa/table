from django.contrib import admin
from django.urls import path, include

from mainapp.views import *

app_name = 'mainapp'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mainapp.api.urls', namespace='api')),
    path('', index),
]
