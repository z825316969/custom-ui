
requiredPart="feature/"

echo "$1" |grep -q "feature/" && exit 0 || exit 1
