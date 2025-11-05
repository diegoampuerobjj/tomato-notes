from rest_framework import viewsets, permissions, filters
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Note.objects.filter(owner=user)
        tag = self.request.query_params.get("tag")
        search = self.request.query_params.get("q")
        if tag:
            queryset = queryset.filter(tags__icontains=tag)
        if search:
            queryset = queryset.filter(title__icontains=search) | queryset.filter(content__icontains=search)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

