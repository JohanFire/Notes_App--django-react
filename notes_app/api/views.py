from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Note
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def get_routes(request):

    routes = [
        {
            'Endpoint': '/api/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/api/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/api/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/api/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/api/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def get_post_notes(request):
    if request.method == 'GET':
        notes = Note.objects.all().order_by('-updated_at') # -updated_at = descending order, shows more recent updated Note at first
        serializer = NoteSerializer(notes, many=True) # many=True because we are serializing multiple objects
        return Response(serializer.data)
    
    elif request.method == 'POST':
        data = request.data
        note = Note.objects.create(
            body = data['body']
        )
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)

@api_view(['GET'])
def get_note_details(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False) # many=False because we are serializing a single object 
    return Response(serializer.data)

# @api_view(['POST'])
# def post_note(request):
#     data = request.data
#     note = Note.objects.create(
#         body = data['body']
#     )
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)

@api_view(['PUT'])
def update_note(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance = note, data = data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(["DELETE"])
def delete_note(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response(f"Note {pk} deleted succesfully.")