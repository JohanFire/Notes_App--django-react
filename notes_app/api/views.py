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
def get_notes(request):
    notes = Note.objects.all().values()
    serializer = NoteSerializer(notes, many=True) # many=True because we are serializing multiple objects
    return Response(serializer.data)

@api_view(['GET'])
def get_note_details(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False) # many=False because we are serializing a single object 
    return Response(serializer.data)