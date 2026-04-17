from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Category, Tag, Post, Comment, Like, Follow

from django.contrib.auth.hashers import make_password

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'is_staff')
    fieldsets = (
        ('Account Info', {'fields': ('username', 'password', 'email')}),
        ('Extra Fields', {'fields': ('role', 'bio', 'profile_picture')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
    )

    def save_model(self, request, obj, form, change):
        # Hash the password if it's new/changed in raw text
        if obj.password and not obj.password.startswith('pbkdf2_'):
            obj.password = make_password(obj.password)
        super().save_model(request, obj, form, change)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'created_at')
    list_filter = ('author', 'category', 'created_at')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'created_at')
    search_fields = ('content',)

admin.site.register(User, CustomUserAdmin)
admin.site.register(Like)
admin.site.register(Follow)
