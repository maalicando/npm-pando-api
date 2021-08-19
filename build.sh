#!/bin/bash
echo "Generating js proto files..."
find . -type f -name "*.proto" -exec sh -c '
   for file do
     dir="."
     echo "$dir"
     echo "$file"
     protoc -I=. "$file" --js_out=import_style=commonjs:"$dir" --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"$dir"
   done' sh {} +
echo "Complete. Please close window."
read