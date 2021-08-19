1. Download latest protoc-gen-grpc-web  exe file
https://github.com/grpc/grpc-web/releases
2. Create new folder under C drive - name it to protoc-gen-grpc-web
3. Copy and paste downloaded file to the new folder, rename it to protoc-gen-grpc-web
4. Add in your system environment variables the path of the protoc-gen-grpc-web.exe
5. Download latest protoc file
https://github.com/protocolbuffers/protobuf/releases
6. Create new folder under C drive - name it similar to the downloaded protoc file
7. Extract downloaded files toex the new folder
8. Add in your system environment variables the path of new folder
9. Suggested to restart workstation
10. Execute install
        npm install
11. Run the following commands to generate js files
        npm run-script build