requiredPart="feature/"

if [[ $1 =~ $requiredPart ]]
then
  exit 0
else
  exit 1
fi
