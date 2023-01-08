from django.urls import path, include
from rest_framework import routers

from api import views
from api.views import MuiView

app_name = 'api'

router = routers.SimpleRouter()
router.register('tasks', viewset=views.TaskViewSet)

urlpatterns = [
    path('playwright/mui/', MuiView.as_view()),
    path('', include(router.urls)),
]
