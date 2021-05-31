
requiredPart="feature/"

result=$(echo $2 | grep "${requiredPart}")
if [[ "$result" != "" ]]
then
    exit 0
else
    exit 1
fi
