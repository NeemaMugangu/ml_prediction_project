from django.shortcuts import render

# Create your views here.
import joblib
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import numpy as np

# Define the path to your model file
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model.pkl')

# Load the model globally when the app starts
try:
    MODEL = joblib.load(MODEL_PATH)
    print("ML Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    MODEL = None


class PredictPriceAPIView(APIView):
    """
    API endpoint to receive input data and return a price prediction.
    """
    def post(self, request, format=None):
        if MODEL is None:
            return Response({'error': 'ML model failed to load.'}, status=status.HTTP_503_SERVICE_UNAVAILABLE)

        # 1. Get data from the POST request (e.g., features like 'area', 'month', etc.)
        data = request.data
        required_fields = ['feature1', 'feature2', 'feature3'] # Replace with your model's actual features

        # Basic input validation
        if not all(field in data for field in required_fields):
            return Response({'error': 'Missing input features.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # 2. Convert input data to the format your model expects (e.g., a 2D numpy array)
            features = [float(data[f]) for f in required_fields]
            input_array = np.array([features])

            # 3. Make the prediction
            prediction = MODEL.predict(input_array)[0]

            # 4. Return the prediction
            return Response({'predicted_price': prediction}, status=status.HTTP_200_OK)

        except ValueError:
            return Response({'error': 'Invalid data format. All features must be numeric.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Catch any unexpected errors during prediction
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)