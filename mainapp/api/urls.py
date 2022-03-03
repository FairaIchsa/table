from django.urls import path

from .api_views import *

app_name = 'api'

urlpatterns = [
    path('', NoteListAPIView.as_view(), name='table')
]
