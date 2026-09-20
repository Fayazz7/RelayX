from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    phone_number = models.CharField(
        max_length=32,
        unique=True,
        null=True,
        blank=True,
    )
    email = models.EmailField(
        unique=True,
        null=True,
        blank=True,
    )
    name = models.CharField(max_length=150, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ('-date_joined',)

    def __str__(self):
        return self.name or self.email or self.phone_number or f'User {self.pk}'
