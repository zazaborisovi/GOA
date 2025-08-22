from django.db import models

class Member(models.Model):
    FirstName = models.CharField(max_length=200)
    LastName = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.FirstName} {self.LastName}"