from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

from .serializers import *
from ..models import *


class NoteListPagination(PageNumberPagination):
    page_size = 5


class NoteListAPIView(ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteModelSerializer
    pagination_class = NoteListPagination

    # def get_queryset(self):
    #     pass
