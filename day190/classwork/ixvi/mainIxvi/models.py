from django.db import models

class TheMainDuck(models.Model):
    firstname = models.CharField(max_length=10)
    lastname = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"