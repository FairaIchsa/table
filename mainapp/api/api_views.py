from collections import OrderedDict

from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

from .serializers import *
from ..models import *


class NoteListPagination(PageNumberPagination):
    page_size = 5

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('table', data)
        ]))


class NoteListAPIView(ListAPIView):
    serializer_class = NoteModelSerializer
    pagination_class = NoteListPagination

    def get_queryset(self):
        queryset = Note.objects.all()
        params = ['name', 'quantity', 'distance']
        ord_vals = [self.request.query_params.get(param+'-ord') for param in params]
        for param, val in zip(params, ord_vals):
            if val:
                if val == 'asc':
                    return queryset.order_by(param)
                elif val == 'desc':
                    return queryset.order_by('-'+param)
        return queryset
