#!/bin/sh
# Copyright (c) 2024 roket1428 meorhan@protonmail.com
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#
# Django to static-site converter
# Main idea:
# Since this project (and many others) is just a single html page with no interaction or backend logic, I thought
# hosting a full-blown django application for it would be wasteful. There are plans to make some parts dynamic
# and not dependent on arbitrary paths but for now it does the job.

die () {
    echo $1 >&2
    exit 1
}

cd "$(dirname "$0")" || die "failed to change directory to script (project) root"

if [ ! -d "build" ]; then
    mkdir build || die "failed to create build dir"
else
    rm -rf build/*
fi

cp -r ./main/static build/
npx postcss ./main/static/css/main.css -o ./build/static/css/styles.css --env production

python headless_render.py

if [ -f "build.tar.gz" ]; then
    rm build.tar.gz
fi
tar cfv build.tar.gz build/
