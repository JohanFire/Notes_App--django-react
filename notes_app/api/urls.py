from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('notes/', views.get_post_notes, name="notes"),
    path('notes/<str:pk>/', views.note_details, name="note"),
]