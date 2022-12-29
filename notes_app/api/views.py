from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def get_routes(request):
    # return JsonResponse({"routes": ["/api/notes/", "/api/notes/<str:pk>/"]}, safe=False)
    return JsonResponse("our API", safe=False)