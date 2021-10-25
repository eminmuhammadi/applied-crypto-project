#!/bin/sh

# ===
# Obtain a public key
# ===
mkdir -p keys

# Get the public key of Auth Service
curl http://127.0.0.1:65000/auth/public-key -o keys/public.pem