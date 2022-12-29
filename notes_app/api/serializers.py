from rest_framework.serializers import ModelSerializer
from .models import Note

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__' # serialize all fields from Note model
        # fields = ('id', 'body') # serialize only id and body fields from Note model