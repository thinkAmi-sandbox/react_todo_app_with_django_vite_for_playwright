from django.urls import path, re_path
from django.views.generic import RedirectView, TemplateView

from playwright.views import BasicAuthView, FileDownloadView, FileUploadView

app_name = 'playwright'

urlpatterns = [
    # locator
    path('locator', TemplateView.as_view(template_name='playwright/locator.html')),

    # Basic auth
    path('basic-auth', BasicAuthView.as_view()),

    # redirect
    path('redirect-from', RedirectView.as_view(pattern_name='playwright:redirected')),
    path('redirect-to',  TemplateView.as_view(template_name='playwright/redirected.html'), name='redirected'),

    # new tab
    path('open-tab',  TemplateView.as_view(template_name='playwright/open_tab.html')),
    path('new-tab',  TemplateView.as_view(template_name='playwright/new_tab.html'), name='new-tab'),

    # File
    path('file-index',  TemplateView.as_view(template_name='playwright/file_index.html'), name='file-index'),
    path('file-download',  FileDownloadView.as_view(), name='file-download'),
    path('file-upload',  FileUploadView.as_view(), name='file-upload'),

    # React
    re_path('', TemplateView.as_view(template_name='index.html')),
]
