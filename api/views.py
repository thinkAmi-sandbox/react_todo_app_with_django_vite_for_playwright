from rest_framework import viewsets, views, status
from rest_framework.response import Response

from api.serializers import TaskSerializer
from task.models import Task


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class MuiView(views.APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        return Response({}, status.HTTP_201_CREATED)
