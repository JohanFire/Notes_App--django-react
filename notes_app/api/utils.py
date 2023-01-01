from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

def get_all_notes(request):
    notes = Note.objects.all().order_by('-updated_at') # -updated_at = descending order, shows more recent updated Note at first
    serializer = NoteSerializer(notes, many=True) # many=True because we are serializing multiple objects
    return Response(serializer.data)

def post_new_note(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

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