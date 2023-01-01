from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

def get_note(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False) # many=False because we are serializing a single object 
    return Response(serializer.data)

def update_note(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return serializer.data

def delete_note(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response(f"Note {pk} deleted succesfully.")