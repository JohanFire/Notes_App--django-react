from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('notes/', views.get_post_notes, name="notes"),
    # path('notes/post/', views.post_note, name="post-note"),
    path('notes/<str:pk>/update/', views.update_note, name="update-note"),
    path('notes/<str:pk>/delete/', views.delete_note, name="delete-note"),
    path('notes/<str:pk>/', views.get_note_details, name="note"),
]