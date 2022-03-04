from rest_framework import serializers

from ..models import *


class NoteModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
