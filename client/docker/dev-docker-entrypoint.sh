#!/bin/sh

set -e

echo "Environment: $NODE_ENV"

# install packages
pnpm i

# run passed commands
pnpm ${@}
