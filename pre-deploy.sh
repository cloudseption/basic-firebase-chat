cd react-chat && \
npm run-script build && \
zip -r chat-app-build ./build && \
aws s3 cp ./chat-app-build.zip s3://cloudception-bucket/public/ && \
rm ./chat-app-build.zip