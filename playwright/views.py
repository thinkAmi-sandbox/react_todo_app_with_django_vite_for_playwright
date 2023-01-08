import csv
import io

from basicauth.decorators import basic_auth_required
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.generic import TemplateView


@method_decorator(basic_auth_required, name='dispatch')
class BasicAuthView(TemplateView):
    template_name = 'playwright/basic_auth.html'


class FileDownloadView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment;  filename="download.csv"'
        writer = csv.writer(response)

        writer.writerow(['1', 'シナノゴールド'])
        writer.writerow(['2', '秋映'])

        return response


class FileUploadView(View):
    def post(self, request, *args, **kwargs):
        data = io.TextIOWrapper(request.FILES['upload_file'].file, encoding='utf-8')
        for row in csv.reader(data):
            print(row)

        messages.success(request, 'アップロードしました')

        redirect_path = reverse("playwright:file-index")
        return redirect(redirect_path)
