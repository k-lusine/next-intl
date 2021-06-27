#!/bin/sh
PREVIEW_CHECK=$(curl --location --request POST 'https://api.github.com/repos/k-lusine/next-intl/check-runs' --header "Accept:application/vnd.github.v3+json" --header 'Content-Type:application/json' --user 'k-lusine:${{secrets.GITHUB_TOKEN}}' --data-raw '{"details_url":"https://www.google.com", "name":"Preview Url", "head_sha":"${{github.sha}}" }' ),
echo testteste
echo $PREVIEW_CHECK
echo esgsgsdg
echo $PREVIEW_CHECK | jq '.id'
CHECK_ID=$(echo $PREVIEW_CHECK | jq '.id')
echo $CHECK_ID
curl --location --request PATCH "https://api.github.com/repos/k-lusine/next-intl/check-runs/${CHECK_ID}" --header "Accept:application/vnd.github.v3+json" --header 'Content-Type:application/json' --user 'k-lusine:${{secrets.GITHUB_TOKEN}}' --data-raw '{"details_url":"https://www.google.com"}'
