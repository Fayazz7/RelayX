from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(
        self,
        phone_number=None,
        email=None,
        password=None,
        **extra_fields,
    ):
        if not phone_number and not email:
            raise ValueError('A phone number or email address is required.')

        normalized_email = self.normalize_email(email) if email else None
        user = self.model(
            phone_number=phone_number or None,
            email=normalized_email,
            **extra_fields,
        )

        if password is None:
            user.set_unusable_password()
        else:
            user.set_password(password)

        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, password, **extra_fields):
        if not password:
            raise ValueError('A password is required for a superuser.')

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(
            phone_number=phone_number,
            password=password,
            **extra_fields,
        )
