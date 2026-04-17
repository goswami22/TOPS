from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
from django.contrib import messages
from django.db.models import Count, Q
from django.core.paginator import Paginator
from django.http import HttpResponseForbidden, JsonResponse
from .models import Post, Category, User, Comment, Like, Follow
from .forms import UserRegisterForm, UserUpdateForm, PostForm, CommentForm

def register_view(request):
    if request.user.is_authenticated:
        return redirect('blog:home')
    if request.method == 'POST':
        form = UserRegisterForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user, backend='django.contrib.auth.backends.ModelBackend')
            messages.success(request, f'Welcome to WriteSphere, {user.username}!')
            return redirect('blog:home')
    else:
        form = UserRegisterForm()
    return render(request, 'blog/register.html', {'form': form})

@login_required
def profile_update(request, username):
    if request.user.username != username:
        return HttpResponseForbidden("You cannot edit someone else's profile.")

    if request.method == 'POST':
        form = UserUpdateForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your profile was updated successfully.')
            return redirect('blog:profile', username=request.user.username)
    else:
        form = UserUpdateForm(instance=request.user)

    return render(request, 'blog/profile_update.html', {'form': form})

class CustomLoginView(LoginView):
    template_name = 'blog/login.html'
    redirect_authenticated_user = True
    def get_success_url(self):
        messages.success(self.request, 'You have successfully logged in.')
        return super().get_success_url()

def logout_view(request):
    logout(request)
    messages.info(request, 'You have logged out.')
    return redirect('blog:home')

def home(request):
    posts = Post.objects.all().order_by('-created_at')
    categories = Category.objects.all()
    
    # Filtering setup
    author_q = request.GET.get('author')
    category_q = request.GET.get('category')
    
    if author_q:
        posts = posts.filter(author__username__iexact=author_q)
    if category_q:
        posts = posts.filter(category__slug=category_q)
        
    paginator = Paginator(posts, 6)
    page_num = request.GET.get('page')
    page_obj = paginator.get_page(page_num)
    
    return render(request, 'blog/home.html', {
        'page_obj': page_obj,
        'categories': categories,
    })

def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    comments = post.comments.order_by('-created_at')
    
    is_liked = False
    if request.user.is_authenticated:
        is_liked = Like.objects.filter(post=post, user=request.user).exists()
    
    if request.method == 'POST' and request.user.is_authenticated:
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.post = post
            comment.author = request.user
            comment.save()
            messages.success(request, 'Comment added successfully.')
            return redirect('blog:post_detail', slug=post.slug)
    else:
        comment_form = CommentForm()
        
    return render(request, 'blog/post_detail.html', {
        'post': post,
        'comments': comments,
        'comment_form': comment_form,
        'is_liked': is_liked,
    })

@login_required
def post_create(request):
    if request.user.role not in ['author', 'admin'] and not request.user.is_staff:
        messages.error(request, 'Only authors can create posts.')
        return redirect('blog:home')
        
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            form.save_m2m()  # For tags
            messages.success(request, 'Post created successfully.')
            return redirect('blog:post_detail', slug=post.slug)
    else:
        form = PostForm()
    return render(request, 'blog/post_form.html', {'form': form, 'title': 'Create Post'})

@login_required
def post_update(request, slug):
    post = get_object_or_404(Post, slug=slug)
    if post.author != request.user and not request.user.is_staff:
        return HttpResponseForbidden("You are not allowed to edit this post.")
        
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            form.save()
            messages.success(request, 'Post updated successfully.')
            return redirect('blog:post_detail', slug=post.slug)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_form.html', {'form': form, 'title': 'Edit Post', 'post': post})

@login_required
def post_delete(request, slug):
    post = get_object_or_404(Post, slug=slug)
    if post.author != request.user and not request.user.is_staff:
        return HttpResponseForbidden("You are not allowed to delete this post.")
        
    if request.method == 'POST':
        post.delete()
        messages.success(request, 'Post deleted successfully.')
        return redirect('blog:home')
    return render(request, 'blog/post_confirm_delete.html', {'post': post})

def profile(request, username):
    author = get_object_or_404(User, username=username)
    posts = Post.objects.filter(author=author).order_by('-created_at')
    
    is_following = False
    if request.user.is_authenticated:
        if Follow.objects.filter(follower=request.user, following=author).exists():
            is_following = True

    return render(request, 'blog/profile.html', {
        'author': author,
        'posts': posts,
        'is_following': is_following
    })

@login_required
def toggle_like(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    like, created = Like.objects.get_or_create(post=post, user=request.user)
    if not created:
        like.delete()
    return redirect('blog:post_detail', slug=post.slug)

@login_required
def toggle_follow(request, username):
    author = get_object_or_404(User, username=username)
    if request.user != author:
        follow, created = Follow.objects.get_or_create(follower=request.user, following=author)
        if not created:
            follow.delete()
    return redirect('blog:profile', username=author.username)
