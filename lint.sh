#!/bin/sh

RET=0

for i in $(git rev-list "$1".."$2")
do
    printf "Checking $i for JIRA reference..."
    if git log -1 --format="%B" $i | grep -qsE "[A-Z]+-[0-9]+"
    then
        echo "looks ok."
    else
        echo "failed."
        RET=1
    fi
done

exit $RET