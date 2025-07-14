#!/bin/bash

# Test GET /recipes
curl -i http://localhost:3000/recipes

# Test POST /recipes
curl -i -X POST http://localhost:3000/recipes \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","ingredients":"ing","instructions":"instr"}'
