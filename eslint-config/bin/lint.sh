#!/usr/bin/env bash

set -e
set -o pipefail

format=false
if [ "$1" = "--format" ]; then
  format=true
  shift
fi

if [ "${#}" -gt 0 ]; then
  files=( "${@}" )
else
  files=( . )
fi

eslint_format_flag=""
prettier_format_flag=( --check )
if [ "$format" = true ]; then
  eslint_format_flag="--fix"
  prettier_format_flag=( --list-different --write )
fi

npx eslint $eslint_format_flag "${files[@]}"
npx prettier "${prettier_format_flag[@]}" "${files[@]}"
