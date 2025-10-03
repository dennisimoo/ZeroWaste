import requests
import os
from dotenv import load_dotenv

load_dotenv()

# Load phone numbers from file
with open('phone_numbers.txt', 'r') as file:
    phone_numbers = [line.strip() for line in file if line.strip()]

# Make calls to each number
for phone_number in phone_numbers:
    # Add +1 prefix if not already there
    if not phone_number.startswith('+'):
        phone_number = '+1' + phone_number
    
    print(f"Calling {phone_number}...")
    
    # Make an outbound call using VAPI REST API
    response = requests.post(
        'https://api.vapi.ai/call',
        headers={
            'Authorization': f'Bearer {os.getenv("VAPI_API_KEY")}',
            'Content-Type': 'application/json'
        },
        json={
            "assistantId": os.getenv("VAPI_ASSISTANT_ID"),
            "phoneNumberId": os.getenv("VAPI_PHONE_NUMBER_ID"),
            "customer": {
                "number": phone_number
            }
        }
    )
    
    if response.status_code == 201:
        print(f"✓ Call initiated to {phone_number}")
    else:
        print(f"✗ Failed to call {phone_number}: {response.text}")