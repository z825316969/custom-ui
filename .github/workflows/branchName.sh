
requiredPart="feature/"

result=$(echo $1 | grep "${requiredPart}")
if [[ "$result" != "" ]]
then
    exit 0
else
    exit 1
fi
