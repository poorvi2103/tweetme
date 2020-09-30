from django.http import Http404
from django.shortcuts import render

from .models import Profile 
# Create your views here.
def profile_detail_view(request , username , *args , **kwargs):
    qs = Profile.objects.filter(user__username = username)
    if not qs.exits():
        raise Http404
    profile_obj = qs.first()
    context = {
        "username" : username,
        "profile":profile_obj
        }
    return render(request,"profiles/detail.html",context)