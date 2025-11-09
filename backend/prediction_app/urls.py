# from django.urls import path

# urlpatterns = [
    # Add your app's URL patterns here
# ]
from django.urls import path
from .views import PredictPriceAPIView

urlpatterns = [
    path('predict/', PredictPriceAPIView.as_view(), name='predict-price'),
]
