from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User, Post, Comment

class UserRegisterForm(UserCreationForm):
    role = forms.ChoiceField(choices=(('author', 'Author'), ('reader', 'Reader')), widget=forms.RadioSelect, initial='reader')

    class Meta:
        model = User
        fields = ['username', 'email', 'role', 'profile_picture']

class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'bio', 'profile_picture']

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'category', 'tags', 'cover_image', 'content']
        widgets = {
            'tags': forms.SelectMultiple(attrs={'class': 'form-select'}),
        }

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 3, 'placeholder': 'Write a comment...'}),
        }
