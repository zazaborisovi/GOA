from mainIxvi.models import TheMainDuck

TheMainDuck.objects.all()

params = TheMainDuck(firstname='ixvi' , lastname='ixviN2')
params.save()